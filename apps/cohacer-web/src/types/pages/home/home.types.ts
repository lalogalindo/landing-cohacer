// src/types/pages/home/home.types.ts
import type { PageContentBase } from "@/types/page";
import type { HomeSection } from "./home.sections";

/**
 * HomePageContent
 *
 * Propósito:
 * - Representar el contenido de la página Home.
 */
export type HomePageContent = PageContentBase<HomeSection>;