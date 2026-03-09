/**
 * benefitsGridStyles
 *
 * Propósito:
 * - Centralizar clases de Tailwind de la sección
 *   Benefits Grid con layout visual similar al mockup final.
 *
 * Regresa:
 * - Objeto con clases reutilizables.
 */
export const benefitsGridStyles = {
  section: "bg-[oklch(var(--background))]",
  wrap: "mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20",
  header: "mx-auto max-w-4xl text-center",
  title:
    "text-balance text-3xl font-bold tracking-tight text-[oklch(var(--foreground))] md:text-4xl",
  subtitle:
    "mx-auto mt-3 max-w-2xl text-pretty text-sm leading-6 text-[oklch(var(--muted-foreground))] md:text-base",
  grid:
    "mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10",
  item: "flex flex-col items-center text-center",
  iconCircle:
    "inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm md:h-18 md:w-18",
  icon: "text-xl md:text-2xl",
  cardTitle:
    "mt-5 text-lg font-bold leading-tight text-[oklch(var(--foreground))]",
  cardDesc:
    "mt-2 max-w-[15rem] text-sm leading-6 text-[oklch(var(--muted-foreground))]",
};