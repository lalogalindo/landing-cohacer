/**
 * mythsRealitySectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de Tailwind
 *   para la sección de mitos y realidades.
 *
 * Información adicional:
 * - Mobile first.
 * - Usa colores directos para acercarse al mockup entregado.
 * - Mantiene compatibilidad con el sistema actual basado en tokens.
 */
export const mythsRealitySectionStyles = {
  section: "bg-white py-14 md:py-20",
  wrap: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",

  header: "mx-auto mb-10 max-w-3xl text-center",
  title:
    "text-3xl font-bold tracking-tight text-[oklch(var(--foreground))] sm:text-4xl",
  subtitle:
    "mt-3 text-sm leading-7 text-[oklch(var(--muted-foreground))] sm:text-base",

  list: "space-y-6",

  row: "grid grid-cols-1 gap-5 md:grid-cols-2",

  cardHeader: "flex items-start gap-3",
  mythCard:
    "rounded-2xl border border-[#f3c6cc] border-l-4 border-l-[#ff5a66] bg-[#fff7f7] p-5 shadow-sm",
  realityCard:
    "rounded-2xl border border-[#c9ead7] border-l-4 border-l-[#34c77b] bg-[#f3fff7] p-5 shadow-sm",

  mythIcon:
    "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center text-lg font-bold text-[#ff5a66]",
  realityIcon:
    "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center text-base font-bold text-[#22a861]",

  mythTitle: "text-lg font-extrabold leading-6 text-[#d83d4e]",
  realityTitle: "text-lg font-extrabold leading-6 text-[#1d8d57]",

  mythDescription: "mt-4 text-sm leading-7 text-[#d85b67] sm:text-base",
  realityDescription: "mt-4 text-sm leading-7 text-[#27895b] sm:text-base",

  realityHighlight:
    "mt-5 rounded-xl bg-[#dcf7e5] px-4 py-3 text-sm leading-6 text-[#2d7f57]",
} as const;