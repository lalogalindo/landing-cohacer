// src/types/pages/beneficios/sections/beneficiosIntro.section.ts

/**
 * BeneficiosIntroMetricTone
 *
 * Propósito:
 * - Restringir los tonos visuales disponibles
 *   para cada métrica destacada de la sección.
 */
export type BeneficiosIntroMetricTone = string;

/**
 * BeneficiosIntroMetric
 *
 * Propósito:
 * - Representar una métrica individual
 *   dentro del bloque principal de beneficios.
 */
export type BeneficiosIntroMetric = {
  value: string;
  label: string;
  tone: BeneficiosIntroMetricTone;
};

/**
 * BeneficiosIntroContent
 *
 * Propósito:
 * - Representar el contenido tipado de la
 *   sección inicial de la página Beneficios.
 */
export type BeneficiosIntroContent = {
  title: string;
  description: string;
  metrics: BeneficiosIntroMetric[];
};