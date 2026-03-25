// src/types/pages/programas/sections/programasCTA.section.ts

/**
 * ProgramasCTAAction
 *
 * Propósito:
 * - Representar una acción principal o secundaria
 *   dentro del bloque CTA de la página Programas.
 */
export type ProgramasCTAAction = {
  label: string;
  href: string;
  external?: boolean;
};

/**
 * ProgramasCTAContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   CTA final de la página Programas.
 */
export type ProgramasCTAContent = {
  title: string;
  description: string;
  primaryAction: ProgramasCTAAction;
  secondaryAction: ProgramasCTAAction;
  guaranteeTitle: string;
  guaranteeDescription: string;
  highlights: string[];
};