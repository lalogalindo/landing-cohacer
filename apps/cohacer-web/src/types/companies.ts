/**
 * Modelo de una empresa para el marquee de logos.
 *
 * Propósito:
 * - Representar un logo y (opcionalmente) un enlace externo.
 */
export type Company = {
  name: string;
  src: string;
  url?: string;
};

/**
 * Contenido puro de la sección de empresas.
 *
 * Propósito:
 * - Modelar únicamente los datos que consume `CompaniesMarquee`.
 * - No incluye `type` porque eso vive en el wrapper de sección (`LandingSection`).
 */
export type CompaniesContent = {
  sectionTitle: string;
  sectionSubtitle?: string;

  companies: Company[];

  /**
   * Máximo de empresas por fila para el marquee.
   *
   * Información adicional:
   * - Si no se define, `CompaniesMarquee` usa 6.
   */
  maxPerRow?: number;

  /**
   * Máximo de logos visibles en el viewport.
   *
   * Información adicional:
   * - Si no se define, `CompaniesMarquee` usa 4.
   */
  visibleCount?: number;
};