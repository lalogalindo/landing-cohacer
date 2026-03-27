// src/components/pages/contacto/sections/ContactoFAQSection/ContactoFAQSection.styles.ts

/**
 * contactoFAQSectionStyles
 *
 * Propósito:
 * - Centralizar las clases visuales de la sección
 *   FAQ de la página Contacto.
 *
 * Información adicional:
 * - Mantiene enfoque mobile first.
 * - Usa tokens del sistema de diseño.
 */
export const contactoFAQSectionStyles = {
  section:
    "bg-[oklch(var(--muted))/0.35] py-16 sm:py-20 lg:py-24",

  wrap:
    "mx-auto flex w-full max-w-5xl flex-col px-4 sm:px-6 lg:px-8",

  header:
    "mx-auto mb-8 max-w-2xl text-center sm:mb-10",

  title:
    "text-3xl font-bold tracking-tight text-[oklch(var(--foreground))] sm:text-4xl",

  description:
    "mt-3 text-sm leading-6 text-[oklch(var(--muted-foreground))] sm:text-base",

  list:
    "flex flex-col gap-4",

  item:
    "overflow-hidden rounded-2xl border border-[oklch(var(--border))] bg-[oklch(var(--card))] shadow-[0_8px_24px_rgba(15,23,42,0.06)]",

  trigger:
    "flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-[oklch(var(--muted))/0.35] sm:px-6",

  triggerOpen:
    "border-b border-[oklch(var(--border))]",

  question:
    "text-sm font-semibold leading-6 text-[oklch(var(--foreground))] sm:text-base",

  iconWrap:
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[oklch(var(--primary))/0.08] text-[#0055a9]",

  icon:
    "text-sm",

  contentOuter:
    "grid transition-[grid-template-rows,opacity] duration-300 ease-out",

  contentClosed:
    "grid-rows-[0fr] opacity-0",

  contentOpen:
    "grid-rows-[1fr] opacity-100",

  contentInner:
    "overflow-hidden",

  answer:
    "px-5 pb-5 pt-4 text-sm leading-7 text-[oklch(var(--muted-foreground))] sm:px-6",
} as const;