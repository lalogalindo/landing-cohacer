// src/components/pages/programas/sections/ProgramasIntroSection/ProgramasIntroSection.styles.ts

/**
 * programasIntroSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   inicial de la página Programas.
 *
 * Información adicional:
 * - El fondo usa una combinación de gradiente lineal
 *   y capas de glow para aproximar el visual del mockup.
 */
export const programasIntroSectionStyles = {
  section:
    "relative overflow-hidden bg-[linear-gradient(90deg,#2347bf_0%,#2d63dc_34%,#2e88ec_66%,#10b0da_100%)]",
  glowTop:
    "pointer-events-none absolute inset-x-[12%] top-[-7rem] h-52 rounded-full bg-white/8 blur-3xl",
  glowCenter:
    "pointer-events-none absolute left-1/2 top-1/2 h-64 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl",
  glowBottom:
    "pointer-events-none absolute inset-x-[18%] bottom-[-6rem] h-44 rounded-full bg-cyan-200/10 blur-3xl",
  wrap:
    "relative mx-auto flex max-w-7xl flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20",
  header: "mx-auto max-w-4xl",
  title:
    "text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl lg:text-[3rem] lg:leading-tight",
  description:
    "mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/92 sm:mt-5 sm:text-base lg:text-lg lg:leading-8",
  statsGrid:
    "mt-8 grid w-full max-w-4xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4",
  statCard:
    "rounded-2xl border border-white/8 bg-white/10 px-6 py-5 shadow-[0_10px_35px_rgba(15,23,42,0.12)] backdrop-blur-sm",
  statValue: "text-3xl font-extrabold leading-none text-white",
  statLabel: "mt-2 text-sm font-medium leading-5 text-white/90",
} as const;