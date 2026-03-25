// src/types/pages/programas/programas.sections.ts

import type { ProgramasIntroContent } from "@/types/pages/programas/sections/programasIntro.section";
import type { ProgramasSearchContent } from "@/types/pages/programas/sections/programasSearch.section";
import type { ProgramasProcesoContent } from "@/types/pages/programas/sections/programasProceso.section";
import type { ProgramasCalculadoraContent } from "@/types/pages/programas/sections/programasCalculadora.section";
import type { ProgramasCTAContent } from "@/types/pages/programas/sections/programasCTA.section";

/**
 * ProgramasIntroSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección inicial
 *   de Programas con su discriminante e identificador.
 */
export type ProgramasIntroSection = {
  type: "programasIntro";
  id: string;
  content: ProgramasIntroContent;
};

/**
 * ProgramasSearchSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de búsqueda y resultados de Programas.
 */
export type ProgramasSearchSection = {
  type: "programasSearch";
  id: string;
  content: ProgramasSearchContent;
};

/**
 * ProgramasProcesoSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de proceso con su discriminante e identificador.
 */
export type ProgramasProcesoSection = {
  type: "programasProceso";
  id: string;
  content: ProgramasProcesoContent;
};

/**
 * ProgramasCalculadoraSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   de calculadora de inversión.
 */
export type ProgramasCalculadoraSection = {
  type: "programasCalculadora";
  id: string;
  content: ProgramasCalculadoraContent;
};

/**
 * ProgramasCTASection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   CTA de programas con su discriminante
 *   e identificador.
 */
export type ProgramasCTASection = {
  type: "programasCTA";
  id: string;
  content: ProgramasCTAContent;
};

/**
 * ProgramasSection
 *
 * Propósito:
 * - Representar la unión discriminada de secciones
 *   de la página Programas.
 *
 * Información adicional:
 * - Permite renderizado predecible con `switch(section.type)`.
 */
export type ProgramasSection = 
  | ProgramasIntroSection
  | ProgramasSearchSection
  | ProgramasProcesoSection
  | ProgramasCalculadoraSection
  | ProgramasCTASection;