// src/content/sites/contactoPage.ts

import type { ContactoPageContent } from "@/types/pages/contacto/contacto.types";
import { contactoIntroContent } from "@/content/data/contactoPage";

/**
 * contactoPageContent
 *
 * Propósito:
 * - Definir el contenido de la página Contacto.
 */
export const contactoPageContent: ContactoPageContent = {
  siteKey: "cohacer-web",
  layoutKey: "stacked",

  meta: {
    title: "Contacto | Cohacer",
    description:
      "Habla con nuestro equipo de asesores educativos y recibe atención personalizada para titularte por experiencia laboral.",
  },

  sections: [
    {
      type: "contactoIntro",
      id: "contacto-intro",
      content: contactoIntroContent,
    },
  ],
};