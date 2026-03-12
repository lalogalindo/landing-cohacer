// src/types/pages/inversion/inversion.sections.ts

import type { InversionIntroContent } from "@/types/pages/inversion/sections/inversionIntro.section";
import type { InversionComparisonContent } from "@/types/pages/inversion/sections/inversionComparison.section";

/**
 * InversionIntroSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección inicial
 *   de Inversión con su discriminante e identificador.
 */
export type InversionIntroSection = {
  type: "inversionIntro";
  id: string;
  content: InversionIntroContent;
};

/**
 * InversionComparisonSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de comparación de costos con su discriminante.
 */
export type InversionComparisonSection = {
  type: "inversionComparison";
  id: string;
  content: InversionComparisonContent;
};

/**
 * InversionSection
 *
 * Propósito:
 * - Representar la unión discriminada de secciones
 *   de la página Inversión.
 *
 * Información adicional:
 * - Permite renderizado predecible con `switch(section.type)`.
 */
export type InversionSection = 
  | InversionIntroSection
  | InversionComparisonSection;