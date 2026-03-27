// src/types/pages/contacto/sections/contactoFAQ.section.ts

/**
 * ContactoFAQItem
 *
 * Propósito:
 * - Representar una pregunta frecuente individual
 *   dentro de la sección de FAQ de la página Contacto.
 */
export type ContactoFAQItem = {
  question: string;
  answer: string;
};

/**
 * ContactoFAQContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   de preguntas frecuentes de la página Contacto.
 */
export type ContactoFAQContent = {
  title: string;
  description: string;
  items: ContactoFAQItem[];
};