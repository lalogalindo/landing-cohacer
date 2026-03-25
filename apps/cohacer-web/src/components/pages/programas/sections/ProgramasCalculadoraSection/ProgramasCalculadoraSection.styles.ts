// src/components/pages/programas/sections/ProgramasCalculadoraSection/ProgramasCalculadoraSection.styles.ts

/**
 * programasCalculadoraSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   programasCalculadora.
 */
export const programasCalculadoraSectionStyles = {
  section:
    "bg-[#efe2a4] py-16 md:py-20",
  wrap:
    "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
  header:
    "mx-auto max-w-3xl text-center",
  title:
    "text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl",
  description:
    "mt-3 text-base text-slate-700 sm:text-lg",
  panel:
    "mt-10 rounded-2xl bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.10)] ring-1 ring-black/5 backdrop-blur-sm",
  panelGrid:
    "grid gap-8 p-6 md:grid-cols-[1fr_0.95fr] md:p-8",
  column:
    "flex flex-col",
  columnTitle:
    "text-2xl font-bold text-slate-900",
  fieldGroup:
    "mt-5",
  fieldLabel:
    "mb-2 block text-sm font-medium text-slate-700",
  select:
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[oklch(var(--primary))] focus:ring-2 focus:ring-[oklch(var(--primary)/0.18)]",
  summaryEmpty:
    "mt-5 rounded-xl bg-slate-100 px-4 py-4 text-sm text-slate-500",
  summaryCard:
    "mt-5 rounded-xl bg-slate-100 p-4",
  summaryProgram:
    "text-sm font-semibold text-slate-900",
  summaryList:
    "mt-4 space-y-3",
  summaryRow:
    "flex items-center justify-between gap-4 text-sm",
  summaryLabel:
    "text-slate-600",
  summaryValue:
    "font-semibold text-slate-900",
  summaryTotalRow:
    "mt-4 flex items-center justify-between gap-4 border-t border-slate-300 pt-4",
  summaryTotalLabel:
    "text-sm font-semibold text-slate-900",
  summaryTotalValue:
    "text-base font-bold text-slate-950",
  ctaButton:
    "mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#3b82f6] px-5 text-sm font-semibold text-white transition hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 disabled:cursor-not-allowed disabled:bg-[#93c5fd]",
} as const;