// src/content/data/programasPage/index.ts

import rawProgramasIntro from "./programasIntro.json";
import type { ProgramasIntroContent } from "@/types/pages/programas/sections/programasIntro.section";

import rawProgramasSearch from "./programasSearch.json";
import type { ProgramasSearchContent } from "@/types/pages/programas/sections/programasSearch.section";

import rawProgramasProceso from "./programasProceso.json";
import type { ProgramasProcesoContent } from "@/types/pages/programas/sections/programasProceso.section";

import rawProgramasCalculadora from "./programasCalculadora.json";
import type { ProgramasCalculadoraContent } from "@/types/pages/programas/sections/programasCalculadora.section";

import rawProgramasCTA from "./programasCTA.json";
import type { ProgramasCTAContent } from "@/types/pages/programas/sections/programasCTA.section";

/**
 * programasIntroContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   inicial de la página Programas.
 */
export const programasIntroContent: ProgramasIntroContent = rawProgramasIntro;

/**
 * programasSearchContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de búsqueda y resultados de Programas.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const programasSearchContent: ProgramasSearchContent = rawProgramasSearch;

/**
 * programasProcesoContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de proceso de la página Programas.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const programasProcesoContent: ProgramasProcesoContent =
  rawProgramasProceso;
  
/**
 * programasCalculadoraContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de calculadora de inversión.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado
 *   del JSON puro.
 */
export const programasCalculadoraContent: ProgramasCalculadoraContent =
  rawProgramasCalculadora;

/**
 * programasCTAContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   CTA de la página Programas.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const programasCTAContent: ProgramasCTAContent = rawProgramasCTA;