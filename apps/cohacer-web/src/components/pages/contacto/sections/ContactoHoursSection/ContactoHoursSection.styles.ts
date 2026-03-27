// src/components/pages/contacto/sections/ContactoHoursSection/ContactoHoursSection.styles.ts

/**
 * contactoHoursSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de Tailwind
 *   para la sección de horarios de atención.
 */
export const contactoHoursSectionStyles = {
  section: "bg-white py-16 sm:py-20",
  wrap: "mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8",
  header: "flex justify-center",
  title:
    "text-center text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl",
  grid: "grid grid-cols-1 gap-6 md:grid-cols-2",
  card: [
    "flex h-full flex-col rounded-[18px] border border-[#f3e8b8]",
    "bg-[#efd984] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "sm:p-7"
  ].join(" "),
  cardTitle: "text-xl font-extrabold text-[#0f172a] sm:text-[1.75rem]",
  items: "mt-6 flex flex-col gap-4",
  itemRow: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4",
  itemLabel: "text-sm font-semibold text-[#5b6473] sm:text-base",
  itemValue: "text-right text-sm font-extrabold sm:text-base",
  itemValueDefault: "text-[#0f172a]",
  itemValueSuccess: "text-[#22c55e]",
  itemValueAccent:
    "bg-gradient-to-r from-[#a855f7] to-[#f97316] bg-clip-text text-transparent",
  itemValueMuted: "text-[#8b95a7]",
  noteBox: "mt-6 rounded-[14px] bg-[#f8f1d5] px-4 py-4",
  noteText: "text-sm leading-6 text-[#5b6473]",
  noteStrong: "font-extrabold text-[#334155]"
};