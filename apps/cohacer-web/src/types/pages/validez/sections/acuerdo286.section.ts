/**
 * Item individual dentro de un bloque lateral.
 *
 * Propósito:
 * - Representar un punto listado dentro de una categoría
 *   como documentación, marco jurídico o resultado final.
 */
export type Acuerdo286ListItem = {
  text: string;
};

/**
 * Bloque lateral de información.
 *
 * Propósito:
 * - Representar una tarjeta informativa con título,
 *   ícono decorativo y lista de elementos.
 */
export type Acuerdo286InfoBlock = {
  title: string;
  icon: string;
  tone?: string;
  items: Acuerdo286ListItem[];
};

/**
 * Punto clave del documento oficial.
 *
 * Propósito:
 * - Resumir aspectos importantes del acuerdo oficial
 *   en formato numerado.
 */
export type Acuerdo286Highlight = {
  number: string;
  title: string;
  description: string;
};

/**
 * Contenido de la sección Acuerdo 286.
 *
 * Propósito:
 * - Definir la estructura visual e informativa
 *   de la segunda sección de la página de validez.
 */
export type Acuerdo286Content = {
  title: string;
  documentLabel: string;
  documentTitle: string;
  documentDescription: string;
  documentFootnote?: string;
  highlights: Acuerdo286Highlight[];
  sidebarTitle: string;
  infoBlocks: Acuerdo286InfoBlock[];
};