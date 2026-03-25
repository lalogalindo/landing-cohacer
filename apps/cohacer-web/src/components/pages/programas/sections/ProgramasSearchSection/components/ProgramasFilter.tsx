// src/components/pages/programas/sections/ProgramasSearchSection/components/ProgramasFilter.tsx

import type { FormEvent } from "react";
import type { ProgramasSearchFilterOption } from "@/types/pages/programas/sections/programasSearch.section";
import { programasFilterStyles as s } from "./ProgramasFilter.styles";

type ActiveTone = "blue" | "green";

type Props = {
  searchPlaceholder: string;
  searchButtonLabel: string;
  levelFilterLabel: string;
  areaFilterLabel: string;
  levelOptions: ProgramasSearchFilterOption[];
  areaOptions: ProgramasSearchFilterOption[];
  searchQuery: string;
  selectedLevelId: string;
  selectedAreaId: string;
  onSearchQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
  onLevelChange: (value: string) => void;
  onAreaChange: (value: string) => void;
};

/**
 * getChipClassName
 *
 * Propósito:
 * - Obtener la clase visual correcta de un chip
 *   según su estado activo y el tono del grupo.
 *
 * Parámetros:
 * - isActive: Indica si la opción está seleccionada.
 * - tone: Tono visual del grupo de filtros.
 *
 * Regresa:
 * - Cadena de clases utilitarias para el chip.
 */
function getChipClassName(isActive: boolean, tone: ActiveTone) {
  if (!isActive) {
    return `${s.chipButton} ${s.chipInactive}`;
  }

  if (tone === "green") {
    return `${s.chipButton} ${s.chipActiveGreen}`;
  }

  return `${s.chipButton} ${s.chipActiveBlue}`;
}

/**
 * renderFilterOption
 *
 * Propósito:
 * - Renderizar una opción individual de filtro
 *   como chip interactivo.
 *
 * Parámetros:
 * - option: Opción de filtro a mostrar.
 * - isActive: Estado actual de selección.
 * - tone: Tono visual del grupo.
 * - onClick: Callback cuando se selecciona la opción.
 *
 * Regresa:
 * - Botón renderizado del filtro.
 */
function renderFilterOption(
  option: ProgramasSearchFilterOption,
  isActive: boolean,
  tone: ActiveTone,
  onClick: (value: string) => void
) {
  return (
    <button
      key={option.id}
      type="button"
      className={getChipClassName(isActive, tone)}
      onClick={() => onClick(option.id)}
      aria-pressed={isActive}
    >
      {option.icon ? <span className={s.chipIcon}>{option.icon}</span> : null}
      <span>{option.label}</span>
    </button>
  );
}

/**
 * handleSubmit
 *
 * Propósito:
 * - Evitar la recarga del formulario y delegar
 *   el submit al callback del componente padre.
 *
 * Parámetros:
 * - event: Evento submit del formulario.
 */
function handleSubmit(
  event: FormEvent<HTMLFormElement>,
  onSearchSubmit: () => void
) {
  event.preventDefault();
  onSearchSubmit();
}

/**
 * ProgramasFilter
 *
 * Propósito:
 * - Renderizar el bloque visual del buscador
 *   y los filtros de la sección ProgramasSearch.
 *
 * Parámetros:
 * - searchPlaceholder: Placeholder del input de búsqueda.
 * - searchButtonLabel: Texto del botón de búsqueda.
 * - levelFilterLabel: Título del grupo de niveles.
 * - areaFilterLabel: Título del grupo de áreas.
 * - levelOptions: Opciones de nivel educativo.
 * - areaOptions: Opciones de área de estudio.
 * - searchQuery: Texto actual de búsqueda.
 * - selectedLevelId: Nivel actualmente seleccionado.
 * - selectedAreaId: Área actualmente seleccionada.
 * - onSearchQueryChange: Callback de cambio de búsqueda.
 * - onSearchSubmit: Callback al enviar la búsqueda.
 * - onLevelChange: Callback al cambiar el nivel.
 * - onAreaChange: Callback al cambiar el área.
 *
 * Regresa:
 * - Bloque visual de filtros renderizado.
 */
export function ProgramasFilter({
  searchPlaceholder,
  searchButtonLabel,
  levelFilterLabel,
  areaFilterLabel,
  levelOptions,
  areaOptions,
  searchQuery,
  selectedLevelId,
  selectedAreaId,
  onSearchQueryChange,
  onSearchSubmit,
  onLevelChange,
  onAreaChange,
}: Props) {
  return (
    <div className={s.panel}>
      <form onSubmit={(event) => handleSubmit(event, onSearchSubmit)}>
        <div className={s.searchRow}>
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => onSearchQueryChange(event.target.value)}
            placeholder={searchPlaceholder}
            className={s.searchInput}
            aria-label={searchPlaceholder}
          />

          <button type="submit" className={s.searchButton}>
            {searchButtonLabel}
          </button>
        </div>

        <div className={s.groupsWrap}>
          <div className={s.group}>
            <p className={s.groupTitle}>{levelFilterLabel}</p>
            <div className={s.chipsRow}>
              {levelOptions.map((option) =>
                renderFilterOption(
                  option,
                  option.id === selectedLevelId,
                  "blue",
                  onLevelChange
                )
              )}
            </div>
          </div>

          <div className={s.group}>
            <p className={s.groupTitle}>{areaFilterLabel}</p>
            <div className={s.chipsRow}>
              {areaOptions.map((option) =>
                renderFilterOption(
                  option,
                  option.id === selectedAreaId,
                  "green",
                  onAreaChange
                )
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}