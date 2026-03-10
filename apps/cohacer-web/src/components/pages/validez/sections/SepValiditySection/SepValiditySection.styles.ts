/**
 * sepValiditySectionStyles
 *
 * Propósito:
 * - Centralizar las clases Tailwind del bloque "Validez Oficial SEP".
 * - Replicar el layout visual del mockup con:
 *   - fondo blanco
 *   - contenido centrado
 *   - círculo verde superior con texto SEP
 *   - título grande
 *   - descripción centrada
 *   - tarjeta inferior verde suave con ícono de validación
 *
 * Regresa:
 * - Objeto con clases reutilizables.
 */
export const sepValiditySectionStyles = {
  section: "bg-[#e5ebf2]",
  wrap: "mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20",
  header: "mx-auto max-w-4xl text-center",
  badge:
    "mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#16a34a] text-2xl font-extrabold tracking-tight text-white shadow-[0_10px_30px_rgba(22,163,74,0.22)] md:h-28 md:w-28 md:text-[1.75rem]",
  title:
    "mt-8 text-[2.25rem] font-extrabold leading-tight tracking-tight text-[oklch(var(--foreground))] md:text-[3.5rem]",
  description:
    "mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[oklch(var(--foreground))]/75 md:text-xl",
  features:
    "mx-auto mt-10 flex max-w-3xl flex-col gap-4",
  featureCard:
    "flex items-center justify-center gap-3 rounded-2xl border border-[#b7e4c7] bg-[#eaf8ef] px-5 py-5 text-center shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:px-6",
  featureIcon:
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-sm font-bold text-white",
  featureLabel:
    "text-base font-semibold leading-relaxed text-[#1f7a3f] md:text-lg",
} as const;