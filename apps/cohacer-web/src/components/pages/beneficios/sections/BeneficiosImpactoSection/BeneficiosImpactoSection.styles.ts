// src/components/pages/beneficios/sections/BeneficiosImpactoSection/BeneficiosImpactoSection.styles.ts

/**
 * beneficiosImpactoSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   de impacto de Beneficios.
 *
 * Información adicional:
 * - El fondo usa un gradient compuesto para acercarse
 *   al look del diseño de referencia.
 * - La estructura está pensada mobile first.
 */
export const beneficiosImpactoSectionStyles = {
  section:
    "relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),linear-gradient(90deg,#1E4E9E_0%,#263E95_34%,#452A95_68%,#6E1CAD_100%)]",

  glowLeft:
    "pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl",

  glowRight:
    "pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-300/10 blur-3xl",

  wrap: "relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24",

  header:
    "mx-auto flex max-w-3xl flex-col items-center gap-3 text-center",

  title:
    "text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.55rem]",

  subtitle: "text-sm font-semibold text-white/85 sm:text-base",

  cardsGrid:
    "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6",

  card: "flex min-h-[10rem] flex-col items-center justify-center rounded-[1.35rem] border border-white/10 bg-white/10 px-6 py-7 text-center shadow-[0_18px_60px_rgba(8,12,35,0.18)] backdrop-blur-[2px]",

  cardValue:
    "text-[2rem] font-extrabold leading-none text-white sm:text-[2.2rem]",

  cardLabel: "mt-3 text-base font-semibold leading-snug text-white",

  cardDescription: "mt-1 text-sm font-medium text-white/90",

  cardNote: "mt-1 text-xs font-medium text-white/70",

  outcomesGrid:
    "grid grid-cols-1 gap-8 pt-2 sm:grid-cols-3 sm:gap-6 lg:gap-10",

  outcomeItem: "flex flex-col items-center gap-2 text-center",

  outcomeValue: "text-3xl font-extrabold leading-none sm:text-[2.1rem]",

  outcomeValueGreen: "text-[#39E37A]",

  outcomeValueBlue: "text-[#68B8FF]",

  outcomeValuePurple: "text-[#C98BFF]",

  outcomeLabel:
    "max-w-[18rem] text-sm font-semibold leading-relaxed text-white/92 sm:text-base",
};