import * as React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "@cohacer/ui";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title: string;
  description?: string;

  imageSrc: string;
  imageAlt: string;

  /**
   * Anchor opcional para la acción principal.
   * Ejemplo: "#contacto"
   */
  primaryHref?: string;

  /**
   * Label opcional del botón principal.
   */
  primaryLabel?: string;
};

/**
 * Lightbox genérico para imágenes dentro de una Modal.
 *
 * Propósito:
 * - Reutilizar la misma experiencia de “imagen en grande”
 *   para certificados u otras imágenes.
 * - Centralizar: header + footer + cierre + layout.
 *
 * @param open Estado del lightbox.
 * @param onOpenChange Callback para abrir/cerrar.
 * @param title Título del modal.
 * @param description Descripción opcional.
 * @param imageSrc URL de la imagen.
 * @param imageAlt Texto alternativo.
 * @param primaryHref Anchor opcional para CTA principal.
 * @param primaryLabel Texto opcional para CTA principal.
 */
export function CertificateLightbox({
  open,
  onOpenChange,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryHref = "#contacto",
  primaryLabel = "Continuar",
}: Props) {
  const titleId = React.useId();
  const descId = React.useId();

  /**
   * Cierra el lightbox de forma explícita.
   *
   * Propósito:
   * - Proveer un handler claro para botones.
   */
  function close() {
    onOpenChange(false);
  }

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      size="lg"
      ariaLabelledBy={titleId}
      ariaDescribedBy={description ? descId : undefined}
    >
      <ModalHeader
        title={title}
        description={description}
        titleId={titleId}
        descriptionId={descId}
        showCloseButton
      />

      <ModalBody className="space-y-3">
        <div className="overflow-hidden rounded-xl border border-border">
          <img src={imageSrc} alt={imageAlt} className="h-auto w-full object-cover" />
        </div>

        <p className="text-xs text-muted-foreground">
          Nota: La imagen es ilustrativa y puede variar según la ruta y el proceso.
        </p>
      </ModalBody>

      <ModalFooter>
        <Button variant="outline" onClick={close}>
          Cancelar
        </Button>

        <Button href={primaryHref} onClick={close}>
          {primaryLabel}
        </Button>
      </ModalFooter>
    </Modal>
  );
}