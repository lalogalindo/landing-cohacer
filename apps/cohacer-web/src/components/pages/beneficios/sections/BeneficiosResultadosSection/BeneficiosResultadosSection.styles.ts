// src/components/pages/beneficios/sections/BeneficiosResultadosSection/BeneficiosResultadosSection.styles.ts

/**
 * beneficiosResultadosSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   `BeneficiosResultadosSection`.
 *
 * Información adicional:
 * - La sección usa layout mobile first.
 * - Se aprovechan tokens del sistema para superficies,
 *   texto y bordes.
 * - Los acentos visuales internos usan tonos fijos
 *   para acercarse al mockup.
 */
export const beneficiosResultadosSectionStyles = {
  section: "bg-[oklch(var(--muted))/0.28]",

  wrap: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20",

  header: "mx-auto max-w-3xl text-center",

  title:
    "text-3xl font-bold tracking-tight text-[oklch(var(--foreground))] sm:text-4xl",

  description:
    "mt-3 text-sm leading-7 text-[oklch(var(--muted-foreground))] sm:text-base",

  grid: "mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",

  card:
    "relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[oklch(var(--border))] bg-[oklch(var(--background))] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]",

  cardTopBar:
    "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f59e0b] via-[#ec4899] to-[#8b5cf6]",

  iconBadge:
    "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-[0_10px_20px_rgba(37,99,235,0.28)]",

  icon: "h-6 w-6",

  cardTitle:
    "text-[1.65rem] font-bold leading-tight tracking-tight text-[oklch(var(--foreground))]",

  cardDescription:
    "mt-4 flex-1 text-sm leading-7 text-[oklch(var(--muted-foreground))]",

  highlightBox: "mt-6 rounded-2xl px-4 py-3",

  highlightTitle: "text-sm font-semibold leading-6",

  highlightDescription: "text-xs font-medium leading-5",

  highlightGreen: "bg-[#e8f5eb]",
  highlightGreenTitle: "text-[#15803d]",
  highlightGreenDescription: "text-[#22a34f]",

  highlightBlue: "bg-[#eaf1ff]",
  highlightBlueTitle: "text-[#2563eb]",
  highlightBlueDescription: "text-[#4f78ff]",

  highlightPurple: "bg-[#f3ebff]",
  highlightPurpleTitle: "text-[#8b5cf6]",
  highlightPurpleDescription: "text-[#a855f7]",

  highlightOrange: "bg-[#fff1e7]",
  highlightOrangeTitle: "text-[#ea580c]",
  highlightOrangeDescription: "text-[#f97316]",
};