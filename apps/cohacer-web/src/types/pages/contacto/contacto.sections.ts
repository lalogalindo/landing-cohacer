// src/types/pages/contacto/contacto.sections.ts

import type { ContactoIntroContent } from "@/types/pages/contacto/sections/contactoIntro.section";
import type { ContactoOpcionContent } from "@/types/pages/contacto/sections/contactoOpcion.section";
import type { ContactoFormContent } from "@/types/pages/contacto/sections/contactoForm.section";
import type { ContactoPlacesContent } from "@/types/pages/contacto/sections/contactoPlaces.section";
import type { ContactoHoursContent } from "@/types/pages/contacto/sections/contactoHours.section";
import type { ContactoFAQContent } from "@/types/pages/contacto/sections/contactoFAQ.section";

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
 * ContactoOpcionSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de opciones de contacto con su discriminante e id.
 */
export type ContactoOpcionSection = {
  type: "contactoOpcion";
  id: string;
  content: ContactoOpcionContent;
};

/**
 * ContactoFormSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de formulario de Contacto con su discriminante e id.
 */
export type ContactoFormSection = {
  type: "contactoForm";
  id: string;
  content: ContactoFormContent;
};

/**
 * ContactoPlacesSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de oficinas de Contacto con su discriminante e id.
 */
export type ContactoPlacesSection = {
  type: "contactoPlaces";
  id: string;
  content: ContactoPlacesContent;
};

/**
 * ContactoHoursSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de horarios de Contacto con su discriminante e id.
 */
export type ContactoHoursSection = {
  type: "contactoHours";
  id: string;
  content: ContactoHoursContent;
};

/**
 * ContactoFAQSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   FAQ de Contacto con su discriminante e id.
 */
export type ContactoFAQSection = {
  type: "contactoFAQ";
  id: string;
  content: ContactoFAQContent;
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
export type ContactoSection = 
  | ContactoIntroSection
  | ContactoOpcionSection
  | ContactoFormSection
  | ContactoPlacesSection
  | ContactoHoursSection
  | ContactoFAQSection;