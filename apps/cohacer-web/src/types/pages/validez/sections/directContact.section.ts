/**
 * Acción individual del CTA.
 *
 * Propósito:
 * - Representar un botón o enlace de salida
 *   dentro de la sección de contacto directo.
 */
export type DirectContactAction = {
  label: string;
  href: string;
};

/**
 * Contenido de la sección de contacto directo.
 *
 * Propósito:
 * - Definir el contenido visible del bloque CTA
 *   final de la página de Validez.
 */
export type DirectContactContent = {
  title: string;
  description?: string;
  primaryAction: DirectContactAction;
  secondaryAction?: DirectContactAction;
};