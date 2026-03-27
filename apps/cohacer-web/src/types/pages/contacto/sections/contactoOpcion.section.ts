// src/types/pages/contacto/sections/contactoOpcion.section.ts

/**
 * ContactoOpcionIcon
 *
 * Propósito:
 * - Restringir los identificadores de íconos
 *   disponibles para las tarjetas de contacto.
 */
export type ContactoOpcionIcon = string;

/**
 * ContactoOpcionItem
 *
 * Propósito:
 * - Representar una opción individual de contacto
 *   dentro de la sección.
 */
export type ContactoOpcionItem = {
  icon: ContactoOpcionIcon;
  title: string;
  description: string;
  contact: string;
  availability: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
};

/**
 * ContactoOpcionContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   de opciones de contacto.
 */
export type ContactoOpcionContent = {
  title: string;
  subtitle: string;
  options: ContactoOpcionItem[];
};