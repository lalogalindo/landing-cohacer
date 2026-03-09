// src/types/section.ts

/**
 * Section
 *
 * Propósito:
 * - Estandarizar el wrapper de secciones: `type`, `id`, `content`.
 * - Eliminar boilerplate en cada sección.
 *
 * Parámetros genéricos:
 * - TType: Discriminante literal de la sección (ej. "eligibility").
 * - TContent: Shape del contenido (alineado al JSON).
 */
export type Section<TType extends string, TContent> = {
  type: TType;
  id: string;
  content: TContent;
};