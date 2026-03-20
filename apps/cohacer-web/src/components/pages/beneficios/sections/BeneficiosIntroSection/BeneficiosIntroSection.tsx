// src/components/pages/beneficios/sections/BeneficiosIntroSection/BeneficiosIntroSection.tsx

import type {
  BeneficiosIntroContent,
  BeneficiosIntroMetricTone,
} from "@/types/pages/beneficios/sections/beneficiosIntro.section";
import { beneficiosIntroSectionStyles as s } from "./BeneficiosIntroSection.styles";

type Props = {
  id: string;
  content: BeneficiosIntroContent;
};

/**
 * getMetricToneClassName
 *
 * Propósito:
 * - Obtener la clase visual correspondiente
 *   al tono configurado para una métrica.
 *
 * Parámetros:
 * - tone: Tono visual configurado en el contenido.
 *
 * Regresa:
 * - Clase utilitaria asociada al color del valor.
 */
function getMetricToneClassName(tone: BeneficiosIntroMetricTone) {
  switch (tone) {
    case "green":
      return s.metricValueGreen;

    case "purple":
      return s.metricValuePurple;

    case "blue":
    default:
      return s.metricValueBlue;
  }
}

/**
 * renderMetricCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual de métrica
 *   dentro de la sección principal de beneficios.
 *
 * Parámetros:
 * - metric: Métrica a mostrar.
 * - index: Índice usado como apoyo para key local.
 *
 * Regresa:
 * - Tarjeta visual renderizada.
 */
function renderMetricCard(
  metric: BeneficiosIntroContent["metrics"][number],
  index: number
) {
  const toneClassName = getMetricToneClassName(metric.tone);

  return (
    <article key={`${metric.value}-${index}`} className={s.metricCard}>
      <p className={`${s.metricValue} ${toneClassName}`}>{metric.value}</p>
      <p className={s.metricLabel}>{metric.label}</p>
    </article>
  );
}

/**
 * BeneficiosIntroSection
 *
 * Propósito:
 * - Renderizar la sección principal de introducción
 *   de la página Beneficios.
 * - Mostrar un bloque visual con fondo degradado,
 *   título, descripción y métricas destacadas.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function BeneficiosIntroSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h1 className={s.title}>{content.title}</h1>
          <p className={s.description}>{content.description}</p>
        </header>

        <div className={s.metricsGrid}>
          {content.metrics.map((metric, index) => renderMetricCard(metric, index))}
        </div>
      </div>
    </section>
  );
}