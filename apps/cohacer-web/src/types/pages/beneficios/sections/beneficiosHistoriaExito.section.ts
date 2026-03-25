// src/types/pages/beneficios/sections/beneficiosHistoriaExito.section.ts

/**
 * BeneficiosHistoriaExitoAction
 *
 * Propósito:
 * - Representar una acción principal o secundaria
 *   dentro de la sección de historia exito.
 */
export type BeneficiosHistoriaExitoAction = {
  label: string;
  href: string;
};

/**
 * BeneficiosHistoriaExitoContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   de cierre orientada a conversión en Beneficios.
 */
export type BeneficiosHistoriaExitoContent = {
  title: string;
  description: string;
  cardTitle: string;
  cardDescription: string;
  primaryAction: BeneficiosHistoriaExitoAction;
  secondaryAction: BeneficiosHistoriaExitoAction;
  guaranteeTitle: string;
  guaranteeDescription: string;
  trustPoints: string[];
};