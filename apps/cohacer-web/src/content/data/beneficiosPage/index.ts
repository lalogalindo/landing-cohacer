// src/content/data/beneficiosPage/index.ts

import rawBeneficiosIntro from "./beneficiosIntro.json";
import type { BeneficiosIntroContent } from "@/types/pages/beneficios/sections/beneficiosIntro.section";

import rawBeneficiosResultados from "./beneficiosResultados.json";
import type { BeneficiosResultadosContent } from "@/types/pages/beneficios/sections/beneficiosResultados.section";

import rawBeneficiosTransformacion from "./beneficiosTransformacion.json";
import type { BeneficiosTransformacionContent } from "@/types/pages/beneficios/sections/beneficiosTransformacion.section";

import rawBeneficiosTestimonios from "./beneficiosTestimonios.json";
import type { BeneficiosTestimoniosContent } from "@/types/pages/beneficios/sections/beneficiosTestimonios.section";

import rawBeneficiosCasosDetalle from "./beneficiosCasosDetalle.json";
import type { BeneficiosCasosDetalleContent } from "@/types/pages/beneficios/sections/beneficiosCasosDetalle.section";

import rawBeneficiosImpacto from "./beneficiosImpacto.json";
import type { BeneficiosImpactoContent } from "@/types/pages/beneficios/sections/beneficiosImpacto.section";

import rawBeneficiosHistoriaExito from "./beneficiosHistoriaExito.json";
import type { BeneficiosHistoriaExitoContent } from "@/types/pages/beneficios/sections/beneficiosHistoriaExito.section";

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

/**
 * beneficiosTestimoniosContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de testimonios de la página Beneficios.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const beneficiosTestimoniosContent: BeneficiosTestimoniosContent =
  rawBeneficiosTestimonios;

/**
 * beneficiosCasosDetalleContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de casos de éxito detallados.
 */
export const beneficiosCasosDetalleContent: BeneficiosCasosDetalleContent =
  rawBeneficiosCasosDetalle;


/**
 * beneficiosImpactoContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de impacto de la página Beneficios.
 */
export const beneficiosImpactoContent: BeneficiosImpactoContent =
  rawBeneficiosImpacto;

  
/**
 * beneficiosHistoriaExitoContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de historia de éxito de la página Beneficios.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const beneficiosHistoriaExitoContent: BeneficiosHistoriaExitoContent =
  rawBeneficiosHistoriaExito;