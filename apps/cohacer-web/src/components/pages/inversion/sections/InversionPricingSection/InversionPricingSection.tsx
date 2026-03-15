import type {
  InversionPricingContent,
  InversionPricingPlan,
} from "@/types/pages/inversion/sections/inversionPricing.section";
import { inversionPricingSectionStyles as s } from "./InversionPricingSection.styles";

type Props = {
  id: string;
  content: InversionPricingContent;
};

/**
 * renderPlanFeature
 *
 * Propósito:
 * - Renderizar una prestación individual dentro
 *   de la lista de beneficios de un plan.
 *
 * Parámetros:
 * - feature: Prestación a renderizar.
 * - index: Índice usado para construir una key estable.
 *
 * Regresa:
 * - Elemento de lista renderizado.
 */
function renderPlanFeature(
  feature: InversionPricingPlan["features"][number],
  index: number
) {
  return (
    <li key={`${feature.text}-${index}`} className={s.featureItem}>
      <span className={s.featureIcon} aria-hidden="true">
        ✓
      </span>
      <span>{feature.text}</span>
    </li>
  );
}

/**
 * getButtonClassName
 *
 * Propósito:
 * - Resolver la clase visual del botón según
 *   el acento del plan para respetar el mockup.
 *
 * Parámetros:
 * - accent: Variante visual del plan.
 *
 * Regresa:
 * - Clase CSS del botón correspondiente.
 */
function getButtonClassName(accent: InversionPricingPlan["accent"]) {
  switch (accent) {
    case "orange":
      return s.buttonOrange;
    case "purple":
      return s.buttonPurple;
    case "blue":
    default:
      return s.buttonBlue;
  }
}

/**
 * renderPlanCard
 *
 * Propósito:
 * - Renderizar la tarjeta visual completa
 *   de un plan de inversión.
 *
 * Parámetros:
 * - plan: Información del plan.
 * - index: Índice usado para construir una key estable.
 *
 * Regresa:
 * - Tarjeta del plan renderizada.
 */
function renderPlanCard(plan: InversionPricingPlan, index: number) {
  const cardToneClassName =
    plan.accent === "orange"
      ? s.cardOrange
      : plan.accent === "purple"
      ? s.cardPurple
      : s.cardBlue;

  const priceToneClassName =
    plan.accent === "orange"
      ? s.priceOrange
      : plan.accent === "purple"
      ? s.pricePurple
      : s.priceBlue;

  const buttonClassName = getButtonClassName(plan.accent);

  return (
    <article
      key={`${plan.name}-${index}`}
      className={`${s.card} ${cardToneClassName} ${
        plan.isPopular ? s.cardPopular : ""
      }`}
    >
      {plan.badge ? <p className={s.badge}>{plan.badge}</p> : null}

      <div className={s.cardBody}>
        <header className={s.cardHeader}>
          <h3 className={s.planName}>{plan.name}</h3>
          <p className={`${s.price} ${priceToneClassName}`}>{plan.price}</p>
          <p className={s.paymentNote}>{plan.paymentNote}</p>
        </header>

        <ul className={s.featureList}>
          {plan.features.map((feature, featureIndex) =>
            renderPlanFeature(feature, featureIndex)
          )}
        </ul>

        <div className={s.actions}>
          {plan.ctaHref ? (
            <a href={plan.ctaHref} className={`${s.buttonBase} ${buttonClassName}`}>
              {plan.ctaLabel}
            </a>
          ) : (
            <button type="button" className={`${s.buttonBase} ${buttonClassName}`}>
              {plan.ctaLabel}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * InversionPricingSection
 *
 * Propósito:
 * - Renderizar la sección de planes de inversión
 *   con tarjetas comparativas y CTA por plan.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function InversionPricingSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          {content.subtitle ? (
            <p className={s.subtitle}>{content.subtitle}</p>
          ) : null}
        </header>

        <div className={s.grid}>
          {content.plans.map((plan, index) => renderPlanCard(plan, index))}
        </div>
      </div>
    </section>
  );
}