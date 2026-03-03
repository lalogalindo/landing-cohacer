import type { ProgramsContent } from "@/types/programs";
import type { CompaniesContent } from "@/types/companies";

import rawPrograms from "@/content/data/programs.json";
import rawCompanies from "@/content/data/companies.json";

/**
 * Contenidos tipados del sitio.
 *
 * Propósito:
 * - Centralizar el acceso a JSONs tipados (programas, empresas, etc.).
 * - Evitar usar `as` dentro de los ensambladores del sitio (`cohacer-web.ts`).
 */
export const programsContent: ProgramsContent = rawPrograms;
export const companiesContent: CompaniesContent = rawCompanies;