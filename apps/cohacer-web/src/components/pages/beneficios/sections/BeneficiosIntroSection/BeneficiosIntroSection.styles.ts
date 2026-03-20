/**
 * beneficiosIntroSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de Tailwind
 *   para la sección inicial de Beneficios.
 *
 * Información adicional:
 * - El layout es mobile first.
 * - En mobile las métricas se apilan en una sola columna.
 * - En desktop se muestran en tres columnas.
 */
export const beneficiosIntroSectionStyles = {
  section:
    "bg-[linear-gradient(90deg,#2563eb_0%,#0ea5e9_100%)]",
  wrap:
    "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16",
  header:
    "mx-auto max-w-4xl text-center",
  title:
    "text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl",
  description:
    "mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:text-base",
  metricsGrid:
    "mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-5",
  metricCard:
    "rounded-xl border border-black/10 bg-white/95 px-5 py-5 text-center shadow-[0_12px_28px_rgba(0,0,0,0.14)] backdrop-blur-sm",
  metricValue:
    "text-3xl font-extrabold leading-none sm:text-4xl",
  metricValueBlue:
    "text-[#2563eb]",
  metricValueGreen:
    "text-[#16a34a]",
  metricValuePurple:
    "text-[#a855f7]",
  metricLabel:
    "mt-3 text-sm font-medium leading-5 text-slate-700",
} as const;