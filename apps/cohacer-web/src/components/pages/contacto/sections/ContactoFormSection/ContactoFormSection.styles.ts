// src/components/pages/contacto/sections/ContactoFormSection/ContactoFormSection.styles.ts

/**
 * contactoFormSectionStyles
 *
 * Propósito:
 * - Centralizar las clases visuales de la sección
 *   `ContactoFormSection`.
 *
 * Información adicional:
 * - Mantiene layout mobile first.
 * - Replica el card blanco con borde superior en gradiente.
 * - Usa colores específicos del mock para preservar fidelidad visual.
 */
export const contactoFormSectionStyles = {
  section: "bg-[#f3f4f6] px-4 py-16 sm:py-20",
  wrap: "mx-auto max-w-5xl",
  header: "mx-auto max-w-3xl text-center",
  title: "text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl",
  description:
    "mt-4 text-base leading-7 text-[#6b7280] sm:text-lg",
  card:
    "relative mt-10 overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[linear-gradient(90deg,#f59e0b_0%,#f97316_28%,#ec4899_64%,#8b5cf6_100%)] sm:p-8",
  form: "grid grid-cols-1 gap-5 md:grid-cols-2",
  fullWidth: "md:col-span-2",
  fieldWrapper: "flex flex-col gap-2",
  label: "text-sm font-semibold text-[#4b5563]",
  requiredMark: "text-[#f97316]",
  input:
    "h-12 w-full rounded-xl border border-[#d1d5db] bg-white px-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#f97316] focus:ring-4 focus:ring-[#fdba74]/35",
  select:
    "h-12 w-full rounded-xl border border-[#d1d5db] bg-white px-4 text-sm text-[#111827] outline-none transition focus:border-[#f97316] focus:ring-4 focus:ring-[#fdba74]/35",
  textarea:
    "min-h-[140px] w-full rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#f97316] focus:ring-4 focus:ring-[#fdba74]/35",
  checkboxRow: "flex items-start gap-3",
  checkbox:
    "mt-1 h-4 w-4 rounded border-[#d1d5db] text-[#f97316] focus:ring-[#fdba74]",
  checkboxLabel: "text-sm leading-6 text-[#6b7280]",
  checkboxLink:
    "font-semibold text-[#2563eb] underline-offset-2 hover:text-[#1d4ed8] hover:underline",
  actions: "md:col-span-2 mt-2 flex flex-col items-center gap-4",
  submitButton:
    "inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#f97316] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#ea580c] focus:outline-none focus:ring-4 focus:ring-[#fdba74]/40 sm:w-auto sm:min-w-[300px]",
  disclaimer: "text-center text-xs font-medium text-[#9ca3af]",
} as const;