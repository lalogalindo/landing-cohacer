/**
 * investmentLeadFormStyles
 *
 * Propósito:
 * - Centralizar las clases de Tailwind de la sección unificada
 *   de inversión + formulario con layout centrado como en el mockup.
 *
 * Regresa:
 * - Objeto con clases reutilizables.
 */
export const investmentLeadFormStyles = {
  section: "home-deep",
  wrap: "mx-auto max-w-5xl px-4 py-14 md:py-20",

  header: "mx-auto flex max-w-3xl flex-col items-center text-center",
  heroTitle:
    "max-w-3xl text-balance text-3xl font-extrabold leading-tight text-white md:text-5xl",

  investmentBadge:
    "mt-5 w-full max-w-xl rounded-xl bg-white/10 px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-[2px]",
  investmentBadgeTop:
    "text-sm font-semibold text-white/95 md:text-base",
  badgeIcon: "mr-2 inline-block",
  badgeAmount: "font-extrabold text-[oklch(var(--primary))]",
  investmentBadgeBottom:
    "mt-1 text-sm font-medium text-white/85",

  formCard:
    "mx-auto mt-8 w-full max-w-4xl rounded-2xl bg-white px-5 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:px-6 md:py-7",
  formTitle:
    "text-center text-2xl font-extrabold tracking-tight text-[oklch(var(--foreground))]",

  fieldsGrid: "mt-5 grid grid-cols-1 gap-4 md:grid-cols-2",
  fieldHalf: "",
  fieldFull: "md:col-span-2",

  field: "grid gap-2",
  label: "text-sm font-semibold text-[oklch(var(--foreground))]",
  input:
    "h-11 rounded-lg border border-[oklch(var(--border))] bg-[oklch(var(--background))] px-3 text-sm text-[oklch(var(--foreground))] outline-none transition focus:ring-2 focus:ring-[oklch(var(--ring))]",
  select:
    "h-11 rounded-lg border border-[oklch(var(--border))] bg-[oklch(var(--background))] px-3 text-sm text-[oklch(var(--foreground))] outline-none transition focus:ring-2 focus:ring-[oklch(var(--ring))]",

  submitRow: "mt-5",
};