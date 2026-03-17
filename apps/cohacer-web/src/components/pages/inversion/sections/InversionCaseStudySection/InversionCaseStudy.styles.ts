/**
 * inversionCaseStudyStyles
 *
 * Propósito:
 * - Centralizar los estilos de la sección
 *   InversionCaseStudy.
 *
 * Información adicional:
 * - Se sigue un enfoque mobile-first.
 * - La tarjeta usa un acento lateral verde y un layout
 *   muy cercano al mockup compartido.
 */
export const inversionCaseStudyStyles = {
  section: "bg-[#f3f4f6] py-16 sm:py-20",
  wrap: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  header: "mx-auto max-w-4xl",
  title:
    "text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",
  grid: "mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
  card: "relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)]",
  cardAccent: "absolute inset-y-0 left-0 w-1 bg-emerald-400",
  personRow: "flex items-center gap-3",
  avatar:
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white",
  personInfo: "min-w-0",
  personName: "text-base font-semibold leading-tight text-slate-900",
  personRole: "mt-0.5 text-sm leading-5 text-slate-600",
  stats: "mt-5 space-y-2",
  statRow: "flex items-start justify-between gap-4",
  statLabel: "text-sm leading-6 text-slate-600",
  statValue: "text-right text-sm font-semibold leading-6 text-slate-900",
  statValueHighlight:
    "text-right text-sm font-semibold leading-6 text-emerald-500",
  quote:
    "mt-5 border-t border-slate-100 pt-4 text-sm italic leading-7 text-slate-500",
} as const;