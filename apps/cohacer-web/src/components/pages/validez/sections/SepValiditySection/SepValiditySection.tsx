import * as React from "react";
import type {
  SepValidityContent,
  SepValidityFeature,
} from "@/types/pages/validez/sections/sepValidity.section";
import { sepValiditySectionStyles as s } from "./SepValiditySection.styles";

type Props = {
  id: string;
  content: SepValidityContent;
};

/**
 * Renderiza una tarjeta individual de respaldo oficial.
 *
 * Propósito:
 * - Mostrar cada mensaje destacado de la sección
 *   dentro de una tarjeta visual consistente.
 *
 * Parámetros:
 * - feature: Elemento individual de respaldo oficial.
 *
 * Regresa:
 * - Nodo React con la tarjeta renderizada.
 */
function renderFeatureCard(feature: SepValidityFeature) {
  return (
    <div key={feature.label} className={s.featureCard}>
      <span className={s.featureIcon} aria-hidden="true">
        ✓
      </span>

      <p className={s.featureLabel}>{feature.label}</p>
    </div>
  );
}

/**
 * SepValiditySection
 *
 * Propósito:
 * - Renderizar la sección "Validez Oficial SEP" de la página de Validez.
 * - Mostrar un encabezado central con badge, título y descripción.
 * - Mostrar mensajes de respaldo oficial en tarjetas inferiores.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function SepValiditySection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <div className={s.badge} aria-label={content.badge}>
            {content.badge}
          </div>

          <h1 className={s.title}>{content.title}</h1>

          {content.description ? (
            <p className={s.description}>{content.description}</p>
          ) : null}
        </header>

        {content.features.length > 0 ? (
          <div className={s.features}>
            {content.features.map((feature) => renderFeatureCard(feature))}
          </div>
        ) : null}
      </div>
    </section>
  );
}