/**
 * InversionPricingPlanFeature
 *
 * Propósito:
 * - Representar una prestación o beneficio
 *   individual dentro de un plan de inversión.
 */
export type InversionPricingPlanFeature = {
  text: string;
};

/**
 * InversionPricingPlanAccent
 *
 * Propósito:
 * - Restringir las variantes visuales disponibles
 *   para cada tarjeta de plan.
 */
export type InversionPricingPlanAccent = string;

/**
 * InversionPricingPlan
 *
 * Propósito:
 * - Representar la información completa de un plan
 *   dentro de la sección de precios.
 */
export type InversionPricingPlan = {
  name: string;
  price: string;
  paymentNote: string;
  features: InversionPricingPlanFeature[];
  ctaLabel: string;
  ctaHref?: string;
  accent: InversionPricingPlanAccent;
  badge?: string;
  isPopular?: boolean;
};

/**
 * InversionPricingContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   de planes de inversión.
 */
export type InversionPricingContent = {
  title: string;
  subtitle?: string;
  plans: InversionPricingPlan[];
};