// src/components/pages/beneficios/sections/BeneficiosCasosDetalleSection/BeneficiosCasosDetalleSection.tsx

import type {
  BeneficiosCasosDetalleContent,
  BeneficiosCasosDetalleItem,
  BeneficiosCasosDetalleMetric,
  BeneficiosCasosDetalleTone,
  BeneficiosCasosDetalleVideo,
} from "@/types/pages/beneficios/sections/beneficiosCasosDetalle.section";
import { beneficiosCasosDetalleSectionStyles as s } from "./BeneficiosCasosDetalleSection.styles";

type Props = {
  id: string;
  content: BeneficiosCasosDetalleContent;
};

/**
 * getVisibleCases
 *
 * Propósito:
 * - Limitar la visualización de casos al máximo
 *   de tarjetas que debe mostrar esta sección.
 *
 * Parámetros:
 * - cases: Lista completa de casos disponibles.
 *
 * Regresa:
 * - Arreglo con únicamente los primeros dos casos.
 */
function getVisibleCases(cases: BeneficiosCasosDetalleContent["cases"]) {
  return cases.slice(0, 2);
}

/**
 * getAccentToneClassName
 *
 * Propósito:
 * - Obtener la clase visual del acento lateral
 *   de la tarjeta según el tono configurado.
 *
 * Parámetros:
 * - tone: Tono visual configurado para el acento.
 *
 * Regresa:
 * - Clase utilitaria correspondiente.
 */
function getAccentToneClassName(tone: BeneficiosCasosDetalleTone) {
  switch (tone) {
    case "blue":
      return s.cardAccentBlue;

    case "purple":
      return s.cardAccentPurple;

    case "green":
    default:
      return s.cardAccentGreen;
  }
}

/**
 * getAvatarToneClassName
 *
 * Propósito:
 * - Obtener la clase visual del avatar circular
 *   según el tono configurado en el contenido.
 *
 * Parámetros:
 * - tone: Tono visual configurado para el avatar.
 *
 * Regresa:
 * - Clase utilitaria correspondiente.
 */
function getAvatarToneClassName(tone: BeneficiosCasosDetalleTone) {
  switch (tone) {
    case "green":
      return s.avatarGreen;

    case "purple":
      return s.avatarPurple;

    case "blue":
    default:
      return s.avatarBlue;
  }
}

/**
 * getMetricCardToneClassName
 *
 * Propósito:
 * - Obtener la clase de fondo de una métrica
 *   financiera según su tono configurado.
 *
 * Parámetros:
 * - tone: Tono visual configurado para la métrica.
 *
 * Regresa:
 * - Clase utilitaria de fondo.
 */
function getMetricCardToneClassName(tone: BeneficiosCasosDetalleTone) {
  switch (tone) {
    case "green":
      return s.metricCardGreen;

    case "purple":
      return s.metricCardPurple;

    case "blue":
    default:
      return s.metricCardBlue;
  }
}

/**
 * getMetricValueToneClassName
 *
 * Propósito:
 * - Obtener la clase visual del valor numérico
 *   de una métrica financiera.
 *
 * Parámetros:
 * - tone: Tono visual configurado para el valor.
 *
 * Regresa:
 * - Clase utilitaria correspondiente al color.
 */
