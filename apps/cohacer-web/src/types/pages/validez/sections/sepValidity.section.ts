/**
 * SepValidityFeature
 *
 * Propósito:
 * - Representar un punto destacado dentro de la sección
 *   "Validez Oficial SEP".
 */
export type SepValidityFeature = {
  label: string;
};

/**
 * SepValidityContent
 *
 * Propósito:
 * - Representar el contenido puro de la sección
 *   "Validez Oficial SEP".
 */
export type SepValidityContent = {
  badge: string;
  title: string;
  description: string;
  features: SepValidityFeature[];
};