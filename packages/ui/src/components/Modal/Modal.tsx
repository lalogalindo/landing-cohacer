import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/cn";
import { getModalSizeClass, modalStyles, type ModalSize } from "./Modal.styles";

type ModalContextValue = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ModalContext = React.createContext<ModalContextValue | null>(null);

/**
 * Obtiene el contexto interno del modal.
 *
 * Propósito:
 * Permitir que subcomponentes como ModalClose puedan cerrar el modal
 * sin tener que pasar props manualmente.
 *
 * @returns Contexto del modal con open y onOpenChange.
 */
function useModalContext(): ModalContextValue {
  const ctx = React.useContext(ModalContext);
  if (!ctx) {
    throw new Error("Modal subcomponent debe usarse dentro de <Modal />");
  }
  return ctx;
}

export type ModalProps = {
  /**
   * Indica si el modal está abierto o cerrado.
   */
  open: boolean;

  /**
   * Callback para abrir/cerrar el modal.
   */
  onOpenChange: (open: boolean) => void;

  /**
   * Tamaño del modal.
   */
  size?: ModalSize;

  /**
   * Contenido del modal (usa ModalHeader/ModalBody/ModalFooter opcionalmente).
   */
  children: React.ReactNode;

  /**
   * Clases extra para el panel del modal.
   */
  className?: string;

  /**
   * ID opcional para asociar accesibilidad (por ejemplo a un título).
   */
  ariaLabelledBy?: string;

  /**
   * ID opcional para asociar accesibilidad (por ejemplo a una descripción).
   */
  ariaDescribedBy?: string;
};

/**
 * Modal genérico reutilizable (headless + composable).
 *
 * Propósito:
 * Renderizar un diálogo accesible tipo overlay con comportamiento estándar:
 * - Cierra con Escape
 * - Cierra con click fuera del panel
 * - Bloquea scroll del body al abrir
 * - Renderiza en portal (document.body)
 *
 * Este componente NO impone estructura, pero soporta una composición recomendada:
 * <Modal>
 *   <ModalHeader ... />
 *   <ModalBody ... />
 *   <ModalFooter ... />
 * </Modal>
 *
 * @param open Estado de visibilidad del modal.
 * @param onOpenChange Callback para abrir/cerrar.
 * @param size Tamaño visual del panel.
 * @param children Contenido renderizado dentro del panel.
 * @param className Clases extra para el panel.
 * @param ariaLabelledBy ID del elemento que etiqueta el diálogo.
 * @param ariaDescribedBy ID del elemento que describe el diálogo.
 */
export function Modal({
  open,
  onOpenChange,
  size = "md",
  children,
  className,
  ariaLabelledBy,
  ariaDescribedBy,
}: ModalProps) {
  const overlayRef = React.useRef<HTMLDivElement>(null);

  /**
   * Bloquea el scroll del body mientras el modal está abierto.
   *
   * Propósito:
   * Evitar que el usuario haga scroll en el fondo cuando el diálogo está activo.
   */
  React.useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /**
   * Maneja el cierre del modal con Escape.
   *
   * Propósito:
   * Permitir salida rápida del diálogo con teclado.
   */
  React.useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onOpenChange(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  /**
   * Maneja click fuera del panel para cerrar el modal.
   *
   * Propósito:
   * Cerrar el modal cuando el usuario hace click en el overlay (fondo).
   *
   * @param event Evento de click del overlay.
   */
  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === overlayRef.current) {
      onOpenChange(false);
    }
  }

  if (!open) return null;

  return createPortal(
    <ModalContext.Provider value={{ open, onOpenChange }}>
      <div
        ref={overlayRef}
        className={modalStyles.overlay}
        onClick={handleOverlayClick}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          tabIndex={-1}
          className={cn(
            modalStyles.panelBase,
            getModalSizeClass(size),
            className
          )}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.body
  );
}

