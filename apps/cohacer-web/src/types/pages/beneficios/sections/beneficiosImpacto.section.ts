// src/types/pages/beneficios/sections/beneficiosImpacto.section.ts

/**
 * BeneficiosImpactoOutcomeTone
 *
 * Propósito:
 * - Restringir los tonos visuales disponibles
 *   para los indicadores secundarios de impacto.
 */
export type BeneficiosImpactoOutcomeTone = string;

/**
 * BeneficiosImpactoCard
 *
 * Propósito:
 * - Representar una tarjeta principal de métricas
 *   dentro de la sección de impacto.
 */
export type BeneficiosImpactoCard = {
  value: string;
  label: string;
  description?: string;
  note?: string;
};

/**
 * BeneficiosImpactoOutcome
 *
 * Propósito:
 * - Representar un indicador secundario
 *   mostrado en la franja inferior.
 */
export type BeneficiosImpactoOutcome = {
  value: string;
  label: string;
  tone: BeneficiosImpactoOutcomeTone;
};

/**
 * BeneficiosImpactoContent
 *
 * Propósito:
 * - Representar el contenido tipado de la
 *   sección de impacto de la página Beneficios.
 */
export type BeneficiosImpactoContent = {
  title: string;
  subtitle: string;
  cards: BeneficiosImpactoCard[];
  outcomes: BeneficiosImpactoOutcome[];
};