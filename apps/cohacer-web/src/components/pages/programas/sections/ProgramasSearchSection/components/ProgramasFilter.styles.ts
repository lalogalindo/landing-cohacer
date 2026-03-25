// src/components/pages/programas/sections/ProgramasSearchSection/components/ProgramasFilter.styles.ts

/**
 * programasFilterStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias del bloque
 *   visual de filtros de programas.
 */
export const programasFilterStyles = {
  panel:
    "rounded-[24px] border border-[oklch(var(--border))] bg-[oklch(var(--card))] p-4 shadow-[0_12px_34px_rgba(15,23,42,0.06)] md:p-5",
  searchRow: "flex flex-col gap-3 md:flex-row md:items-center",
  searchInput:
    "h-12 w-full rounded-[14px] border border-[oklch(var(--border))] bg-white px-4 text-sm text-[oklch(var(--foreground))] outline-none transition placeholder:text-slate-400 focus:border-[oklch(var(--primary))] focus:ring-4 focus:ring-[rgba(59,130,246,0.12)]",
  searchButton:
    "inline-flex h-12 min-w-[180px] items-center justify-center rounded-[12px] bg-[oklch(var(--primary))] px-5 text-sm font-semibold text-[oklch(var(--primary-foreground))] transition hover:opacity-95",
  groupsWrap: "mt-6 flex flex-col gap-6",
  group: "flex flex-col gap-3",
  groupTitle:
    "text-base font-bold leading-none text-[oklch(var(--foreground))]",
  chipsRow: "flex flex-wrap items-center gap-3",
  chipButton:
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition",
  chipInactive:
    "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900",
  chipActiveBlue:
    "bg-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.24)]",
  chipActiveGreen:
    "bg-emerald-500 text-white shadow-[0_10px_24px_rgba(16,185,129,0.24)]",
  chipIcon: "text-sm leading-none",
};