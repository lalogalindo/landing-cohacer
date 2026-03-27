// src/content/data/contactoPage/index.ts

import rawContactoIntro from "./contactoIntro.json";
import type { ContactoIntroContent } from "@/types/pages/contacto/sections/contactoIntro.section";

/**
 * contactoIntroContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   inicial de la página Contacto.
 */
export const contactoIntroContent: ContactoIntroContent = rawContactoIntro;