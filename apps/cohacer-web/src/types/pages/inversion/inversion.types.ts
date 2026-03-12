// src/types/pages/inversion/inversion.types.ts

import type { PageContentBase } from "@/types/page";
import type { InversionSection } from "./inversion.sections";

/**
 * InversionPageContent
 *
 * Propósito:
 * - Representar el contenido de la página Inversión.
 */
export type InversionPageContent = PageContentBase<InversionSection>;