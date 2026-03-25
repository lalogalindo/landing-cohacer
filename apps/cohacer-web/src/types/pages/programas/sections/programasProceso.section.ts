// src/types/pages/programas/sections/programasProceso.section.ts

/**
 * ProgramasProcesoStepTone
 *
 * Propósito:
 * - Restringir los tonos visuales disponibles
 *   para cada paso del proceso.
 */
export type ProgramasProcesoStepTone = string;

/**
 * ProgramasProcesoStep
 *
 * Propósito:
 * - Representar un paso individual dentro
 *   del proceso de inscripción.
 */
export type ProgramasProcesoStep = {
  number: number;
  title: string;
  description: string;
  tone: ProgramasProcesoStepTone;
};

/**
 * ProgramasProcesoContent
 *
 * Propósito:
 * - Representar el contenido tipado de la
 *   sección de proceso de inscripción.
 */
export type ProgramasProcesoContent = {
  title: string;
  subtitle: string;
  steps: ProgramasProcesoStep[];
};