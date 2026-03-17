// src/components/pages/inversion/sections/InversionCTASection/InversionCTASection.styles.ts

/**
 * inversionCTASectionStyles
 *
 * Propósito:
 * - Centralizar las clases de estilo de la sección
 *   CTA de la página Inversión.
 *
 * Información adicional:
 * - El bloque usa fondo azul sólido con botones
 *   visualmente cercanos al mockup.
 * - Se usan overrides con `!` para evitar que
 *   las variantes base del Button rompan el diseño.
 */
export const inversionCTASectionStyles = {
  section: "bg-[#1d46b8] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14",
  wrap: "mx-auto flex w-full max-w-5xl flex-col items-center text-center",
  title:
    "max-w-4xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.15rem]",
  description:
    "mt-4 max-w-3xl text-sm font-medium leading-6 text-white/85 sm:text-base",
  actions:
    "mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center",
  primaryButton:
    "!min-w-[220px] !rounded-md !border !border-[#f97316] !bg-[#f97316] !px-6 !py-3 !text-center !text-sm !font-bold !text-white !shadow-none transition hover:!bg-[#ea6a10] focus-visible:!ring-2 focus-visible:!ring-white/60",
  secondaryButton:
    "!min-w-[220px] !rounded-md !border !border-[#dbe4ff] !bg-white !px-6 !py-3 !text-center !text-sm !font-bold !text-[#1d46b8] !shadow-none transition hover:!bg-[#f4f7ff] focus-visible:!ring-2 focus-visible:!ring-white/60",
} as const;