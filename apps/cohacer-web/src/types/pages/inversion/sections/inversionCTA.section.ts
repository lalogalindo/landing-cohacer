// src/types/pages/inversion/sections/inversionCTA.section.ts

/**
 * InversionCTAAction
 *
 * Propósito:
 * - Representar la configuración de un botón
 *   dentro de la sección CTA de Inversión.
 */
export type InversionCTAAction = {
  label: string;
  href?: string;
};

/**
 * InversionCTAContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   CTA intermedia de la página Inversión.
 */
export type InversionCTAContent = {
  title: string;
  description: string;
  primaryAction: InversionCTAAction;
  secondaryAction: InversionCTAAction;
};