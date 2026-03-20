import rawBeneficiosIntro from "./beneficiosIntro.json";
import type { BeneficiosIntroContent } from "@/types/pages/beneficios/sections/beneficiosIntro.section";

import rawBeneficiosResultados from "./beneficiosResultados.json";
import type { BeneficiosResultadosContent } from "@/types/pages/beneficios/sections/beneficiosResultados.section";

import rawBeneficiosTransformacion from "./beneficiosTransformacion.json";
import type { BeneficiosTransformacionContent } from "@/types/pages/beneficios/sections/beneficiosTransformacion.section";

/**
 * beneficiosIntroContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección inicial
 *   de la página Beneficios.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const beneficiosIntroContent: BeneficiosIntroContent = rawBeneficiosIntro;

/**
 * beneficiosResultadosContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de resultados de la página Beneficios.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const beneficiosResultadosContent: BeneficiosResultadosContent =
  rawBeneficiosResultados;

/**
 * beneficiosTransformacionContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   comparativa de transformación profesional.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const beneficiosTransformacionContent: BeneficiosTransformacionContent =
  rawBeneficiosTransformacion;