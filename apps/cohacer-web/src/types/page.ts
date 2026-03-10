/**
 * PageMeta
 *
 * Propósito:
 * - Representar metadatos básicos de una página.
 */
export type PageMeta = {
  title: string;
  description: string;
};

/**
 * PageContentBase
 *
 * Propósito:
 * - Servir como base para el contenido de páginas del sitio.
 *
 * Parámetros:
 * - TSection: Unión discriminada de secciones.
 */
export type PageContentBase<TSection> = {
  siteKey: string;
  layoutKey: string;
  meta: PageMeta;
  sections: TSection[];
};