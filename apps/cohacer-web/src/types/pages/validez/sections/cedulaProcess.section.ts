// src/types/pages/validez/sections/cedulaProcess.section.ts

/**
 * Tonos visuales permitidos para cada paso del timeline.
 */
export type CedulaProcessStepTone = string;

/**
 * Paso individual del proceso de obtención de cédula.
 *
 * Propósito:
 * - Representar cada etapa del timeline con su título,
 *   descripción y texto auxiliar.
 */
export type CedulaProcessStep = {
  title: string;
  description?: string;
  meta?: string;
  tone?: CedulaProcessStepTone;
};

/**
 * Contenido de la sección CedulaProcess.
 *
 * Propósito:
 * - Modelar el contenido agnóstico proveniente del JSON puro.
 */
export type CedulaProcessContent = {
  title: string;
  description?: string;
  steps: CedulaProcessStep[];
};