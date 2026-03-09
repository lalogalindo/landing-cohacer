// src/types/pages/home/home.types.ts
import type { PageContentBase } from "@/types/site";
import type { HomeSection } from "@/types/pages/home/home.sections";

/**
 * HomePageContent
 *
 * Propósito:
 * - Tipo estricto del contenido de la página Home.
 */
export type HomePageContent = PageContentBase<HomeSection>;