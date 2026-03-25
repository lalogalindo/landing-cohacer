// src/components/pages/programas/sections/ProgramasSearchSection/ProgramasSearchSection.tsx

import { useMemo, useState } from "react";
import type {
  ProgramasSearchContent,
  ProgramasSearchFilterOption,
  ProgramasSearchProgram,
  ProgramasSearchResultItem,
} from "@/types/pages/programas/sections/programasSearch.section";
import { programasSearchSectionStyles as s } from "./ProgramasSearchSection.styles";
import { ProgramasFilter } from "./components/ProgramasFilter";
import { ProgramasResult } from "./components/ProgramasResult";

type Props = {
  id: string;
  content: ProgramasSearchContent;
};

const ALL_LEVELS_ID = "all-levels";
const ALL_AREAS_ID = "all-areas";

/**
 * normalizeText
 *
 * Propósito:
 * - Normalizar texto para comparaciones de búsqueda
 *   sin depender de mayúsculas, acentos o espacios extra.
 *
 * Parámetros:
 * - value: Texto a normalizar.
 *
 * Regresa:
 * - Texto normalizado.
 */
function normalizeText(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * matchesSelectedLevel
 *
 * Propósito:
 * - Validar si un programa coincide con el nivel
 *   actualmente seleccionado.
 *
 * Parámetros:
 * - program: Programa a evaluar.
 * - selectedLevelId: Id del nivel activo.
 *
 * Regresa:
 * - `true` cuando el programa debe mostrarse por nivel.
 */
function matchesSelectedLevel(
  program: ProgramasSearchProgram,
  selectedLevelId: string
) {
  if (selectedLevelId === ALL_LEVELS_ID) {
    return true;
  }

  return program.levelId === selectedLevelId;
}

/**
 * matchesSelectedArea
 *
 * Propósito:
 * - Validar si un programa coincide con el área
 *   actualmente seleccionada.
 *
 * Parámetros:
 * - program: Programa a evaluar.
 * - selectedAreaId: Id del área activa.
 *
 * Regresa:
 * - `true` cuando el programa debe mostrarse por área.
 */
function matchesSelectedArea(
  program: ProgramasSearchProgram,
  selectedAreaId: string
) {
  if (selectedAreaId === ALL_AREAS_ID) {
    return true;
  }

  return program.areaIds.includes(selectedAreaId);
}

/**
 * matchesSearchQuery
 *
 * Propósito:
 * - Validar si un programa coincide con el texto
 *   de búsqueda ingresado por el usuario.
 *
 * Parámetros:
 * - program: Programa a evaluar.
 * - searchQuery: Texto de búsqueda actual.
 *
 * Regresa:
 * - `true` cuando el programa coincide con la búsqueda.
 */
function matchesSearchQuery(
  program: ProgramasSearchProgram,
  searchQuery: string
) {
  const normalizedQuery = normalizeText(searchQuery);

  if (!normalizedQuery) {
    return true;
  }

  const searchableText = normalizeText(
    [
      program.title,
      program.description,
      program.levelId,
      program.areaIds.join(" "),
      program.requirements.join(" "),
    ].join(" ")
  );

  return searchableText.includes(normalizedQuery);
}

/**
 * getOptionLabelById
 *
 * Propósito:
 * - Obtener la etiqueta legible de una opción
 *   a partir de su identificador.
 *
 * Parámetros:
 * - options: Opciones disponibles.
 * - id: Identificador a buscar.
 *
 * Regresa:
 * - Texto visible de la opción encontrada.
 */
function getOptionLabelById(
  options: ProgramasSearchFilterOption[],
  id: string
) {
  const match = options.find((option) => option.id === id);

  if (!match) {
    return "";
  }

  return match.label;
}

/**
 * buildResultItems
 *
 * Propósito:
 * - Transformar la lista de programas filtrados
 *   a una estructura lista para renderizar tarjetas.
 *
 * Parámetros:
 * - programs: Programas filtrados.
 * - levelOptions: Opciones de nivel disponibles.
 *
 * Regresa:
 * - Lista de programas adaptada para visualización.
 */
function buildResultItems(
  programs: ProgramasSearchProgram[],
  levelOptions: ProgramasSearchFilterOption[]
): ProgramasSearchResultItem[] {
  return programs.map((program) => ({
    id: program.id,
    title: program.title,
    description: program.description,
    levelLabel: getOptionLabelById(levelOptions, program.levelId),
    durationLabel: program.durationLabel,
    modalityLabel: program.modalityLabel,
    requirements: program.requirements,
    priceLabel: program.priceLabel,
    detailHref: program.detailHref,
    icon: program.icon,
    accent: program.accent,
  }));
}

/**
 * handleSearchSubmit
 *
 * Propósito:
 * - Mantener una experiencia de submit consistente
 *   en el buscador principal.
 *
 * Información adicional:
 * - Actualmente la búsqueda se aplica en tiempo real.
 * - El submit conserva el patrón visual del formulario
 *   y normaliza el texto capturado.
 */
function handleSearchSubmit(
  searchQuery: string,
  setSearchQuery: (value: string) => void
) {
  setSearchQuery(searchQuery.trim());
}

/**
 * ProgramasSearchSection
 *
 * Propósito:
 * - Renderizar la sección contenedora de búsqueda
 *   y resultados de programas.
 * - Centralizar el estado compartido entre filtros
 *   y tarjetas de resultados.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada con funcionalidad de búsqueda.
 */
export function ProgramasSearchSection({ id, content }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevelId, setSelectedLevelId] = useState(ALL_LEVELS_ID);
  const [selectedAreaId, setSelectedAreaId] = useState(ALL_AREAS_ID);

  const levelOptions = useMemo(
    () => [
      {
        id: ALL_LEVELS_ID,
        label: content.allLevelsLabel,
      },
      ...content.levels,
    ],
    [content.allLevelsLabel, content.levels]
  );

  const areaOptions = useMemo(
    () => [
      {
        id: ALL_AREAS_ID,
        label: content.allAreasLabel,
      },
      ...content.areas,
    ],
    [content.allAreasLabel, content.areas]
  );

  const visiblePrograms = useMemo(() => {
    const filteredPrograms = content.programs.filter((program) => {
      return (
        matchesSelectedLevel(program, selectedLevelId) &&
        matchesSelectedArea(program, selectedAreaId) &&
        matchesSearchQuery(program, searchQuery)
      );
    });

    return buildResultItems(filteredPrograms, content.levels);
  }, [
    content.levels,
    content.programs,
    searchQuery,
    selectedAreaId,
    selectedLevelId,
  ]);

  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <ProgramasFilter
          searchPlaceholder={content.searchPlaceholder}
          searchButtonLabel={content.searchButtonLabel}
          levelFilterLabel={content.levelFilterLabel}
          areaFilterLabel={content.areaFilterLabel}
          levelOptions={levelOptions}
          areaOptions={areaOptions}
          searchQuery={searchQuery}
          selectedLevelId={selectedLevelId}
          selectedAreaId={selectedAreaId}
          onSearchQueryChange={setSearchQuery}
          onSearchSubmit={() => handleSearchSubmit(searchQuery, setSearchQuery)}
          onLevelChange={setSelectedLevelId}
          onAreaChange={setSelectedAreaId}
        />

        <ProgramasResult
          programs={visiblePrograms}
          detailButtonLabel={content.detailButtonLabel}
          emptyStateTitle={content.emptyStateTitle}
          emptyStateDescription={content.emptyStateDescription}
        />
      </div>
    </section>
  );
}