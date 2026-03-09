// src/components/pages/home/sections/EligibilitySection/EligibilitySection.styles.ts

/**
 * eligibilityStyles
 *
 * Propósito:
 * - Centralizar clases de Tailwind del bloque Eligibility.
 * - Replicar el layout visual del mockup con:
 *   - fondo gris claro
 *   - encabezado centrado
 *   - badges visuales
 *   - cards blancas con sombra suave
 *   - ícono circular superior
 *
 * Regresa:
 * - Objeto con clases reutilizables.
 */
export const eligibilityStyles = {
  section: "bg-[#f9fafb]",
  wrap: "mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20",
  header: "mx-auto max-w-4xl text-center",
  title:
    "text-[2rem] font-extrabold leading-tight tracking-tight text-[oklch(var(--foreground))] md:text-[2.5rem]",
  subtitle:
    "mt-10 text-xl font-medium leading-relaxed text-[oklch(var(--foreground))]/75 md:text-[1.75rem]",
  badges: "mt-6 flex flex-wrap items-center justify-center gap-4",
  badge:
    "inline-flex min-h-10 items-center justify-center rounded-md px-5 py-2 text-sm font-bold uppercase tracking-tight shadow-sm",
  badgeGreen: "bg-[#1f7a3f] text-white",
  badgeBlue: "bg-[#2348b8] text-white",
  badgeNeutral:
    "border border-[oklch(var(--border))] bg-[oklch(var(--background))] text-[oklch(var(--foreground))]",
  grid: "mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
  card:
    "flex min-h-[175px] flex-col items-center rounded-2xl border border-black/5 bg-white px-6 pb-6 pt-7 text-center shadow-[0_8px_24px_rgba(15,23,42,0.08)]",
  iconWrap:
    "mb-5 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-sm",
  iconBlue: "bg-[#4f8df7]",
  iconGreen: "bg-[#22c55e]",
  iconPurple: "bg-[#a855f7]",
  iconSvg: "h-6 w-6 fill-current",
  iconText: "text-xl font-extrabold leading-none",
  cardTitle:
    "text-lg font-bold leading-snug tracking-tight text-[#2b2f3a] md:text-xl",
  cardDesc:
    "mt-3 max-w-[18ch] text-[1rem] leading-relaxed text-[#6b7280] md:text-[1.02rem]",
  badgeSeparator:
    "mx-2 text-lg font-bold text-[oklch(var(--foreground))]/70",
};