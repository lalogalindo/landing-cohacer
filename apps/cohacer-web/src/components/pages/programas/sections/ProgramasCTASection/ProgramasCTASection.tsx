// src/components/pages/programas/sections/ProgramasCTASection/ProgramasCTASection.tsx

import { Button, ArrowRightIcon, WhatsappIcon, CheckIcon } from "@cohacer/ui";
import type { ProgramasCTAContent } from "@/types/pages/programas/sections/programasCTA.section";
import { programasCTASectionStyles as s } from "./ProgramasCTASection.styles";

type Props = {
  id: string;
  content: ProgramasCTAContent;
};

/**
 * renderHighlightItem
 *
 * Propósito:
 * - Renderizar un beneficio corto con ícono
 *   dentro del bloque inferior del CTA.
 *
 * Parámetros:
 * - highlight: Texto del beneficio a mostrar.
 * - index: Índice auxiliar para key local.
 *
 * Regresa:
 * - Elemento visual del highlight renderizado.
 */
function renderHighlightItem(highlight: string, index: number) {
  return (
    <li key={`${highlight}-${index}`} className={s.highlightItem}>
      <CheckIcon className={s.highlightIcon} />
      <span>{highlight}</span>
    </li>
  );
}

/**
 * ProgramasCTASection
 *
 * Propósito:
 * - Renderizar la sección final de llamado a la acción
 *   de la página Programas.
 * - Mostrar un título centrado, dos botones principales,
 *   un mensaje de garantía y una lista de beneficios.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function ProgramasCTASection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          <p className={s.description}>{content.description}</p>
        </header>

        <div className={s.actions}>
          <Button
            href={content.primaryAction.href}
            size="lg"
            variant="ghost"
            className={s.primaryButton}
            rightIcon={<ArrowRightIcon className={s.buttonIcon} />}
          >
            {content.primaryAction.label}
          </Button>

          <Button
            href={content.secondaryAction.href}
            size="lg"
            variant="ghost"
            className={s.secondaryButton}
            leftIcon={<WhatsappIcon className={s.buttonIcon} />}
          >
            {content.secondaryAction.label}
          </Button>
        </div>

        <p className={s.guarantee}>
          <span className={s.guaranteeTitle}>{content.guaranteeTitle}</span>{" "}
          {content.guaranteeDescription}
        </p>

        <ul className={s.highlights}>
          {content.highlights.map((highlight, index) =>
            renderHighlightItem(highlight, index)
          )}
        </ul>
      </div>
    </section>
  );
}