// src/components/pages/programas/sections/ProgramasProcesoSection/ProgramasProcesoSection.styles.ts

/**
 * programasProcesoSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   ProgramasProceso para mantener separado el layout
 *   de la presentación visual.
 */
export const programasProcesoSectionStyles = {
  section:
    "bg-[#eff6ff] py-14 sm:py-16 lg:py-20",
  wrap:
    "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  header:
    "mx-auto max-w-3xl text-center",
  title:
    "text-3xl font-semibold tracking-tight text-[oklch(var(--foreground))] sm:text-4xl",
  subtitle:
    "mt-3 text-sm leading-6 text-[oklch(var(--muted-foreground))] sm:text-base",
  grid:
    "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4",
  card:
    "flex min-h-[240px] flex-col items-center rounded-2xl border border-[oklch(var(--border))] bg-[oklch(var(--card))] px-6 py-8 text-center shadow-sm",
  badge:
    "flex h-14 w-14 items-center justify-center rounded-full text-xl font-semibold text-white",
  badgeBlue:
    "bg-[#3b82f6]",
  badgeGreen:
    "bg-[#22c55e]",
  badgeOrange:
    "bg-[#f97316]",
  badgePurple:
    "bg-[#a855f7]",
  stepTitle:
    "mt-7 text-xl font-semibold leading-7 text-[oklch(var(--foreground))]",
  stepDescription:
    "mt-4 text-sm leading-7 text-[oklch(var(--muted-foreground))]",
} as const;