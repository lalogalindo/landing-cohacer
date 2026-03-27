// src/content/data/contactoPage/index.ts

import rawContactoIntro from "./contactoIntro.json";
import type { ContactoIntroContent } from "@/types/pages/contacto/sections/contactoIntro.section";

import rawContactoOpcion from "./contactoOpcion.json";
import type { ContactoOpcionContent } from "@/types/pages/contacto/sections/contactoOpcion.section";

import rawContactoForm from "./contactoForm.json";
import type { ContactoFormContent } from "@/types/pages/contacto/sections/contactoForm.section";

import rawContactoPlaces from "./contactoPlaces.json";
import type { ContactoPlacesContent } from "@/types/pages/contacto/sections/contactoPlaces.section";

import rawContactoHours from "./contactoHours.json";
import type { ContactoHoursContent } from "@/types/pages/contacto/sections/contactoHours.section";

import rawContactoFAQ from "./contactoFAQ.json";
import type { ContactoFAQContent } from "@/types/pages/contacto/sections/contactoFAQ.section";

/**
 * contactoIntroContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   inicial de la página Contacto.
 */
export const contactoIntroContent: ContactoIntroContent = rawContactoIntro;

/**
 * contactoOpcionContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de opciones de contacto de la página Contacto.
 */
export const contactoOpcionContent: ContactoOpcionContent = rawContactoOpcion;

/**
 * contactoFormContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de formulario de la página Contacto.
 */
export const contactoFormContent: ContactoFormContent = rawContactoForm;

/**
 * contactoPlacesContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de oficinas de la página Contacto.
 */
export const contactoPlacesContent: ContactoPlacesContent = rawContactoPlaces;

/**
 * contactoHoursContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de horarios de la página Contacto.
 */
export const contactoHoursContent: ContactoHoursContent = rawContactoHours;

/**
 * contactoFAQContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   FAQ de la página Contacto.
 */
export const contactoFAQContent: ContactoFAQContent = rawContactoFAQ;