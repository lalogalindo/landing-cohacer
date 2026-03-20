// src/types/pages/beneficios/sections/beneficiosResultados.section.ts

/**
 * BeneficiosResultadosHighlightTone
 *
 * Propósito:
 * - Restringir el valor de tono visual usado
 *   por el bloque destacado de cada tarjeta.
 *
 * Información adicional:
 * - Se deja como `string` para mantener compatibilidad
 *   con JSON puro sin casts ni `satisfies`.
 */
export type BeneficiosResultadosHighlightTone = string;

/**
 * BeneficiosResultadosIconName
 *
 * Propósito:
 * - Representar la clave visual del ícono
 *   que se renderiza en cada tarjeta.
 *
 * Información adicional:
 * - Se deja abierto como `string` para no acoplar
 *   el JSON a una unión literal.
 */
export type BeneficiosResultadosIconName = string;

/**
 * BeneficiosResultadosHighlight
 *
 * Propósito:
 * - Representar el bloque destacado inferior
 *   de cada tarjeta de resultado.
 */
export type BeneficiosResultadosHighlight = {
  title: string;
  description: string;
  tone: BeneficiosResultadosHighlightTone;
};

/**
 * BeneficiosResultadosCard
 *
 * Propósito:
 * - Representar una tarjeta individual
 *   dentro de la grilla de resultados.
 */
export type BeneficiosResultadosCard = {
  icon: BeneficiosResultadosIconName;
  title: string;
  description: string;
  highlight: BeneficiosResultadosHighlight;
};

/**
 * BeneficiosResultadosContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   de resultados de la página Beneficios.
 */
export type BeneficiosResultadosContent = {
  title: string;
  description: string;
  cards: BeneficiosResultadosCard[];
};