// src/types/pages/programas/sections/programasIntro.section.ts

/**
 * ProgramasIntroStat
 *
 * Propósito:
 * - Representar una métrica destacada
 *   dentro de la introducción de Programas.
 */
export type ProgramasIntroStat = {
  value: string;
  label: string;
};

/**
 * ProgramasIntroContent
 *
 * Propósito:
 * - Representar el contenido tipado
 *   de la sección inicial de Programas.
 */
export type ProgramasIntroContent = {
  title: string;
  description: string;
  stats: ProgramasIntroStat[];
};