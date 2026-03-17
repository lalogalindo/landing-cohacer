/**
 * InversionGarantiaCardTone
 *
 * Propósito:
 * - Restringir las variantes visuales disponibles
 *   para las tarjetas superiores de garantías.
 */
export type InversionGarantiaCardTone = string;

/**
 * InversionGarantiaCard
 *
 * Propósito:
 * - Representar una garantía individual dentro
 *   del grid principal de la sección.
 */
export type InversionGarantiaCard = {
  icon: string;
  title: string;
  description: string;
  highlight: string;
  tone: InversionGarantiaCardTone;
};

/**
 * InversionGarantiaResultGuarantee
 *
 * Propósito:
 * - Representar el bloque inferior destacado
 *   de garantía de resultados.
 */
export type InversionGarantiaResultGuarantee = {
  icon: string;
  title: string;
  description: string;
};

/**
 * InversionGarantiaContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   de garantías de inversión.
 */
export type InversionGarantiaContent = {
  title: string;
  cards: InversionGarantiaCard[];
  resultGuarantee: InversionGarantiaResultGuarantee;
};