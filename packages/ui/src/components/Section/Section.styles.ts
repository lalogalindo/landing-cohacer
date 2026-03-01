/**
 * @file Section.styles.ts
 * @description
 * Define las clases base para el componente Section.
 * Section controla ancho máximo, centrado y espaciado vertical del layout.
 */

export const sectionStyles = {
  base: "w-full",
  container:
    "mx-auto w-full max-w-[1048px] px-4 md:px-6",
  spacing: {
    sm: "py-8",
    md: "py-12",
    lg: "py-20",
  },
  background: {
    default: "",
    muted: "bg-[oklch(var(--muted))]",
    card: "bg-[oklch(var(--card))]",
  },
} as const;

/**
 * Obtiene las clases base del contenedor Section.
 *
 * @returns {string} Clases base del wrapper externo.
 */
export function getSectionBaseClass(): string {
  return sectionStyles.base;
}

/**
 * Obtiene las clases del contenedor interno centrado.
 *
 * @returns {string} Clases del container centrado.
 */
export function getSectionContainerClass(): string {
  return sectionStyles.container;
}