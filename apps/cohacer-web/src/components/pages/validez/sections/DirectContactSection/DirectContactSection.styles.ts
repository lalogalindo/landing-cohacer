/**
 * directContactSectionStyles
 *
 * Propósito:
 * - Centralizar las clases Tailwind de la sección
 *   CTA de contacto directo.
 *
 * Información adicional:
 * - Mobile first.
 * - Usa fondo azul sólido y dos botones contrastantes
 *   como en la referencia visual.
 */
export const directContactSectionStyles = {
  section:
    "home-deep px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14",

  wrap: "mx-auto flex max-w-5xl flex-col items-center text-center",

  title:
    "max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl",

  description:
    "mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:text-base",

  actions:
    "mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4",

  primaryButton:
    "inline-flex min-h-12 min-w-[220px] items-center justify-center rounded-lg bg-[#ff7a1a] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#2249b7]",

  secondaryButton:
    "inline-flex min-h-12 min-w-[220px] items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#24409a] shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#2249b7]",
};