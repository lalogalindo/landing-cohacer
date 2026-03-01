import * as React from "react";
import { cn } from "../../lib/cn";
import { accordionStyles } from "./Accordion.styles";

type TipoAccordion = "single" | "multiple";

type BaseAccordionProps = {
  /**
   * Define el comportamiento del acordeón.
   * - "single": solo un item abierto a la vez
   * - "multiple": permite múltiples items abiertos
   */
  type?: TipoAccordion;

  /**
   * Solo aplica cuando type="single".
   * Permite cerrar el item activo dejando todos cerrados.
   */
  collapsible?: boolean;

  /** Clases adicionales para el contenedor raíz */
  className?: string;

  /** Items del acordeón */
  children: React.ReactNode;
};

type SingleProps = {
  type?: "single";
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
};

type MultipleProps = {
  type: "multiple";
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
};

export type AccordionProps = BaseAccordionProps &
  (SingleProps | MultipleProps);

type AccordionContextValue =
  | {
    type: "single";
    value: string | null;
    collapsible: boolean;
    setValue: (next: string | null) => void;
  }
  | {
    type: "multiple";
    value: string[];
    setValue: (next: string[]) => void;
  };

const AccordionContext =
  React.createContext<AccordionContextValue | null>(null);

type AccordionItemContextValue = {
  value: string;
  isOpen: boolean;
  toggle: () => void;
};

const AccordionItemContext =
  React.createContext<AccordionItemContextValue | null>(null);

/**
 * Determina si un item está abierto.
 *
 * @param type Tipo de acordeón
 * @param accordionValue Valor actual del acordeón
 * @param itemValue Valor del item
 * @returns true si está abierto
 */
function estaAbierto(
  type: TipoAccordion,
  accordionValue: string | null | string[],
  itemValue: string
): boolean {
  if (type === "multiple") {
    return Array.isArray(accordionValue) && accordionValue.includes(itemValue);
  }
  return accordionValue === itemValue;
}

/**
 * Componente raíz del Accordion.
 *
 * Maneja:
 * - Estado controlado y no controlado
 * - Lógica single/multiple
 * - Contexto compartido para items
 */
export function Accordion(props: AccordionProps) {
  const {
    type = "single",
    collapsible = false,
    className,
    children,
  } = props;

  const esControlado = props.value !== undefined;

  const [internalValue, setInternalValue] = React.useState<
    string | null | string[]
  >(
    type === "multiple"
      ? props.defaultValue ?? []
      : props.defaultValue ?? null
  );

  const value = esControlado ? props.value : internalValue;

  /**
   * Actualiza el valor del acordeón respetando
   * modo controlado o interno.
   *
   * @param next Nuevo valor
   */
  function setValue(next: any) {
    if (!esControlado) {
      setInternalValue(next);
    }
    props.onValueChange?.(next);
  }

  const contextValue: AccordionContextValue =
    type === "multiple"
      ? {
        type: "multiple",
        value: (value as string[]) ?? [],
        setValue,
      }
      : {
        type: "single",
        value: (value as string | null) ?? null,
        collapsible,
        setValue,
      };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={cn(accordionStyles.root, className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = {
  /** Identificador único del item */
  value: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Representa un item individual del acordeón.
 *
 * Encapsula su estado abierto/cerrado.
 */
export function AccordionItem({
  value,
  className,
  children,
}: AccordionItemProps) {
  const accordionContext = React.useContext(AccordionContext);

  if (!accordionContext) {
    throw new Error("AccordionItem debe usarse dentro de Accordion");
  }

  // ✅ Congelamos el contexto no-null para que TS no lo pierda en closures
  const ctx = accordionContext;
  const abierto = estaAbierto(ctx.type, ctx.value as any, value);

  /**
   * Alterna el estado del item.
   */
  function toggle() {
    if (ctx.type === "multiple") {
      const current = ctx.value;
      const exists = current.includes(value);

      ctx.setValue(
        exists ? current.filter((v) => v !== value) : [...current, value]
      );
      return;
    }

    // ctx.type === "single"
    if (abierto) {
      if (ctx.collapsible) {
        ctx.setValue(null);
      }
      return;
    }

    ctx.setValue(value);
  }

  return (
    <AccordionItemContext.Provider value={{ value, isOpen: abierto, toggle }}>
      <div
        data-state={abierto ? "open" : "closed"}
        className={cn(accordionStyles.item, className)}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

type AccordionTriggerProps = {
  className?: string;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
};

/**
 * Botón que controla la apertura del item.
 *
 * Incluye:
 * - aria-expanded
 * - animación de icono
 * - focus ring accesible
 */
export function AccordionTrigger({
  className,
  rightIcon,
  children,
}: AccordionTriggerProps) {
  const context = React.useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "AccordionTrigger debe usarse dentro de AccordionItem"
    );
  }

  return (
    <button
      type="button"
      onClick={context.toggle}
      aria-expanded={context.isOpen}
      className={cn(accordionStyles.trigger, className)}
    >
      {children}

      {rightIcon && (
        <span
          className={cn(
            accordionStyles.triggerIcon,
            context.isOpen && "rotate-180"
          )}
        >
          {rightIcon}
        </span>
      )}
    </button>
  );
}

type AccordionContentProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Contenido colapsable del item.
 *
 * Usa técnica grid-rows para animar sin medir altura.
 */
export function AccordionContent({
  className,
  children,
}: AccordionContentProps) {
  const context = React.useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "AccordionContent debe usarse dentro de AccordionItem"
    );
  }

  return (
    <div
      className={cn(
        accordionStyles.contentWrapper,
        context.isOpen
          ? accordionStyles.contentOpen
          : accordionStyles.contentClosed
      )}
    >
      <div className={accordionStyles.contentInner}>
        <div
          className={cn(
            accordionStyles.contentBody,
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}