function getMetricValueToneClassName(tone: BeneficiosCasosDetalleTone) {
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
 * renderStoryParagraph
 *
 * Propósito:
 * - Renderizar un párrafo individual de la historia
 *   del caso de éxito.
 *
 * Parámetros:
 * - paragraph: Texto del párrafo.
 * - index: Índice local para key estable.
 *
 * Regresa:
 * - Párrafo renderizado.
 */
function renderStoryParagraph(paragraph: string, index: number) {
  return (
    <p key={`${paragraph}-${index}`} className={s.paragraph}>
      {paragraph}
    </p>
  );
}

/**
 * renderResultItem
 *
 * Propósito:
 * - Renderizar un resultado individual dentro
 *   de la lista de logros del caso.
 *
 * Parámetros:
 * - result: Texto del resultado.
 * - index: Índice local para key estable.
 *
 * Regresa:
 * - Elemento de lista renderizado.
 */
function renderResultItem(result: string, index: number) {
  return (
    <li key={`${result}-${index}`} className={s.resultItem}>
      <span className={s.resultIcon} aria-hidden="true">
        ✓
      </span>
      <span>{result}</span>
    </li>
  );
}

/**
 * renderMetricCard
 *
 * Propósito:
 * - Renderizar una métrica financiera destacada
 *   dentro del panel lateral del caso.
 *
 * Parámetros:
 * - metric: Métrica a renderizar.
 * - index: Índice local para key estable.
 *
 * Regresa:
 * - Tarjeta de métrica renderizada.
 */
function renderMetricCard(metric: BeneficiosCasosDetalleMetric, index: number) {
  const metricCardToneClassName = getMetricCardToneClassName(metric.tone);
  const metricValueToneClassName = getMetricValueToneClassName(metric.tone);

  return (
    <article
      key={`${metric.label}-${index}`}
      className={`${s.metricCard} ${metricCardToneClassName}`}
    >
      <p className={s.metricLabel}>{metric.label}</p>
      <p className={`${s.metricValue} ${metricValueToneClassName}`}>
        {metric.value}
      </p>
    </article>
  );
}

/**
 * renderVideoCard
 *
 * Propósito:
 * - Renderizar el bloque opcional de video
 *   cuando el caso tiene URL configurada.
 *
 * Parámetros:
 * - video: Información del video a mostrar.
 *
 * Regresa:
 * - Bloque visual de video renderizado.
 */
function renderVideoCard(video: BeneficiosCasosDetalleVideo) {
  return (
    <div className={s.videoWrap}>
      <a
        href={video.url}
        target="_blank"
        rel="noreferrer"
        className={s.videoLink}
        aria-label={video.label}
      >
        <img
          src={video.thumbnailSrc}
          alt={video.label}
          className={s.videoImage}
        />
        <span className={s.videoOverlay} aria-hidden="true" />
        <span className={s.videoPlayButton} aria-hidden="true">
          ▶
        </span>
      </a>
      <p className={s.videoLabel}>{video.label}</p>
    </div>
  );
}

/**
 * renderCaseCard
 *
 * Propósito:
 * - Renderizar una tarjeta completa de caso
 *   de éxito detallado.
 *
 * Parámetros:
 * - caseItem: Caso a renderizar.
 * - index: Índice local para key estable.
 *
 * Regresa:
 * - Tarjeta renderizada.
 */
function renderCaseCard(caseItem: BeneficiosCasosDetalleItem, index: number) {
  const accentToneClassName = getAccentToneClassName(caseItem.accentTone);
  const avatarToneClassName = getAvatarToneClassName(caseItem.avatarTone);
  const metrics = [caseItem.growthMetric, caseItem.roiMetric];
  const videoBlock = caseItem.video ? renderVideoCard(caseItem.video) : null;

  return (
    <article key={`${caseItem.name}-${index}`} className={s.card}>
      <span
        aria-hidden="true"
        className={`${s.cardAccent} ${accentToneClassName}`}
      />

      <div className={s.cardGrid}>
        <div className={s.contentColumn}>
          <header className={s.personHeader}>
            <div className={`${s.avatar} ${avatarToneClassName}`}>
              {caseItem.initials}
            </div>

            <div>
              <h3 className={s.personName}>{caseItem.name}</h3>
              <p className={s.personMeta}>
                {caseItem.profession} • {caseItem.age}
              </p>
              <p className={s.personMetaSecondary}>{caseItem.organization}</p>
            </div>
          </header>

          <div className={s.contentBlock}>
            <h4 className={s.blockTitle}>{caseItem.historyTitle}</h4>
            <div className={s.paragraphs}>
              {caseItem.storyParagraphs.map(renderStoryParagraph)}
            </div>
            <blockquote className={s.quote}>{caseItem.quote}</blockquote>
          </div>

          <div className={s.contentBlock}>
            <h4 className={s.blockTitle}>{caseItem.resultsTitle}</h4>
            <ul className={s.resultsList}>
              {caseItem.results.map(renderResultItem)}
            </ul>
          </div>
        </div>

        <aside className={s.sidebar}>
          <div className={s.financePanel}>
            <h4 className={s.financeTitle}>{caseItem.financialTitle}</h4>

            <div className={s.financeStack}>
              <p className={s.financeLabel}>{caseItem.previousLabel}</p>
              <p className={s.financePreviousValue}>{caseItem.previousValue}</p>

              <span className={s.financeArrow} aria-hidden="true">
                ↓
              </span>

              <p className={s.financeLabel}>{caseItem.currentLabel}</p>
              <p className={s.financeCurrentValue}>{caseItem.currentValue}</p>

              {caseItem.currentCaption ? (
                <p className={s.financeCaption}>{caseItem.currentCaption}</p>
              ) : null}
            </div>

            <div className={s.metricsStack}>{metrics.map(renderMetricCard)}</div>

            {videoBlock}
          </div>
        </aside>
      </div>
    </article>
  );
}

/**
 * BeneficiosCasosDetalleSection
 *
 * Propósito:
 * - Renderizar la sección de casos de éxito
 *   detallados para la página de Beneficios.
 * - Mostrar únicamente las primeras dos tarjetas
 *   disponibles en la data.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function BeneficiosCasosDetalleSection({ id, content }: Props) {
  const visibleCases = getVisibleCases(content.cases);

  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
        </header>

        <div className={s.cards}>{visibleCases.map(renderCaseCard)}</div>
      </div>
    </section>
  );
}