// src/components/pages/home/sections/LeadFormSection/LeadFormSection.styles.ts

/**
 * leadFormStyles
 *
 * Propósito:
 * - Centralizar clases de Tailwind del formulario del Home.
 *
 * Regresa:
 * - Objeto con clases reutilizables.
 */
export const leadFormStyles = {
  section: "home-deep",
  wrap: "mx-auto max-w-6xl px-4 py-14",
  grid: "grid gap-6 md:grid-cols-2 md:items-start",
  left: "",
  title: "text-2xl font-semibold tracking-tight md:text-3xl",
  subtitle: "mt-3 text-sm text-white/85 md:text-base",
  card: "home-card p-6",
  field: "grid gap-2",
  label: "text-sm font-medium",
  input:
    "h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-[oklch(var(--ring))]",
  select:
    "h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-[oklch(var(--ring))]",
  submitRow: "mt-4",
  privacy: "mt-3 text-xs text-muted-foreground leading-relaxed",
  link: "underline underline-offset-4",
};