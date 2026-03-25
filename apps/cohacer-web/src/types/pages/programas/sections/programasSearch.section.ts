// src/types/pages/programas/sections/programasSearch.section.ts

/**
 * ProgramasSearchFilterOption
 *
 * Propósito:
 * - Representar una opción de filtro
 *   para nivel educativo o área de estudio.
 */
export type ProgramasSearchFilterOption = {
  id: string;
  label: string;
  icon?: string;
};

/**
 * ProgramasSearchProgramAccent
 *
 * Propósito:
 * - Restringir los tonos visuales disponibles
 *   para las tarjetas de programas.
 */
export type ProgramasSearchProgramAccent = string;

/**
 * ProgramasSearchProgram
 *
 * Propósito:
 * - Representar un programa académico
 *   dentro del buscador de programas.
 */
export type ProgramasSearchProgram = {
  id: string;
  title: string;
  description: string;
  levelId: string;
  areaIds: string[];
  durationLabel: string;
  modalityLabel: string;
  requirements: string[];
  priceLabel: string;
  detailHref: string;
  icon?: string;
  accent?: ProgramasSearchProgramAccent;
};

/**
 * ProgramasSearchResultItem
 *
 * Propósito:
 * - Representar el programa ya transformado
 *   para su renderizado en el grid de resultados.
 */
export type ProgramasSearchResultItem = {
  id: string;
  title: string;
  description: string;
  levelLabel: string;
  durationLabel: string;
  modalityLabel: string;
  requirements: string[];
  priceLabel: string;
  detailHref: string;
  icon?: string;
  accent?: ProgramasSearchProgramAccent;
};

/**
 * ProgramasSearchContent
 *
 * Propósito:
 * - Representar el contenido tipado
 *   de la sección de búsqueda de programas.
 */
export type ProgramasSearchContent = {
  searchPlaceholder: string;
  searchButtonLabel: string;
  levelFilterLabel: string;
  areaFilterLabel: string;
  allLevelsLabel: string;
  allAreasLabel: string;
  detailButtonLabel: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  levels: ProgramasSearchFilterOption[];
  areas: ProgramasSearchFilterOption[];
  programs: ProgramasSearchProgram[];
};