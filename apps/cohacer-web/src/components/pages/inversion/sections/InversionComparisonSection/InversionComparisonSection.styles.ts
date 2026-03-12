// src/components/pages/inversion/sections/InversionComparisonSection/InversionComparisonSection.styles.ts

/**
 * inversionComparisonSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   de comparación de inversión.
 *
 * Información adicional:
 * - Mobile first.
 * - Usa tokens del sistema (`--foreground`, `--muted-foreground`).
 * - Ajustado para acercarse visualmente al mockup.
 */
export const inversionComparisonSectionStyles = {
  section:
    "bg-[#f9fafb] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20",

  wrap: "mx-auto flex w-full max-w-6xl flex-col gap-6 sm:gap-8",

  header: "flex justify-center text-center",

  title:
    "text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-[2.2rem]",

  tableCard:
    "overflow-hidden rounded-[14px] bg-white shadow-[0_10px_26px_rgba(15,23,42,0.07)] ring-1 ring-black/5",

  tableScroll: "w-full overflow-x-auto",

  table: "min-w-[920px] w-full border-separate border-spacing-0 bg-white",

  headRow: "bg-white",

  headConcept:
    "w-[42%] px-8 py-8 text-left text-[15px] font-extrabold text-[#1f2937] border-b border-[#e8edf3]",

  headTraditional:
    "w-[19%] px-6 py-8 text-center text-[15px] font-extrabold text-[#ff4d4f] border-b border-[#e8edf3]",

  headCohacer:
    "w-[19%] px-6 py-8 text-center text-[15px] font-extrabold text-[#22c55e] border-b border-[#e8edf3]",

  headSaving:
    "w-[20%] px-6 py-8 text-center text-[15px] font-extrabold text-[#2563eb] border-b border-[#e8edf3]",

  bodyRow: "",

  totalRow: "bg-[#eef4ff]",

  conceptCell:
    "px-8 py-7 text-left text-[15px] font-semibold text-[#1f2937] border-b border-[#edf1f5]",

  valueCell:
    "px-6 py-7 text-center text-[15px] font-semibold border-b border-[#edf1f5]",

  totalConceptCell:
    "px-8 py-7 text-left text-[1.05rem] font-extrabold text-[#111827]",

  totalValueCell:
    "px-6 py-7 text-center text-[1.05rem] font-extrabold",

  cellNeutral: "text-[#111827]",

  cellDanger: "text-[#ff5a5f]",

  cellSuccess: "text-[#22c55e]",

  cellHighlight: "text-[#2563eb]",

  totalDanger: "text-[#ef4444]",

  totalSuccess: "text-[#22c55e]",

  totalHighlight: "text-[#2563eb] text-[1.15rem] sm:text-[1.2rem]",

  resultText:
    "text-center text-sm font-medium text-[#6b7280] sm:text-base",

  resultLabel: "font-extrabold text-[#374151]",

  resultPrefix: "text-[#6b7280]",

  resultHighlight: "font-extrabold text-[#16a34a]",

  resultSuffix: "text-[#6b7280]",
};