// src/components/pages/programas/sections/ProgramasSearchSection/components/ProgramasResult.tsx

import type {
  ProgramasSearchProgramAccent,
  ProgramasSearchResultItem,
} from "@/types/pages/programas/sections/programasSearch.section";
import { programasResultStyles as s } from "./ProgramasResult.styles";

type Props = {
  programs: ProgramasSearchResultItem[];
  detailButtonLabel: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
};

/**
 * getAccentClassName
 *
 * Propósito:
 * - Obtener la clase visual del acento superior
 *   de una tarjeta según su tono configurado.
 *
 * Parámetros:
 * - accent: Tono visual configurado para la tarjeta.
 *
 * Regresa:
 * - Clase utilitaria del gradiente correspondiente.
 */
function getAccentClassName(accent?: ProgramasSearchProgramAccent) {
  switch (accent) {
    case "cool":
      return s.cardAccentCool;

    case "violet":
      return s.cardAccentViolet;

    case "warm":
    default:
      return s.cardAccentWarm;
  }
}

/**
 * renderRequirement
 *
 * Propósito:
 * - Renderizar una línea individual
 *   dentro de la lista de requisitos.
 *
 * Parámetros:
 * - requirement: Texto del requisito.
 * - index: Índice del requisito.
 *
 * Regresa:
 * - Elemento de lista renderizado.
 */
function renderRequirement(requirement: string, index: number) {
  return (
    <li key={`${requirement}-${index}`} className={s.requirementItem}>
      • {requirement}
    </li>
  );
}

/**
 * renderProgramCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual
 *   de programa dentro del grid de resultados.
 *
 * Parámetros:
 * - program: Programa transformado para visualización.
 * - detailButtonLabel: Texto del botón de detalle.
 *
 * Regresa:
 * - Tarjeta de programa renderizada.
 */
function renderProgramCard(
  program: ProgramasSearchResultItem,
  detailButtonLabel: string
) {
  return (
    <article key={program.id} className={s.card}>
      <div className={`${s.cardAccent} ${getAccentClassName(program.accent)}`} />

      <div className={s.header}>
        <span className={s.levelBadge}>{program.levelLabel}</span>
        {program.icon ? <span className={s.cardIcon}>{program.icon}</span> : null}
      </div>

      <h3 className={s.title}>{program.title}</h3>
      <p className={s.description}>{program.description}</p>

      <div className={s.metaRow}>
        <span className={s.durationBadge}>{program.durationLabel}</span>
        <span className={s.modalityBadge}>{program.modalityLabel}</span>
      </div>

      <div>
        <p className={s.requirementsTitle}>Requisitos:</p>
        <ul className={s.requirementsList}>
          {program.requirements.map((requirement, index) =>
            renderRequirement(requirement, index)
          )}
        </ul>
      </div>

      <div className={s.footer}>
        <a href={program.detailHref} className={s.detailLink}>
          {detailButtonLabel}
        </a>

        <p className={s.price}>{program.priceLabel}</p>
      </div>
    </article>
  );
}

/**
 * ProgramasResult
 *
 * Propósito:
 * - Renderizar el grid de resultados filtrados
 *   de la sección ProgramasSearch.
 *
 * Parámetros:
 * - programs: Programas listos para renderizar.
 * - detailButtonLabel: Texto del botón de detalle.
 * - emptyStateTitle: Título para estado vacío.
 * - emptyStateDescription: Descripción para estado vacío.
 *
 * Regresa:
 * - Grid de tarjetas o estado vacío.
 */
export function ProgramasResult({
  programs,
  detailButtonLabel,
  emptyStateTitle,
  emptyStateDescription,
}: Props) {
  if (programs.length === 0) {
    return (
      <div className={s.emptyState}>
        <h3 className={s.emptyTitle}>{emptyStateTitle}</h3>
        <p className={s.emptyDescription}>{emptyStateDescription}</p>
      </div>
    );
  }

  return (
    <div className={s.grid}>
      {programs.map((program) => renderProgramCard(program, detailButtonLabel))}
    </div>
  );
}