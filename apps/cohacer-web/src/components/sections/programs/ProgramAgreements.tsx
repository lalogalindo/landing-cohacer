import * as React from "react";
import { Button } from "@cohacer/ui";
import type { ProgramAgreements } from "@/types/programs";
import { CertificateLightbox } from "./CertificateLightbox";

type Props = {
  programId: string;
  acuerdos: ProgramAgreements;

  /**
   * Anchor de destino para el CTA principal del lightbox.
   */
  primaryHref?: string;
};

/**
 * Bloque “Acuerdos” dentro del acordeón.
 *
 * Propósito:
 * - Renderizar label/description.
 * - Renderizar miniatura y botón “Ver certificado”.
 * - Abrir un lightbox si existe certificate.src.
 *
 * @param programId ID del programa (para keys estables y contexto).
 * @param acuerdos Datos de acuerdos del programa.
 * @param primaryHref Anchor opcional para CTA principal del lightbox.
 */
export function ProgramAgreements({ programId, acuerdos, primaryHref = "#contacto" }: Props) {
  const [open, setOpen] = React.useState(false);
  const certificateSrc = acuerdos.certificate?.src;
  const certificateAlt = acuerdos.certificate?.alt ?? "Certificado";

  /**
   * Abre el lightbox del certificado.
   *
   * Propósito:
   * - Mostrar el certificado en grande cuando existe una imagen disponible.
   */
  function openLightbox() {
    if (!certificateSrc) return;
    setOpen(true);
  }

  return (
    <div className="flex flex-col justify-between gap-3">
      <div className="text-sm">
        <div className="font-medium">{acuerdos.label}</div>
        {acuerdos.description ? (
          <div className="text-muted-foreground">{acuerdos.description}</div>
        ) : null}
      </div>

      <div className="flex w-full gap-3">
        {certificateSrc ? (
          <button
            type="button"
            onClick={openLightbox}
            className="shrink-0"
            aria-label="Abrir certificado"
          >
            <img
              src={certificateSrc}
              alt={certificateAlt}
              className="h-14 w-24 rounded-md border border-border object-cover"
            />
          </button>
        ) : null}

        <Button
          variant="outline"
          onClick={openLightbox}
          className="w-full"
          disabled={!certificateSrc}
        >
          Ver certificado
        </Button>
      </div>

      {certificateSrc ? (
        <CertificateLightbox
          open={open}
          onOpenChange={setOpen}
          title={acuerdos.label}
          description={acuerdos.description}
          imageSrc={certificateSrc}
          imageAlt={certificateAlt}
          primaryHref={primaryHref}
          primaryLabel="Continuar"
        />
      ) : null}
    </div>
  );
}