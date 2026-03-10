import * as React from "react";
import type {
  MythsRealityContent,
  MythsRealityItem,
} from "@/types/pages/validez/sections/mythsReality.section";
import { mythsRealitySectionStyles as s } from "./MythsRealitySection.styles";

type Props = {
  id: string;
  content: MythsRealityContent;
};

/**
 * renderComparisonCard
 *
 * Propósito:
 * - Renderizar una fila comparativa entre un mito y su realidad.
 * - Mostrar ambas tarjetas lado a lado en desktop
 *   y apiladas en mobile.
 *
 * Parámetros:
 * - item: Elemento comparativo con mito y realidad.
 *
 * Regresa:
 * - Nodo React con la fila renderizada.
 */
function renderComparisonCard(item: MythsRealityItem) {
  return (
    <article key={item.myth.title} className={s.row}>
      <div className={s.mythCard}>
        <div className={s.cardHeader}>
          <span className={s.mythIcon} aria-hidden="true">
            ✕
          </span>

          <h3 className={s.mythTitle}>
            {item.myth.prefix} {item.myth.title}
          </h3>
        </div>

        {item.myth.description ? (
          <p className={s.mythDescription}>{item.myth.description}</p>
        ) : null}
      </div>

      <div className={s.realityCard}>
        <div className={s.cardHeader}>
          <span className={s.realityIcon} aria-hidden="true">
            ☑
          </span>

          <h3 className={s.realityTitle}>
            {item.reality.prefix} {item.reality.title}
          </h3>
        </div>

        {item.reality.description ? (
          <p className={s.realityDescription}>{item.reality.description}</p>
        ) : null}

        {item.reality.highlight ? (
          <div className={s.realityHighlight}>
            <strong>{item.reality.highlight.label}</strong> {item.reality.highlight.text}
          </div>
        ) : null}
      </div>
    </article>
  );
}

/**
 * MythsRealitySection
 *
 * Propósito:
 * - Renderizar la sección de mitos y realidades
 *   de la página de Validez.
 * - Mostrar encabezado central con título y subtítulo.
 * - Mostrar una lista de comparativas entre creencias comunes
 *   y la información oficial correspondiente.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function MythsRealitySection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>

          {content.subtitle ? <p className={s.subtitle}>{content.subtitle}</p> : null}
        </header>

        {content.items.length > 0 ? (
          <div className={s.list}>{content.items.map((item) => renderComparisonCard(item))}</div>
        ) : null}
      </div>
    </section>
  );
}