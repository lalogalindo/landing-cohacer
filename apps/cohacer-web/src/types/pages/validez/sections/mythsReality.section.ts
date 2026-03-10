/**
 * Resaltado inferior dentro de la tarjeta de realidad.
 *
 * Propósito:
 * - Mostrar una referencia breve verificable,
 *   legal o institucional.
 */
export type MythsRealityHighlight = {
  label: string;
  text: string;
};

/**
 * Contenido del bloque de mito.
 *
 * Propósito:
 * - Representar una creencia incorrecta
 *   dentro de la comparativa.
 */
export type MythsRealityMyth = {
  prefix: string;
  title: string;
  description?: string;
};

/**
 * Contenido del bloque de realidad.
 *
 * Propósito:
 * - Representar la aclaración oficial
 *   frente a un mito común.
 */
export type MythsRealityReality = {
  prefix: string;
  title: string;
  description?: string;
  highlight?: MythsRealityHighlight;
};

/**
 * Item comparativo de la sección.
 *
 * Propósito:
 * - Agrupar un mito y su realidad correspondiente
 *   en una misma fila visual.
 */
export type MythsRealityItem = {
  myth: MythsRealityMyth;
  reality: MythsRealityReality;
};

/**
 * Contenido de la sección MythsReality.
 *
 * Propósito:
 * - Definir el contenido tipado para la sección
 *   de mitos y realidades de la página de Validez.
 */
export type MythsRealityContent = {
  title: string;
  subtitle?: string;
  items: MythsRealityItem[];
};