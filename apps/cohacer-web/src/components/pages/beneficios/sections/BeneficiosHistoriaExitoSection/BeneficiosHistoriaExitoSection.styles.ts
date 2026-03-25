// src/components/pages/beneficios/sections/BeneficiosHistoriaExitoSection/BeneficiosHistoriaExitoSection.styles.ts

/**
 * beneficiosHistoriaExitoSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de Tailwind
 *   para la sección de HistoriaExito de Beneficios.
 *
 * Información adicional:
 * - La sección está pensada mobile first.
 * - Se replica un bloque visual de cierre con
 *   jerarquía clara, card suave y CTAs destacados.
 */
export const beneficiosHistoriaExitoSectionStyles = {
  section:
    "bg-white py-16 sm:py-20 lg:py-24",

  wrap:
    "mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8",

  header:
    "mx-auto flex max-w-4xl flex-col items-center text-center",

  title:
    "max-w-3xl text-balance text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0f172a] sm:text-4xl lg:text-5xl",

  description:
    "mt-4 max-w-3xl text-pretty text-sm leading-7 text-[#475569] sm:text-base lg:text-lg",

  card:
    "mt-8 rounded-[1.5rem] border border-[#dbe7ff] bg-[#eef4ff] px-5 py-6 shadow-[0_24px_70px_-50px_rgba(59,130,246,0.55)] sm:mt-10 sm:px-8 sm:py-8 lg:px-10 lg:py-9",

  cardHeader:
    "flex flex-col items-center justify-center gap-3 text-center",

  cardIcon:
    "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-[0_10px_30px_-20px_rgba(15,23,42,0.45)]",

  cardTitle:
    "text-2xl font-bold leading-tight text-[#1d4ed8] sm:text-[1.75rem]",

  cardDescription:
    "mt-4 mx-auto max-w-3xl text-center text-sm leading-7 text-[#1e3a8a] sm:text-base",

  actions:
    "mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center",

  primaryAction:
    "inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#f97316] px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#ea580c] sm:w-auto sm:min-w-64",

  secondaryAction:
    "inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#3b82f6] px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#2563eb] sm:w-auto sm:min-w-64",

  guarantee:
    "mt-6 flex flex-col items-center text-center sm:mt-7",

  guaranteeText:
    "text-sm leading-7 text-[#334155] sm:text-base",

  guaranteeLabel:
    "font-semibold text-[#0f172a]",

  trustList:
    "mt-4 flex list-none flex-col items-center gap-3 p-0 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3",

  trustPoint:
    "inline-flex items-center gap-2 text-xs font-medium text-[#475569] sm:text-sm",

  trustPointIcon:
    "inline-flex h-4 w-4 items-center justify-center rounded-[0.25rem] bg-[#dcfce7] text-[11px] font-bold text-[#16a34a]",

  trustPointText:
    "whitespace-nowrap",
} as const;