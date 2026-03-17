/**
 * inversionGarantiaSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   InversionGarantia.
 *
 * Información adicional:
 * - Mantiene layout mobile first.
 * - Usa una composición simple de clases, sin cva.
 */
export const inversionGarantiaSectionStyles = {
  section: "bg-[#ffffff] py-12 sm:py-14 md:py-16",
  wrap: "mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8",
  header: "mx-auto max-w-3xl",
  title:
    "text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-[2.125rem]",

  grid: "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6",

  cardBase:
    "flex h-full flex-col items-center rounded-2xl border px-6 py-8 text-center shadow-[0_8px_24px_rgba(15,23,42,0.04)]",
  cardGreen: "border-[#bbf7d0] bg-[#f0fdf4]",
  cardBlue: "border-[#bfdbfe] bg-[#eff6ff]",

  iconBase:
    "mb-5 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold",
  iconGreen: "bg-[#22c55e] text-white",
  iconBlue: "bg-[#3b82f6] text-white",

  cardTitle: "text-xl font-extrabold tracking-tight text-slate-900",
  cardDescription:
    "mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base",
  highlightBase: "mt-4 text-sm font-extrabold sm:text-base",
  highlightGreen: "text-[#16a34a]",
  highlightBlue: "text-[#2563eb]",

  resultCard:
    "rounded-2xl border border-[#fde68a] bg-[#fffbeb] px-5 py-6 text-center shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:px-8",
  resultTitle:
    "flex items-center justify-center gap-2 text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl",
  resultDescription:
    "mx-auto mt-3 max-w-4xl text-sm leading-6 text-slate-600 sm:text-base",
} as const;