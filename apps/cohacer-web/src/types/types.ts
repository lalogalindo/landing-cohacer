// src/types/types.ts

/**
 * types.ts
 *
 * Propósito:
 * - Ser un “fachada” estable para imports (`@/types/types`),
 *   sin convertirse en un archivo insostenible.
 *
 * Información adicional:
 * - Opción 1: Tipado estricto por página (Home).
 * - Cuando exista otra página, se crea su propio `PageContentBase<...>`
 *   y su propia unión en `src/types/pages/<pageKey>/...`.
 */

export type { SiteKey, LayoutKey } from "@/types/site";

export type { HomePageContent as LandingPageContent } from "@/types/pages/home/home.types";
export type { HomeSection as LandingSection } from "@/types/pages/home/home.sections";


export type { BeneficiosPageContent } from "@/types/pages/beneficios/beneficios.types";
export type { BeneficiosSection } from "@/types/pages/beneficios/beneficios.sections";

export type { InversionPageContent } from "@/types/pages/inversion/inversion.types";
export type { InversionSection } from "@/types/pages/inversion/inversion.sections";

export type { ProgramasPageContent } from "@/types/pages/programas/programas.types";
export type { ProgramasSection } from "@/types/pages/programas/programas.sections";

export type { ContactoPageContent } from "@/types/pages/contacto/contacto.types";
export type { ContactoSection } from "@/types/pages/contacto/contacto.sections";