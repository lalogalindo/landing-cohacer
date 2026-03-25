// src/components/pages/programas/sections/ProgramasCTASection/ProgramasCTASection.styles.ts

/**
 * programasCTASectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   ProgramasCTASection.
 */
export const programasCTASectionStyles = {
  section: "bg-[#ffffff] px-4 py-14 sm:px-6 sm:py-18 lg:px-8",
  wrap: "mx-auto max-w-5xl",
  header: "mx-auto max-w-3xl text-center",
  title:
    "text-pretty text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl",
  description:
    "mx-auto mt-4 max-w-3xl text-balance text-base leading-7 text-slate-600 sm:text-lg",
  actions:
    "mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center",
  primaryButton:
    "w-full rounded-xl border-0 bg-[#f97316] px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#ea580c] sm:w-auto sm:min-w-[220px]",
  secondaryButton:
    "w-full rounded-xl border-0 bg-[#22c55e] px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#16a34a] sm:w-auto sm:min-w-[220px]",
  buttonIcon: "text-sm",
  guarantee:
    "mt-8 text-center text-sm leading-6 text-slate-600 sm:text-[15px]",
  guaranteeTitle: "font-semibold text-slate-800",
  highlights:
    "mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3",
  highlightItem:
    "inline-flex items-center justify-center gap-2 text-sm text-slate-600",
  highlightIcon: "text-[12px] text-[#22c55e]",
} as const;