// src/components/pages/beneficios/sections/BeneficiosTransformacionSection/BeneficiosTransformacionSection.styles.ts

/**
 * beneficiosTransformacionSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   comparativa de transformación profesional.
 *
 * Información adicional:
 * - El layout es mobile first.
 * - En mobile las tarjetas se apilan.
 * - En desktop se muestran lado a lado.
 */
export const beneficiosTransformacionSectionStyles = {
  section: "bg-white px-4 py-10 sm:py-14 lg:py-16",

  wrap: "mx-auto max-w-6xl",

  title:
    "text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",

  panel:
    "mt-8 rounded-[18px] border border-[oklch(var(--border))] bg-[#F5E49A] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8",

  grid: "grid gap-5 md:grid-cols-2 md:items-stretch",

  card: "rounded-2xl border p-5 shadow-sm sm:p-6 h-full",

  cardBefore: "border-[#F2C3CC] bg-[#FFF3F6]",

  cardAfter: "border-[#B8EFD7] bg-[#EEFDF5]",

  cardTitleBefore:
    "flex items-center gap-2 text-lg font-bold text-[#C53F4F] sm:text-[1.375rem]",

  cardTitleAfter:
    "flex items-center gap-2 text-lg font-bold text-[#1F7C54] sm:text-[1.375rem]",

  list: "mt-5 grid gap-3",

  listItem:
    "flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-[15px]",

  itemIconBase:
    "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-xs font-bold",

  itemIconBefore: "text-[#E75A77]",

  itemIconAfter: "text-[#28B56C]",
};