// src/components/pages/programas/sections/ProgramasSearchSection/components/ProgramasResult.styles.ts

/**
 * programasResultStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias del grid
 *   y de las tarjetas de resultados.
 */
export const programasResultStyles = {
  grid: "grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3",
  card:
    "relative overflow-hidden rounded-[22px] border border-[oklch(var(--border))] bg-[oklch(var(--card))] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]",
  cardAccent: "absolute inset-x-0 top-0 h-1.5 rounded-t-[22px]",
  cardAccentWarm:
    "bg-gradient-to-r from-amber-500 via-orange-500 to-violet-500",
  cardAccentCool:
    "bg-gradient-to-r from-sky-500 via-blue-500 to-violet-500",
  cardAccentViolet:
    "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-purple-500",
  header: "flex items-start justify-between gap-4",
  levelBadge:
    "inline-flex rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white",
  cardIcon: "text-lg leading-none text-slate-400",
  title: "mt-4 text-[1.625rem] font-bold leading-tight text-slate-900",
  description: "mt-3 text-sm leading-7 text-slate-600",
  metaRow: "mt-4 flex flex-wrap gap-2",
  durationBadge:
    "inline-flex rounded-full bg-amber-500 px-3 py-1 text-[11px] font-bold text-white",
  modalityBadge:
    "inline-flex rounded-full bg-violet-500 px-3 py-1 text-[11px] font-bold text-white",
  requirementsTitle: "mt-5 text-sm font-bold text-slate-900",
  requirementsList: "mt-3 space-y-1.5",
  requirementItem: "text-sm leading-6 text-slate-700",
  footer: "mt-6 flex items-center justify-between gap-3",
  detailLink:
    "inline-flex h-11 items-center justify-center rounded-[12px] bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700",
  price: "text-right text-lg font-bold text-emerald-600",
  emptyState:
    "rounded-[22px] border border-dashed border-[oklch(var(--border))] bg-[oklch(var(--card))] p-8 text-center shadow-[0_12px_30px_rgba(15,23,42,0.05)]",
  emptyTitle: "text-xl font-bold text-slate-900",
  emptyDescription: "mt-3 text-sm leading-7 text-slate-600",
};