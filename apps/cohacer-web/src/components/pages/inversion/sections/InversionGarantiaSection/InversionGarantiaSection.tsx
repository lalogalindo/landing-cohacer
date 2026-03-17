import type {
  InversionGarantiaCard,
  InversionGarantiaCardTone,
  InversionGarantiaContent,
  InversionGarantiaResultGuarantee,
} from "@/types/pages/inversion/sections/inversionGarantia.section";
import { inversionGarantiaSectionStyles as s } from "./InversionGarantiaSection.styles";

type Props = {
  id: string;
  content: InversionGarantiaContent;
};

type ToneStyles = {
  cardClassName: string;
  iconClassName: string;
  highlightClassName: string;
};

/**
 * getToneStyles
 *
 * Propósito:
 * - Resolver las clases visuales correspondientes
 *   según el tono configurado en la tarjeta.
 *
 * Parámetros:
 * - tone: Variante visual de la tarjeta.
 *
 * Regresa:
 * - Objeto con clases para tarjeta, ícono y texto destacado.
 */
function getToneStyles(tone: InversionGarantiaCardTone): ToneStyles {
  switch (tone) {
    case "green":
      return {
        cardClassName: s.cardGreen,
        iconClassName: s.iconGreen,
        highlightClassName: s.highlightGreen,
      };

    case "blue":
      return {
        cardClassName: s.cardBlue,
        iconClassName: s.iconBlue,
        highlightClassName: s.highlightBlue,
      };
    default:
      return {
        cardClassName: "",
        iconClassName: "",
        highlightClassName: ""
      };
  }
}

/**
 * renderGuaranteeCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual de garantía
 *   dentro del grid principal.
 *
 * Parámetros:
 * - card: Contenido tipado de la tarjeta.
 *
 * Regresa:
 * - Tarjeta renderizada.
 */
function renderGuaranteeCard(card: InversionGarantiaCard) {
  const toneStyles = getToneStyles(card.tone);

  return (
    <article
      key={card.title}
      className={`${s.cardBase} ${toneStyles.cardClassName}`}
    >
      <div className={`${s.iconBase} ${toneStyles.iconClassName}`}>
        <span aria-hidden="true">{card.icon}</span>
      </div>

      <h3 className={s.cardTitle}>{card.title}</h3>
      <p className={s.cardDescription}>{card.description}</p>
      <p className={`${s.highlightBase} ${toneStyles.highlightClassName}`}>
        {card.highlight}
      </p>
    </article>
  );
}

/**
 * renderResultGuarantee
 *
 * Propósito:
 * - Renderizar el bloque horizontal destacado
 *   de garantía de resultados.
 *
 * Parámetros:
 * - resultGuarantee: Contenido del bloque inferior.
 *
 * Regresa:
 * - Bloque destacado renderizado.
 */
function renderResultGuarantee(
  resultGuarantee: InversionGarantiaResultGuarantee
) {
  return (
    <article className={s.resultCard}>
      <h3 className={s.resultTitle}>
        <span aria-hidden="true">{resultGuarantee.icon}</span>
        <span>{resultGuarantee.title}</span>
      </h3>

      <p className={s.resultDescription}>{resultGuarantee.description}</p>
    </article>
  );
}

/**
 * InversionGarantiaSection
 *
 * Propósito:
 * - Renderizar la sección de garantías que protegen
 *   la inversión del usuario.
 * - Mostrar dos tarjetas superiores y un bloque
 *   inferior de garantía de resultados.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function InversionGarantiaSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
        </header>

        <div className={s.grid}>{content.cards.map(renderGuaranteeCard)}</div>

        {renderResultGuarantee(content.resultGuarantee)}
      </div>
    </section>
  );
}