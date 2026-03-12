// src/types/pages/inversion/sections/inversionComparison.section.ts

/**
 * InversionComparisonColumns
 *
 * Propósito:
 * - Representar los encabezados de columnas
 *   de la tabla comparativa.
 */
export type InversionComparisonColumns = {
  concept: string;
  traditional: string;
  cohacer: string;
  saving: string;
};

/**
 * InversionComparisonRow
 *
 * Propósito:
 * - Representar una fila individual dentro
 *   de la tabla comparativa de costos.
 */
export type InversionComparisonRow = {
  concept: string;
  traditionalValue: string;
  cohacerValue: string;
  savingValue: string;
  isTotal?: boolean;
  isNegativeSaving?: boolean;
};

/**
 * InversionComparisonResult
 *
 * Propósito:
 * - Representar el mensaje resumen inferior
 *   de la sección comparativa.
 */
export type InversionComparisonResult = {
  label: string;
  prefix?: string;
  highlight: string;
  suffix?: string;
};

/**
 * InversionComparisonContent
 *
 * Propósito:
 * - Representar el contenido completo de la sección
 *   "Comparación Real de Costos".
 */
export type InversionComparisonContent = {
  title: string;
  columns: InversionComparisonColumns;
  rows: InversionComparisonRow[];
  result?: InversionComparisonResult;
};