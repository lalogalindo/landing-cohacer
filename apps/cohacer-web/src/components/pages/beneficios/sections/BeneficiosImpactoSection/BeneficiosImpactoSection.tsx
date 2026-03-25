// src/components/pages/beneficios/sections/BeneficiosImpactoSection/BeneficiosImpactoSection.tsx

import type {
  BeneficiosImpactoContent,
  BeneficiosImpactoOutcomeTone,
} from "@/types/pages/beneficios/sections/beneficiosImpacto.section";
import { beneficiosImpactoSectionStyles as s } from "./BeneficiosImpactoSection.styles";

type Props = {
  id: string;
  content: BeneficiosImpactoContent;
};

/**
 * getOutcomeToneClassName
 *
 * Propósito:
 * - Obtener la clase visual correspondiente
 *   al tono configurado para cada indicador inferior.
 *
 * Parámetros:
 * - tone: Tono visual configurado en el contenido.
 *
 * Regresa:
 * - Clase utilitaria asociada al color del valor.
 */
function getOutcomeToneClassName(tone: BeneficiosImpactoOutcomeTone) {
  switch (tone) {
    case "green":
      return s.outcomeValueGreen;

    case "purple":
      return s.outcomeValuePurple;

    case "blue":
    default:
      return s.outcomeValueBlue;
  }
}

/**
 * renderImpactCard
 *
 * Propósito:
 * - Renderizar una tarjeta principal de impacto
 *   dentro del grid superior de métricas.
 *
 * Parámetros:
 * - card: Tarjeta a renderizar.
 * - index: Índice local para apoyo del key.
 *
 * Regresa:
 * - Tarjeta visual renderizada.
 */
function renderImpactCard(
  card: BeneficiosImpactoContent["cards"][number],
  index: number
) {
  return (
    <article key={`${card.value}-${index}`} className={s.card}>
      <p className={s.cardValue}>{card.value}</p>
      <p className={s.cardLabel}>{card.label}</p>

      {card.description ? (
        <p className={s.cardDescription}>{card.description}</p>
      ) : null}

      {card.note ? <p className={s.cardNote}>{card.note}</p> : null}
    </article>
  );
}

/**
 * renderOutcomeItem
 *
 * Propósito:
 * - Renderizar un indicador secundario
 *   dentro de la franja inferior.
 *
 * Parámetros:
 * - outcome: Indicador a renderizar.
 * - index: Índice local para apoyo del key.
 *
 * Regresa:
 * - Indicador visual renderizado.
 */
function renderOutcomeItem(
  outcome: BeneficiosImpactoContent["outcomes"][number],
  index: number
) {
  const toneClassName = getOutcomeToneClassName(outcome.tone);

  return (
    <article key={`${outcome.value}-${index}`} className={s.outcomeItem}>
      <p className={`${s.outcomeValue} ${toneClassName}`}>{outcome.value}</p>
      <p className={s.outcomeLabel}>{outcome.label}</p>
    </article>
  );
}

/**
 * BeneficiosImpactoSection
 *
 * Propósito:
 * - Renderizar la sección de impacto real
 *   de la página Beneficios.
 * - Mostrar un bloque con fondo degradado,
 *   encabezado central, tarjetas de métricas
 *   e indicadores secundarios.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function BeneficiosImpactoSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div aria-hidden="true" className={s.glowLeft} />
      <div aria-hidden="true" className={s.glowRight} />

      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          <p className={s.subtitle}>{content.subtitle}</p>
        </header>

        <div className={s.cardsGrid}>
          {content.cards.map((card, index) => renderImpactCard(card, index))}
        </div>

        <div className={s.outcomesGrid}>
          {content.outcomes.map((outcome, index) =>
            renderOutcomeItem(outcome, index)
          )}
        </div>
      </div>
    </section>
  );
}