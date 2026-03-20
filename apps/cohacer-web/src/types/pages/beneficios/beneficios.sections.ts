// src/types/pages/beneficios/beneficios.sections.ts

import type { BeneficiosIntroContent } from "@/types/pages/beneficios/sections/beneficiosIntro.section";
import type { BeneficiosResultadosContent } from "@/types/pages/beneficios/sections/beneficiosResultados.section";
import type { BeneficiosTransformacionContent } from "@/types/pages/beneficios/sections/beneficiosTransformacion.section";

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
  | BeneficiosTransformacionSection;