/**
 * inversionPricingSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   de planes de inversión.
 *
 * Información adicional:
 * - Esta versión usa colores fijos del mockup
 *   para respetar el look visual exacto.
 */
export const inversionPricingSectionStyles = {
  section: "bg-[#eff6ff] px-4 py-14 sm:px-6 lg:px-8 lg:py-20",

  wrap: "mx-auto flex w-full max-w-7xl flex-col gap-8",

  header: "flex flex-col items-center gap-3 text-center",

  title: "text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl",

  subtitle: "max-w-2xl text-sm leading-6 text-[#6b7280] sm:text-base",

  grid: "grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch",

  card:
    "relative overflow-hidden rounded-2xl border bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-transform duration-200 hover:-translate-y-1",

  cardPopular:
    "border-[#f59e0b] shadow-[0_10px_28px_rgba(245,158,11,0.18)] md:-translate-y-1",

  cardBlue: "border-[#e5e7eb]",

  cardOrange: "border-2 border-[#f59e0b]",

  cardPurple: "border-[#e5e7eb]",

  badge:
    "bg-[#f59e0b] px-4 py-2 text-center text-[11px] font-extrabold uppercase tracking-[0.05em] text-white",

  cardBody: "flex flex-col gap-6 px-6 py-7",

  cardHeader: "flex flex-col items-center gap-2 text-center",

  planName: "text-[2rem] font-extrabold tracking-tight text-[#1f2937]",

  price: "text-[2.2rem] font-extrabold tracking-tight leading-none",

  priceBlue: "text-[#3b82f6]",

  priceOrange: "text-[#f97316]",

  pricePurple: "text-[#a855f7]",

  paymentNote: "min-h-10 text-sm leading-5 text-[#6b7280]",

  featureList: "flex flex-1 flex-col gap-3",

  featureItem: "flex items-start gap-3 text-sm leading-6 text-[#1f2937]",

  featureIcon:
    "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#22c55e]",

  actions: "pt-2",

  buttonBase:
    "inline-flex min-h-12 w-full items-center justify-center rounded-lg px-5 text-sm font-bold text-white transition-opacity duration-200 hover:opacity-90",

  buttonBlue: "bg-[#3b82f6]",

  buttonOrange: "bg-[#f97316]",

  buttonPurple: "bg-[#a855f7]",
} as const;