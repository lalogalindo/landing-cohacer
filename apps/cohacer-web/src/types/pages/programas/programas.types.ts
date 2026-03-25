// src/types/pages/programas/programas.types.ts

import type { PageContentBase } from "@/types/page";
import type { ProgramasSection } from "./programas.sections";

/**
 * ProgramasPageContent
 *
 * Propósito:
 * - Representar el contenido de la página Programas.
 */
export type ProgramasPageContent = PageContentBase<ProgramasSection>;