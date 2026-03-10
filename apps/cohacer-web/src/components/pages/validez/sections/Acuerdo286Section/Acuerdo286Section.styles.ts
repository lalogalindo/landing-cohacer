/**
 * acuerdo286SectionStyles
 *
 * Propósito:
 * - Centralizar las clases Tailwind de la sección Acuerdo 286.
 *
 * Información adicional:
 * - Mobile first.
 * - Usa colores directos para aproximar el mockup compartido.
 * - El fondo general de la sección usa `#e5ebf2`.
 */
export const acuerdo286SectionStyles = {
  section:
    "bg-[#ffffff] px-4 py-14 sm:px-6 sm:py-16 lg:px-8",

  wrap:
    "mx-auto w-full max-w-7xl",

  header:
    "mb-8 text-center sm:mb-10",

  title:
    "text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",

  grid:
    "grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8",

  documentCard:
    "rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:p-8",

  documentCardTitle:
    "mb-6 text-2xl font-bold text-slate-800",

  documentBody:
    "rounded-2xl bg-[#f8fafc] p-5 sm:p-6",

  documentEyebrow:
    "mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500",

  documentTitle:
    "mb-4 text-xl font-bold leading-snug text-slate-800 sm:text-2xl",

  documentDescription:
    "text-sm leading-7 text-slate-700 sm:text-[15px]",

  documentFootnote:
    "mt-5 text-sm text-slate-500",

  highlights:
    "mt-6 space-y-4",

  highlightItem:
    "flex items-start gap-3",

  highlightNumber:
    "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white",

  highlightText:
    "text-sm leading-6 text-slate-700 sm:text-[15px]",

  sidebar:
    "flex flex-col",

  sidebarTitle:
    "mb-5 text-2xl font-bold text-slate-800",

  infoBlocks:
    "space-y-4",

  infoBlock:
    "rounded-2xl p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]",

  infoBlockBlue:
    "bg-[#dfe9f7]",

  infoBlockGreen:
    "bg-[#e3f0e8]",

  infoBlockPurple:
    "bg-[#efe6f7]",

  infoBlockTitle:
    "mb-3 flex items-center gap-2 text-base font-bold text-slate-800",

  infoBlockIcon:
    "inline-flex h-5 w-5 items-center justify-center text-sm",

  infoBlockList:
    "space-y-2 pl-4",

  infoBlockListItem:
    "list-disc text-sm leading-6 text-slate-700 sm:text-[15px]",
} as const;