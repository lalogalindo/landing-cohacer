// src/content/sites/contactoPage.ts

import type { ContactoPageContent } from "@/types/pages/contacto/contacto.types";
import { 
  contactoIntroContent,
  contactoOpcionContent,
  contactoFormContent,
  contactoPlacesContent,
  contactoHoursContent,
  contactoFAQContent,
} from "@/content/data/contactoPage";

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
    {
      type: "contactoOpcion",
      id: "contacto-opcion",
      content: contactoOpcionContent,
    },
    {
      type: "contactoForm",
      id: "contacto-form",
      content: contactoFormContent,
    },
    {
      type: "contactoPlaces",
      id: "contacto-places",
      content: contactoPlacesContent,
    },
    {
      type: "contactoHours",
      id: "horarios-atencion",
      content: contactoHoursContent
    },
    {
      type: "contactoFAQ",
      id: "preguntas-frecuentes",
      content: contactoFAQContent
    }
  ],
};