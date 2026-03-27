// src/types/pages/contacto/contacto.types.ts

import type { PageContentBase } from "@/types/page";
import type { ContactoSection } from "./contacto.sections";

/**
 * ContactoPageContent
 *
 * Propósito:
 * - Representar el contenido completo de la página Contacto.
 */
export type ContactoPageContent = PageContentBase<ContactoSection>;