export type ModalHeaderProps = {
  /**
   * Título del modal.
   */
  title: React.ReactNode;

  /**
   * Descripción opcional debajo del título.
   */
  description?: React.ReactNode;

  /**
   * Controla si se muestra el botón de cerrar en el header.
   */
  showCloseButton?: boolean;

  /**
   * Clases extra para el contenedor del header.
   */
  className?: string;

  /**
   * ID opcional para asociarlo como aria-labelledby.
   */
  titleId?: string;

  /**
   * ID opcional para asociarlo como aria-describedby.
   */
  descriptionId?: string;
};

/**
 * Header estándar de modal (recomendado).
 *
 * Propósito:
 * Dar estructura consistente al modal, incluyendo:
 * - Título
 * - Descripción opcional
 * - Botón de cerrar en el header
 *
 * @param title Título del modal.
 * @param description Texto de apoyo opcional.
 * @param showCloseButton Muestra/oculta botón de cerrar.
 * @param className Clases extra.
 * @param titleId ID opcional para accesibilidad.
 * @param descriptionId ID opcional para accesibilidad.
 */
export function ModalHeader({
  title,
  description,
  showCloseButton = true,
  className,
  titleId,
  descriptionId,
}: ModalHeaderProps) {
  return (
    <div className={cn(modalStyles.header, className)}>
      <div className="min-w-0">
        <div id={titleId} className={modalStyles.title}>
          {title}
        </div>

        {description ? (
          <div id={descriptionId} className={modalStyles.description}>
            {description}
          </div>
        ) : null}
      </div>

      {showCloseButton ? <ModalClose ariaLabel="Cerrar" /> : null}
    </div>
  );
}

export type ModalBodyProps = {
  /**
   * Contenido principal del modal.
   */
  children: React.ReactNode;

  /**
   * Clases extra para el body.
   */
  className?: string;
};

/**
 * Body estándar del modal (recomendado).
 *
 * Propósito:
 * Proveer un contenedor consistente para el contenido principal.
 *
 * @param children Contenido renderizado en el body.
 * @param className Clases extra.
 */
export function ModalBody({ children, className }: ModalBodyProps) {
  return <div className={cn(modalStyles.body, className)}>{children}</div>;
}

export type ModalFooterProps = {
  /**
   * Contenido del footer (normalmente botones).
   */
  children: React.ReactNode;

  /**
   * Clases extra para el footer.
   */
  className?: string;
};

/**
 * Footer estándar del modal (recomendado).
 *
 * Propósito:
 * Dar una zona consistente de acciones, ideal para:
 * - Cancelar/Cerrar
 * - Continuar/Guardar
 *
 * @param children Contenido del footer (botones/acciones).
 * @param className Clases extra.
 */
export function ModalFooter({ children, className }: ModalFooterProps) {
  return <div className={cn(modalStyles.footer, className)}>{children}</div>;
}

export type ModalCloseProps = {
  /**
   * Texto accesible para lectores de pantalla.
   */
  ariaLabel?: string;

  /**
   * Clases extra para el botón.
   */
  className?: string;

  /**
   * Contenido opcional del botón (ícono o texto).
   * Si no se manda, se renderiza una "X" simple.
   */
  children?: React.ReactNode;
};

/**
 * Botón genérico para cerrar el modal.
 *
 * Propósito:
 * Proveer una forma reusable de cerrar el modal desde cualquier lugar
 * (header, footer o body), usando el contexto interno.
 *
 * @param ariaLabel Etiqueta accesible.
 * @param className Clases extra.
 * @param children Contenido del botón (ícono o texto).
 */
export function ModalClose({
  ariaLabel = "Cerrar",
  className,
  children,
}: ModalCloseProps) {
  const { onOpenChange } = useModalContext();

  return (
    <button
      type="button"
      className={cn(modalStyles.closeButton, className)}
      onClick={() => onOpenChange(false)}
      aria-label={ariaLabel}
    >
      {children ?? (
        <span aria-hidden="true" className="text-lg leading-none">
          ×
        </span>
      )}
    </button>
  );
}