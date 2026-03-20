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
 * - En mobile la transformación aparece entre ambas tarjetas.
 * - En desktop se mueve a la columna derecha.
 */
export const beneficiosTransformacionSectionStyles = {
  section: "bg-white px-4 py-10 sm:py-14 lg:py-16",

  wrap: "mx-auto max-w-6xl",

  title:
    "text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",

  panel:
    "mt-8 rounded-[18px] border border-[oklch(var(--border))] bg-[#F5E49A] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8",

  grid: "grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-center",

  cardsColumn: "grid gap-5",

  card: "rounded-2xl border p-5 shadow-sm sm:p-6",

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

  mobileTransformation:
    "flex flex-col items-center justify-center gap-3 py-2 lg:hidden",

  desktopTransformation:
    "hidden lg:flex lg:min-h-full lg:flex-col lg:items-center lg:justify-center lg:gap-3",

  transformationIcon:
    "flex h-12 w-12 items-center justify-center rounded-xl bg-[#60A5FA] shadow-sm sm:h-14 sm:w-14",

  transformationIconGlyph: "text-xl text-white sm:text-2xl",

  transformationLabel:
    "text-center text-sm font-extrabold uppercase tracking-[0.08em] text-[#2563EB] sm:text-base",
};