/**
 * processStepsStyles
 *
 * Propósito:
 * - Centralizar clases de Tailwind para la sección de pasos,
 *   replicando el look visual del mockup de referencia.
 *
 * Regresa:
 * - Objeto con clases reutilizables para layout y apariencia.
 *
 * Información adicional:
 * - El fondo de la sección usa #eff6ff.
 * - Los tonos de acento son:
 *   - azul: #3b82f6
 *   - verde: #22c55e
 *   - morado: #a855f7
 */
export const processStepsStyles = {
  section: "bg-[#eff6ff]",
  wrap: "mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16",
  header: "mx-auto max-w-4xl text-center",
  title: "text-3xl font-bold tracking-tight text-slate-900 md:text-4xl",
  subtitle: "mt-3 text-sm leading-relaxed text-slate-600 md:text-base",
  grid: "mt-10 grid gap-5 md:grid-cols-3",
  card:
    "rounded-xl bg-white px-6 py-7 text-center shadow-[0_6px_18px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70",
  num: "mx-auto flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white",
  numBlue: "bg-[#3b82f6]",
  numGreen: "bg-[#22c55e]",
  numPurple: "bg-[#a855f7]",
  cardTitle: "mt-5 text-2xl font-bold leading-tight text-slate-900",
  desc: "mx-auto mt-4 max-w-[260px] text-sm leading-6 text-slate-600",
  accent: "mt-5 text-sm font-semibold uppercase tracking-tight",
  accentBlue: "text-[#3b82f6]",
  accentGreen: "text-[#22c55e]",
  accentPurple: "text-[#a855f7]",
};