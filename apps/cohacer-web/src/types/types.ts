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