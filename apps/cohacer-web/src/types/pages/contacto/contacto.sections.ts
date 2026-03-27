// src/types/pages/contacto/contacto.sections.ts

import type { ContactoIntroContent } from "@/types/pages/contacto/sections/contactoIntro.section";

/**
 * ContactoIntroSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   inicial de Contacto con su discriminante e id.
 */
export type ContactoIntroSection = {
  type: "contactoIntro";
  id: string;
  content: ContactoIntroContent;
};

/**
 * ContactoSection
 *
 * Propósito:
 * - Representar la unión discriminada de secciones
 *   de la página de Contacto.
 *
 * Información adicional:
 * - Permite renderizado predecible con `switch(section.type)`.
 */
export type ContactoSection = ContactoIntroSection;