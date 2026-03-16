// src/content/data/inversionPage/index.ts

import rawInversionIntro from "./inversionIntro.json";
import type { InversionIntroContent } from "@/types/pages/inversion/sections/inversionIntro.section";

import rawInversionComparison from "./inversionComparison.json";
import type { InversionComparisonContent } from "@/types/pages/inversion/sections/inversionComparison.section";

import rawInversionROI from "./inversionROI.json";
import type {
  InversionROIContent,
  InversionROIResultCard,
} from "@/types/pages/inversion/sections/inversionROI.section";

import rawInversionPricing from "./inversionPricing.json";
import type { InversionPricingContent } from "@/types/pages/inversion/sections/inversionPricing.section";

import rawInversionFinancing from "./inversionFinancing.json";
import type { InversionFinancingContent } from "@/types/pages/inversion/sections/inversionFinancing.section";

/**
 * inversionIntroContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección inicial
 *   de la página Inversión.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const inversionIntroContent: InversionIntroContent = rawInversionIntro;

/**
 * inversionComparisonContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de comparación real de costos.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const inversionComparisonContent: InversionComparisonContent = rawInversionComparison;

/**
 * inversionROIResultCards
 *
 * Propósito:
 * - Declarar las tarjetas de resultado con tipado estricto
 *   y usar iconos de Font Awesome.
 */
const inversionROIResultCards: InversionROIResultCard[] = [
  {
    metric: "newSalaryMonthly",
    label: "Nuevo Salario Mensual",
    icon: "fa-solid fa-briefcase",
    tone: "info",
  },
  {
    metric: "recoveryMonths",
    label: "Recuperación de Inversión",
    icon: "fa-solid fa-clock",
    tone: "success",
  },
  {
    metric: "roiOneYear",
    label: "ROI a 1 año",
    icon: "fa-solid fa-chart-line",
    tone: "purple",
  },
  {
    metric: "roiFiveYears",
    label: "ROI a 5 años",
    icon: "fa-solid fa-rocket",
    tone: "warning",
  },
];


/**
 * inversionPricingContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de planes de inversión.
 *
 * Información adicional:
 * - Este archivo funciona como wrapper tipado
 *   del JSON puro.
 */
export const inversionPricingContent: InversionPricingContent = rawInversionPricing;

/**
 * inversionROIContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de calculadora ROI.
 */
export const inversionROIContent: InversionROIContent = {
  ...rawInversionROI,
  resultCards: inversionROIResultCards,
};

/**
 * inversionFinancingContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de opciones de financiamiento.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const inversionFinancingContent: InversionFinancingContent = rawInversionFinancing;