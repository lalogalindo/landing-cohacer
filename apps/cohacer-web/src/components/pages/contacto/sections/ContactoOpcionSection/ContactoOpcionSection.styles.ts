// src/components/pages/contacto/sections/ContactoOpcionSection/ContactoOpcionSection.styles.ts

/**
 * contactoOpcionSectionStyles
 *
 * Propósito:
 * - Centralizar las clases de estilo de la sección
 *   `ContactoOpcionSection`.
 */
export const contactoOpcionSectionStyles = {
  section: "bg-[#f8fafc] py-16 sm:py-20 lg:py-24",
  wrap: "mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8",
  header: "mx-auto flex max-w-3xl flex-col items-center gap-3 text-center",
  title:
    "text-3xl font-black tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-5xl",
  subtitle:
    "max-w-2xl text-base leading-7 text-slate-500 sm:text-lg",
  grid: "grid grid-cols-1 gap-6 lg:grid-cols-3",
  card:
    "flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-8 justify-between",
  iconCircle:
    "mx-auto flex h-18 w-18 items-center justify-center rounded-full shadow-[0_14px_32px_rgba(15,23,42,0.16)]",
  iconCircleWhatsapp:
    "bg-gradient-to-br from-[#22c55e] via-[#22c55e] to-[#14b8a6]",
  iconCirclePhone:
    "bg-gradient-to-br from-[#f59e0b] via-[#f59e0b] to-[#f97316]",
  iconCircleEmail:
    "bg-gradient-to-br from-[#3b82f6] via-[#3b82f6] to-[#2563eb]",
  iconInner: "text-[1.375rem] text-white",
  cardTitle: "mt-6 text-2xl font-bold text-slate-900",
  cardDescription:
    "mt-4 text-sm leading-7 text-slate-500 sm:text-base",
  contact: "mt-6 text-lg font-extrabold",
  contactWhatsapp: "text-[#16a34a]",
  contactPhone: "text-[#f97316]",
  contactEmail: "text-[#2563eb]",
  availability:
    "mt-2 whitespace-pre-line text-sm leading-6 text-slate-500",
  cta:
    "mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5",
  ctaWhatsapp:
    "bg-gradient-to-r from-[#22c55e] to-[#14b8a6] shadow-[0_12px_24px_rgba(34,197,94,0.24)]",
  ctaPhone:
    "bg-gradient-to-r from-[#f59e0b] to-[#f97316] shadow-[0_12px_24px_rgba(249,115,22,0.24)]",
  ctaEmail:
    "bg-gradient-to-r from-[#3b82f6] to-[#2563eb] shadow-[0_12px_24px_rgba(37,99,235,0.24)]",
} as const;