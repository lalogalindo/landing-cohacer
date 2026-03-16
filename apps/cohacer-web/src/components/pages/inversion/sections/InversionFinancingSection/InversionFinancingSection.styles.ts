/**
 * inversionFinancingSectionStyles
 *
 * Propósito:
 * - Centralizar los estilos visuales de la sección
 *   de opciones de financiamiento.
 *
 * Información adicional:
 * - Se usa layout mobile-first.
 * - El fondo de la sección es blanco.
 * - El botón se pinta con el azul solicitado
 *   del mockup.
 */
export const inversionFinancingSectionStyles = {
  section: "bg-[#ffffff] py-16 sm:py-20",

  wrap: "mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8",

  header: "flex justify-center text-center",

  title: "max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",

  grid: "grid grid-cols-1 gap-6 md:grid-cols-2",

  card: "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",

  cardHeader: "mb-6 flex items-center gap-4",

  iconWrapBase:
    "flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white",

  iconBlue: "bg-[#3b82f6]",
  iconGreen: "bg-[#22c55e]",
  iconPurple: "bg-[#a855f7]",
  iconOrange: "bg-[#f97316]",

  cardTitle: "text-2xl font-semibold tracking-tight text-slate-900",

  list: "space-y-3",

  listItem: "flex items-start gap-2 text-lg leading-7 text-slate-600",

  bullet: "mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500",

  ctaWrap: "flex justify-center pt-2",

  ctaButton:
    "min-w-26 rounded-xl !bg-[#3b82f6] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#2563eb]",
} as const;