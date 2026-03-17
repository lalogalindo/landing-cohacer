// src/components/pages/inversion/sections/InversionCTASection/InversionCTASection.tsx

import { Button } from "@cohacer/ui";
import type { InversionCTAContent } from "@/types/pages/inversion/sections/inversionCTA.section";
import { inversionCTASectionStyles as s } from "./InversionCTASection.styles";

type Props = {
  id: string;
  content: InversionCTAContent;
};

/**
 * renderActionButtons
 *
 * Propósito:
 * - Renderizar el grupo de botones principales
 *   de la sección CTA.
 *
 * Parámetros:
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Nodo visual con ambas acciones.
 *
 * Información adicional:
 * - Se usan clases con override para mantener
 *   el look exacto del mockup aunque Button
 *   tenga variantes base del design system.
 */
function renderActionButtons(content: InversionCTAContent) {
  return (
    <div className={s.actions}>
      <Button
        href={content.primaryAction.href}
        variant="primary"
        className={s.primaryButton}
      >
        {content.primaryAction.label}
      </Button>

      <Button
        href={content.secondaryAction.href}
        variant="outline"
        className={s.secondaryButton}
      >
        {content.secondaryAction.label}
      </Button>
    </div>
  );
}

/**
 * InversionCTASection
 *
 * Propósito:
 * - Renderizar la sección CTA de conversión
 *   de la página Inversión.
 * - Mostrar un bloque centrado con título,
 *   descripción y dos acciones principales.
 *
 * Parámetros:
 * - id: Ancla única de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function InversionCTASection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <h2 className={s.title}>{content.title}</h2>
        <p className={s.description}>{content.description}</p>
        {renderActionButtons(content)}
      </div>
    </section>
  );
}