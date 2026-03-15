// src/components/pages/inversion/sections/InversionIntroSection/InversionIntroSection.tsx

import type { InversionIntroContent } from "@/types/pages/inversion/sections/inversionIntro.section";
import { inversionIntroSectionStyles as s } from "./InversionIntroSection.styles";

type Props = {
  id: string;
  content: InversionIntroContent;
};

/**
 * renderHighlightCard
 *
 * Propósito:
 * - Renderizar la tarjeta destacada con el ahorro estimado
 *   de la sección inicial de Inversión.
 *
 * Parámetros:
 * - highlight: Contenido destacado de ahorro.
 *
 * Regresa:
 * - Nodo visual de la tarjeta destacada.
 */
function renderHighlightCard(
  highlight: InversionIntroContent["highlight"]
) {
  return (
    <div className={s.highlightCard}>
      <p className={s.highlightAmount}>
        <span className={s.highlightBadge} aria-hidden="true">
          {highlight.badge}
        </span>
        <span>{highlight.amount}</span>
      </p>

      <p className={s.highlightCaption}>{highlight.caption}</p>
    </div>
  );
}

/**
 * InversionIntroSection
 *
 * Propósito:
 * - Renderizar la sección principal de introducción
 *   de la página de Inversión.
 * - Mostrar un bloque visual con fondo azul, título,
 *   descripción y una tarjeta destacada de ahorro.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function InversionIntroSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h1 className={s.title}>{content.title}</h1>
          <p className={s.description}>{content.description}</p>
        </header>

        {renderHighlightCard(content.highlight)}
      </div>
    </section>
  );
}