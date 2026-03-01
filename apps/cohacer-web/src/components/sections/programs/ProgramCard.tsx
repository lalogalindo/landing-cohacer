import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@cohacer/ui";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@cohacer/ui";
import type { Program } from "@/types/programs";

type AccordionKey = "requisitos" | "acuerdos" | "costos";
type ListaKey = "requisitos" | "costos";

type Props = {
  program: Program;
  isOpen?: boolean;
  onToggle?: () => void;

  /**
   * Define si se debe mostrar el botón en el footer.
   *
   * - true: muestra botón y el acordeón inicia oculto
   * - false: oculta botón y el acordeón se muestra desde el inicio
   */
  showFooterButton?: boolean;
};

/**
 * Card de Programa.
 *
 * Propósito:
 * - Mostrar resumen del programa.
 * - Mostrar detalles en acordeón (requisitos/acuerdos/costos).
 *
 * Información adicional:
 * - “Ver certificado” abrirá un modal tipo lightbox (pendiente).
 * - El acordeón se arma sin duplicación con helpers internos.
 */
export function ProgramCard({
  program,
  isOpen = false,
  onToggle,
  showFooterButton = true,
}: Props) {
  const shouldShowAccordion = showFooterButton ? isOpen : true;

  /**
   * Acción temporal para el certificado.
   */
  function handleVerCertificado() {
    alert("Abrir modal con el certificado");
  }

  /**
   * Determina si la clave corresponde a un campo tipo lista (string[]).
   *
   * @param key Clave del acordeón
   * @returns true si es lista
   */
  function isListaKey(key: AccordionKey): key is ListaKey {
    return ["requisitos", "costos"].includes(key);
  }

  /**
   * Renderiza una lista con formato consistente.
   *
   * @param items Lista de strings
   * @param keyPrefix Prefijo para keys estables
   * @returns JSX de lista
   */
  function renderLista(items: string[], keyPrefix: string) {
    return (
      <ul className="list-disc space-y-1 pl-5">
        {items.map((item, idx) => (
          <li key={`${program.id}-${keyPrefix}-${idx}`}>{item}</li>
        ))}
      </ul>
    );
  }

  /**
   * Obtiene el contenido del acordeón según la clave.
   *
   * @param key Clave del item del acordeón
   * @returns JSX del contenido
   */
  function getDetallesContent(key: AccordionKey) {
    if (isListaKey(key)) {
      const dataString = program.details[key] ?? [];
      return renderLista(dataString, key);
    }

    const acuerdos = program.details.acuerdos;

    return (
      <div className="flex flex-col justify-between gap-3">
        <div className="text-sm">
          <div className="font-medium">{acuerdos.label}</div>
          {acuerdos.description ? (
            <div className="text-muted-foreground">{acuerdos.description}</div>
          ) : null}
        </div>

        <div className="flex gap-3 w-full">
          {acuerdos.certificate?.src ? (
            <img
              src={acuerdos.certificate.src}
              alt={acuerdos.certificate.alt ?? "Certificado"}
              className="h-14 w-24 rounded-md border border-border object-cover"
            />
          ) : null}

          <Button variant="outline" onClick={handleVerCertificado} className="w-full">
            Ver certificado
          </Button>
        </div>
      </div>
    );
  }

  /**
   * Factoriza la estructura repetida de un item del acordeón.
   *
   * @param value Valor único del item
   * @param label Etiqueta del trigger
   * @param children Contenido del accordion
   * @returns JSX del item completo
   */
  function renderAccordionItem(value: AccordionKey, label: string, children: React.ReactNode) {
    return (
      <AccordionItem key={`${program.id}-acc-${value}`} value={value}>
        <AccordionTrigger rightIcon={<span aria-hidden>⌄</span>}>{label}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    );
  }

  /**
   * Define el orden y etiquetas del acordeón.
   *
   * @returns Lista de definición de items
   */
  function getAccordionSpec() {
    return [
      { key: "requisitos" as const, label: "Requisitos" },
      { key: "acuerdos" as const, label: "Acuerdos" },
      { key: "costos" as const, label: "Costos" },
    ];
  }

  return (
    <Card className={program.highlighted ? "border-2 border-[oklch(var(--primary))]" : ""}>
      <CardHeader>
        <CardTitle>{program.title}</CardTitle>
        <CardDescription>{program.price}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {renderLista(program.bullets, "bullet")}

        {shouldShowAccordion ? (
          <Accordion type="single" collapsible defaultValue="requisitos">
            {getAccordionSpec().map(({ key, label }) =>
              renderAccordionItem(key, label, getDetallesContent(key))
            )}
          </Accordion>
        ) : null}
      </CardContent>

      {showFooterButton ? (
        <CardFooter>
          <Button fullWidth onClick={onToggle} variant={isOpen ? "secondary" : "primary"}>
            {isOpen ? "Ocultar detalles" : "Ver detalles"}
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
}