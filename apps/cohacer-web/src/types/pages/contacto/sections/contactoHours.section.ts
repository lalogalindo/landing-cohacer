// src/types/pages/contacto/sections/contactoHours.section.ts

/**
 * ContactoHoursValueTone
 *
 * Propósito:
 * - Restringir los tonos visuales permitidos
 *   para el valor de cada horario.
 */
export type ContactoHoursValueTone = string;

/**
 * ContactoHoursItem
 *
 * Propósito:
 * - Representar una fila individual dentro
 *   de una tarjeta de horarios.
 */
export type ContactoHoursItem = {
  label: string;
  value: string;
  tone?: ContactoHoursValueTone;
};

/**
 * ContactoHoursCard
 *
 * Propósito:
 * - Representar una tarjeta de atención
 *   con sus horarios y mensaje inferior.
 */
export type ContactoHoursCard = {
  title: string;
  items: ContactoHoursItem[];
  noteLabel: string;
  noteText: string;
};

/**
 * ContactoHoursContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   de horarios de atención de la página Contacto.
 */
export type ContactoHoursContent = {
  title: string;
  cards: ContactoHoursCard[];
};