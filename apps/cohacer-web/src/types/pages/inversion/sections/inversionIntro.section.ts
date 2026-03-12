// src/types/pages/inversion/sections/inversionIntro.section.ts

/**
 * InversionIntroHighlightContent
 *
 * Propósito:
 * - Definir el contenido del bloque destacado
 *   dentro de la sección inicial de Inversión.
 */
export type InversionIntroHighlightContent = {
  badge: string;
  amount: string;
  caption: string;
};

/**
 * InversionIntroContent
 *
 * Propósito:
 * - Definir el contenido de la sección inicial
 *   de la página de Inversión.
 */
export type InversionIntroContent = {
  title: string;
  description: string;
  highlight: InversionIntroHighlightContent;
};