// src/types/pages/beneficios/beneficios.types.ts

import type { PageContentBase } from "@/types/page";
import type { BeneficiosSection } from "./beneficios.sections";

/**
 * BeneficiosPageContent
 *
 * Propósito:
 * - Representar el contenido de la página Beneficios.
 */
export type BeneficiosPageContent = PageContentBase<BeneficiosSection>;