// src/types/pages/inversion/inversion.sections.ts

import type { InversionIntroContent } from "@/types/pages/inversion/sections/inversionIntro.section";
import type { InversionComparisonContent } from "@/types/pages/inversion/sections/inversionComparison.section";
import type { InversionROIContent } from "@/types/pages/inversion/sections/inversionROI.section";
import type { InversionPricingContent } from "@/types/pages/inversion/sections/inversionPricing.section";
import type { InversionFinancingContent } from "@/types/pages/inversion/sections/inversionFinancing.section";
import type { InversionCaseStudyContent } from "@/types/pages/inversion/sections/inversionCaseStudy.section";
import type { InversionGarantiaContent } from "@/types/pages/inversion/sections/inversionGarantia.section";
import type { InversionCTAContent } from "@/types/pages/inversion/sections/inversionCTA.section";

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
 * InversionROISection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de calculadora ROI.
 */
export type InversionROISection = {
  type: "inversionROI";
  id: string;
  content: InversionROIContent;
};

/**
 * Sección de planes de inversión.
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de precios usando un discriminante estable.
 */
export type InversionPricingSection = {
  type: "inversionPricing";
  id: string;
  content: InversionPricingContent;
};

/**
 * InversionFinancingSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de opciones de financiamiento.
 */
export type InversionFinancingSection = {
  type: "inversionFinancing";
  id: string;
  content: InversionFinancingContent;
};

/**
 * InversionCaseStudySection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de casos de estudio.
 */
export type InversionCaseStudySection = {
  type: "inversionCaseStudy";
  id: string;
  content: InversionCaseStudyContent;
};

/**
 * InversionGarantiaSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de garantías de inversión.
 */
export type InversionGarantiaSection = {
  type: "inversionGarantia";
  id: string;
  content: InversionGarantiaContent;
};

/**
 * InversionCTASection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   CTA de conversión de la página Inversión.
 */
export type InversionCTASection = {
  type: "inversionCTA";
  id: string;
  content: InversionCTAContent;
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
  | InversionComparisonSection
  | InversionROISection
  | InversionPricingSection
  | InversionFinancingSection
  | InversionCaseStudySection
  | InversionGarantiaSection
  | InversionCTASection;