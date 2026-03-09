/**
 * testimonialsGridStyles
 *
 * Propósito:
 * - Centralizar clases Tailwind del bloque de testimonios en formato grid,
 *   replicando el look visual del mockup de referencia.
 *
 * Regresa:
 * - Objeto con clases reutilizables para la sección.
 */
export const testimonialsGridStyles = {
  section: "bg-white",
  wrap: "mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16",
  header: "mx-auto max-w-3xl text-center",
  title: "text-2xl font-bold tracking-tight text-slate-900 md:text-3xl",
  subtitle: "mt-3 text-sm leading-relaxed text-slate-500 md:text-base",
  grid: "mt-10 grid gap-5 md:grid-cols-3",
  card:
    "rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)]",
  topRow: "flex items-start gap-3",
  avatar:
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white",
  avatarBlue: "bg-[#3b82f6]",
  avatarGreen: "bg-[#22c55e]",
  avatarPurple: "bg-[#a855f7]",
  personBlock: "min-w-0 pt-0.5",
  name: "text-sm font-semibold leading-none text-slate-900",
  role: "mt-1 text-xs leading-snug text-slate-500",
  quote: "mt-4 text-sm italic leading-relaxed text-slate-600",
  highlight: "mt-5 text-sm font-semibold text-[#22c55e]",
};