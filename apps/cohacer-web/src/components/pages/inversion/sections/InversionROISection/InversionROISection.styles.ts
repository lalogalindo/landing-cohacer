/**
 * inversionROISectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   de calculadora ROI.
 *
 * Información adicional:
 * - Mobile first.
 * - La paleta se ajusta para reflejar tarjetas pastel
 *   con texto de mayor contraste.
 */
export const inversionROISectionStyles = {  
  section: "bg-[#ffffff] px-4 py-12 sm:px-6 lg:px-8 lg:py-16",

  wrap: "mx-auto flex w-full max-w-5xl flex-col gap-6",

  header: "flex flex-col items-center gap-3 text-center",

  title: "text-2xl font-bold tracking-tight text-[#1f2937] sm:text-3xl",

  description:
    "max-w-3xl text-sm leading-6 text-[#6b7280] sm:text-base",

  panel:
    "grid gap-6 rounded-[20px] border border-[#ececec] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:p-6 lg:grid-cols-[1fr_1fr] lg:gap-8 lg:p-8 border border-[#e6e7ea] bg-white",

  formColumn: "flex flex-col gap-5",

  resultsColumn: "flex flex-col gap-5",

  columnTitle: "text-lg font-semibold text-[#1f2937] sm:text-xl",

  fieldGroup: "flex flex-col gap-2",

  label: "text-sm font-medium text-[#374151]",

  input:
    "h-11 rounded-xl border border-[#d8dce3] bg-white px-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#93c5fd]/40",

  select:
    "h-11 rounded-xl border border-[#d8dce3] bg-white px-4 text-sm text-[#111827] outline-none transition focus:border-[#3b82f6] focus:ring-2 focus:ring-[#93c5fd]/40",

  fieldHint: "text-xs leading-5 text-[#6b7280]",

  button:
    "mt-1 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#3b82f6] px-5 text-sm font-semibold text-white transition hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#93c5fd]/50",

  resultsGrid: "grid gap-4",

  resultCard: "rounded-2xl p-4 sm:p-5",

  resultLabel: "flex items-center gap-2 text-sm font-semibold",

  resultValue: "mt-2 text-2xl font-bold tracking-tight sm:text-3xl",

  resultHelper: "mt-1 text-xs leading-5 text-[#6b7280]",

  resultIcon: "text-sm",

  resultCardInfo: "bg-[#eaf1fb]",
  resultCardSuccess: "bg-[#e9f6ee]",
  resultCardPurple: "bg-[#f2ebfb]",
  resultCardWarning: "bg-[#f8f2da]",

  resultLabelInfo: "text-[#3b5a9a]",
  resultLabelSuccess: "text-[#2e7d52]",
  resultLabelPurple: "text-[#7e57c2]",
  resultLabelWarning: "text-[#b45309]",

  resultValueInfo: "text-[#2563eb]",
  resultValueSuccess: "text-[#16a34a]",
  resultValuePurple: "text-[#9333ea]",
  resultValueWarning: "text-[#d97706]",
};