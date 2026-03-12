// src/content/data/inversionPage/index.ts

import rawInversionIntro from "./inversionIntro.json";
import type { InversionIntroContent } from "@/types/pages/inversion/sections/inversionIntro.section";

import rawInversionComparison from "./inversionComparison.json";
import type { InversionComparisonContent } from "@/types/pages/inversion/sections/inversionComparison.section";

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