// src/types/pages/beneficios/beneficios.sections.ts

import type { BeneficiosIntroContent } from "@/types/pages/beneficios/sections/beneficiosIntro.section";
import type { BeneficiosResultadosContent } from "@/types/pages/beneficios/sections/beneficiosResultados.section";
import type { BeneficiosTransformacionContent } from "@/types/pages/beneficios/sections/beneficiosTransformacion.section";
import type { BeneficiosTestimoniosContent } from "@/types/pages/beneficios/sections/beneficiosTestimonios.section";
import type { BeneficiosCasosDetalleContent } from "@/types/pages/beneficios/sections/beneficiosCasosDetalle.section";
import type { BeneficiosImpactoContent } from "@/types/pages/beneficios/sections/beneficiosImpacto.section";
import type { BeneficiosHistoriaExitoContent } from "@/types/pages/beneficios/sections/beneficiosHistoriaExito.section";

/**
 * BeneficiosIntroSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección inicial
 *   de Beneficios con su discriminante e identificador.
 */
export type BeneficiosIntroSection = {
  type: "beneficiosIntro";
  id: string;
  content: BeneficiosIntroContent;
};

/**
 * BeneficiosResultadosSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de resultados de Beneficios.
 */
export type BeneficiosResultadosSection = {
  type: "beneficiosResultados";
  id: string;
  content: BeneficiosResultadosContent;
};


/**
 * BeneficiosTransformacionSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   comparativa de transformación profesional.
 */
export type BeneficiosTransformacionSection = {
  type: "beneficiosTransformacion";
  id: string;
  content: BeneficiosTransformacionContent;
};

/**
 * BeneficiosTestimoniosSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de testimonios con su discriminante e identificador.
 */
export type BeneficiosTestimoniosSection = {
  type: "beneficiosTestimonios";
  id: string;
  content: BeneficiosTestimoniosContent;
};

/**
 * BeneficiosCasosDetalleSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de casos detallados con su discriminante e identificador.
 */
export type BeneficiosCasosDetalleSection = {
  type: "beneficiosCasosDetalle";
  id: string;
  content: BeneficiosCasosDetalleContent;
};

/**
 * BeneficiosImpactoSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de impacto con su discriminante e identificador.
 */
export type BeneficiosImpactoSection = {
  type: "beneficiosImpacto";
  id: string;
  content: BeneficiosImpactoContent;
};

/**
 * BeneficiosHistoriaExitoSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de historia de éxito de Beneficios.
 */
export type BeneficiosHistoriaExitoSection = {
  type: "beneficiosHistoriaExito";
  id: string;
  content: BeneficiosHistoriaExitoContent;
};


/**
 * BeneficiosSection
 *
 * Propósito:
 * - Representar la unión discriminada de secciones
 *   de la página Beneficios.
 *
 * Información adicional:
 * - Permite renderizado predecible con `switch(section.type)`.
 */
export type BeneficiosSection =
  | BeneficiosIntroSection
  | BeneficiosResultadosSection
  | BeneficiosTransformacionSection
  | BeneficiosTestimoniosSection
  | BeneficiosCasosDetalleSection
  | BeneficiosImpactoSection
  | BeneficiosHistoriaExitoSection;