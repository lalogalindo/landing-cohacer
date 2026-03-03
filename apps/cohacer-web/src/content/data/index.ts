import type { ProgramsContent } from "@/types/programs";
import type { CompaniesContent } from "@/types/companies";
import type { TestimonialsContent } from "@/types/testimonials";
import type { TeamContent } from "@/types/team";

import rawPrograms from "@/content/data/programs.json";
import rawCompanies from "@/content/data/companies.json";
import rawTestimonials from "@/content/data/testimonials.json";
import rawTeam from "@/content/data/team.json";

/**
 * Contenidos tipados del sitio.
 *
 * Propósito:
 * - Centralizar el acceso a JSONs tipados (programas, empresas, etc.).
 * - Evitar usar `as` dentro de los ensambladores del sitio (`cohacer-web.ts`).
 */
export const programsContent: ProgramsContent = rawPrograms;
export const companiesContent: CompaniesContent = rawCompanies;
export const testimonialsContent: TestimonialsContent = rawTestimonials;
export const teamContent: TeamContent = rawTeam;