// src/types/pages/contacto/sections/contactoIntro.section.ts

/**
 * ContactoIntroStatIcon
 *
 * Propósito:
 * - Restringir los identificadores de íconos disponibles
 *   para las métricas de la sección inicial de Contacto.
 */
export type ContactoIntroStatIcon = string;

/**
 * ContactoIntroStat
 *
 * Propósito:
 * - Representar una métrica destacada dentro
 *   de la sección inicial de Contacto.
 */
export type ContactoIntroStat = {
  icon: ContactoIntroStatIcon;
  value: string;
  label: string;
};

/**
 * ContactoIntroContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   inicial de la página de Contacto.
 */
export type ContactoIntroContent = {
  title: string;
  description: string;
  stats: ContactoIntroStat[];
};