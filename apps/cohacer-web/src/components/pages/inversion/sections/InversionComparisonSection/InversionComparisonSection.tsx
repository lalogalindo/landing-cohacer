// src/components/pages/inversion/sections/InversionComparisonSection/InversionComparisonSection.tsx

import type {
  InversionComparisonContent,
  InversionComparisonRow,
} from "@/types/pages/inversion/sections/inversionComparison.section";

import { inversionComparisonSectionStyles as s } from "./InversionComparisonSection.styles";

type Props = {
  id: string;
  content: InversionComparisonContent;
};

/**
 * renderComparisonRow
 *
 * Propósito:
 * - Renderizar una fila individual de la tabla comparativa.
 * - Aplicar estilos especiales cuando la fila representa el total.
 *
 * Parámetros:
 * - row: Fila individual de comparación.
 * - index: Posición de la fila dentro del arreglo.
 *
 * Regresa:
 * - Fila HTML renderizada.
 */
function renderComparisonRow(row: InversionComparisonRow, index: number) {
  const conceptCellClassName = row.isTotal ? s.totalConceptCell : s.conceptCell;
  const valueCellClassName = row.isTotal ? s.totalValueCell : s.valueCell;

  const traditionalToneClassName = row.isTotal ? s.totalDanger : s.cellDanger;
  const cohacerToneClassName = row.isTotal ? s.totalSuccess : s.cellSuccess;
  const savingToneClassName = row.isNegativeSaving
    ? row.isTotal
      ? s.totalDanger
      : s.cellDanger
    : row.isTotal
    ? s.totalHighlight
    : s.cellHighlight;

  return (
    <tr
      key={`${row.concept}-${index}`}
      className={row.isTotal ? s.totalRow : s.bodyRow}
    >
      <th scope="row" className={conceptCellClassName}>
        {row.concept}
      </th>

      <td className={valueCellClassName}>
        <span className={traditionalToneClassName}>{row.traditionalValue}</span>
      </td>

      <td className={valueCellClassName}>
        <span className={cohacerToneClassName}>{row.cohacerValue}</span>
      </td>

      <td className={valueCellClassName}>
        <span className={savingToneClassName}>{row.savingValue}</span>
      </td>
    </tr>
  );
}

/**
 * InversionComparisonSection
 *
 * Propósito:
 * - Renderizar la sección de comparación real de costos.
 * - Mostrar una tabla comparativa entre universidad tradicional,
 *   COHACER y ahorro total.
 * - Mostrar un mensaje de resultado al final de la sección.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function InversionComparisonSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
        </header>

        <div className={s.tableCard}>
          <div className={s.tableScroll}>
            <table className={s.table}>
              <colgroup>
                <col style={{ width: "42%" }} />
                <col style={{ width: "19%" }} />
                <col style={{ width: "19%" }} />
                <col style={{ width: "20%" }} />
              </colgroup>

              <thead>
                <tr className={s.headRow}>
                  <th scope="col" className={s.headConcept}>
                    {content.columns.concept}
                  </th>
                  <th scope="col" className={s.headTraditional}>
                    {content.columns.traditional}
                  </th>
                  <th scope="col" className={s.headCohacer}>
                    {content.columns.cohacer}
                  </th>
                  <th scope="col" className={s.headSaving}>
                    {content.columns.saving}
                  </th>
                </tr>
              </thead>

              <tbody>
                {content.rows.map((row, index) => renderComparisonRow(row, index))}
              </tbody>
            </table>
          </div>
        </div>

        {content.result ? (
          <p className={s.resultText}>
            <span className={s.resultLabel}>{content.result.label}</span>{" "}
            {content.result.prefix ? (
              <span className={s.resultPrefix}>{content.result.prefix} </span>
            ) : null}
            <span className={s.resultHighlight}>{content.result.highlight}</span>
            {content.result.suffix ? (
              <span className={s.resultSuffix}> {content.result.suffix}</span>
            ) : null}
          </p>
        ) : null}
      </div>
    </section>
  );
}