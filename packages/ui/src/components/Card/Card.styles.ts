/**
 * @file Card.styles.ts
 * @description
 * Define las clases base (Tailwind v4) para los componentes Card usando tokens CSS (OKLCH).
 * No contiene lógica de negocio: solo estilos reutilizables.
 */

export const cardStyles = {
  root:
    "rounded-xl border border-[oklch(var(--border))] bg-[oklch(var(--card))] text-[oklch(var(--card-foreground))] shadow-sm",
  header: "flex flex-col gap-1.5 p-6",
  title: "text-base font-semibold leading-tight tracking-tight",
  description: "text-sm text-[oklch(var(--muted-foreground))]",
  content: "p-6 pt-0",
  footer: "flex items-center gap-2 p-6 pt-0",
} as const;

/**
 * Devuelve las clases para el contenedor principal del Card.
 *
 * @returns {string} Clases base del contenedor principal del Card.
 */
export function getCardRootClass(): string {
  return cardStyles.root;
}

/**
 * Devuelve las clases para el header del Card.
 *
 * @returns {string} Clases base del header del Card.
 */
export function getCardHeaderClass(): string {
  return cardStyles.header;
}

/**
 * Devuelve las clases para el título del Card.
 *
 * @returns {string} Clases base del título del Card.
 */
export function getCardTitleClass(): string {
  return cardStyles.title;
}

/**
 * Devuelve las clases para la descripción del Card.
 *
 * @returns {string} Clases base de la descripción del Card.
 */
export function getCardDescriptionClass(): string {
  return cardStyles.description;
}

/**
 * Devuelve las clases para el contenido del Card.
 *
 * @returns {string} Clases base del contenido del Card.
 */
export function getCardContentClass(): string {
  return cardStyles.content;
}

/**
 * Devuelve las clases para el footer del Card.
 *
 * @returns {string} Clases base del footer del Card.
 */
export function getCardFooterClass(): string {
  return cardStyles.footer;
}