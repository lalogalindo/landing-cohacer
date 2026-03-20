// src/types/pages/beneficios/sections/beneficiosTransformacion.section.ts

/**
 * BeneficiosTransformacionBlock
 *
 * Propósito:
 * - Representar uno de los bloques comparativos
 *   de la transformación profesional.
 *
 * Información adicional:
 * - Se usa tanto para el estado "antes"
 *   como para el estado "después".
 */
export type BeneficiosTransformacionBlock = {
  emoji: string;
  title: string;
  items: string[];
};

/**
 * BeneficiosTransformacionContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   comparativa de transformación profesional.
 */
export type BeneficiosTransformacionContent = {
  title: string;
  transformationLabel: string;
  before: BeneficiosTransformacionBlock;
  after: BeneficiosTransformacionBlock;
};