import type { Section } from "@/types/section";

/**
 * ProcessStep
 *
 * Propósito:
 * - Paso del proceso.
 */
export type ProcessStep = {
  title: string;
  description?: string;
};

/**
 * ProcessStepsContent
 *
 * Propósito:
 * - Contenido del bloque de proceso (3 pasos).
 */
export type ProcessStepsContent = {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
};

/**
 * ProcessStepsSection
 *
 * Propósito:
 * - Sección renderizable del Home.
 */
export type ProcessStepsSection = Section<"processSteps", ProcessStepsContent>;