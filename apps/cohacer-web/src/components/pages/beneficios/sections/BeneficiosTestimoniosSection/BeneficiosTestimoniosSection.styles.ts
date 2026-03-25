// src/components/pages/beneficios/sections/BeneficiosTestimoniosSection/BeneficiosTestimoniosSection.styles.ts

/**
 * beneficiosTestimoniosSectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de Tailwind
 *   para la sección de testimonios de Beneficios.
 */
export const beneficiosTestimoniosSectionStyles = {
  section: "bg-[#eef4fb] py-16 md:py-20",
  wrap: "mx-auto w-full max-w-7xl px-4 md:px-6",
  header: "mx-auto max-w-3xl text-center",
  title:
    "text-3xl font-bold tracking-tight text-[oklch(var(--foreground))] md:text-4xl",
  description:
    "mt-4 text-base leading-7 text-[oklch(var(--muted-foreground))] md:text-lg",
  filtersWrap:
    "mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4",
  filterButton:
    "min-w-24 rounded-xl border border-transparent bg-transparent px-4 py-2.5 text-sm font-semibold text-[oklch(var(--foreground))] transition hover:bg-white hover:shadow-sm",
  filterButtonActive:
    "min-w-24 rounded-xl border border-[#2563eb] bg-[#2563eb] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)] transition",
  grid: "mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",
  card: "rounded-3xl border border-[oklch(var(--border))]/70 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]",
  cardHeader: "flex items-start gap-4",
  avatar:
    "flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white",
  avatarBlue: "bg-[#3b82f6]",
  avatarPurple: "bg-[#a855f7]",
  avatarGreen: "bg-[#22c55e]",
  avatarOrange: "bg-[#f97316]",
  avatarIndigo: "bg-[#6366f1]",
  avatarRed: "bg-[#ef4444]",
  avatarTeal: "bg-[#14b8a6]",
  avatarSky: "bg-[#0ea5e9]",
  avatarPink: "bg-[#ec4899]",
  avatarEmerald: "bg-[#10b981]",
  avatarViolet: "bg-[#8b5cf6]",
  avatarCyan: "bg-[#06b6d4]",
  personWrap: "min-w-0 flex-1",
  name: "text-lg font-bold leading-6 text-[oklch(var(--foreground))]",
  role: "mt-1 text-sm text-[oklch(var(--muted-foreground))]",
  stars: "mt-2 flex items-center gap-1",
  star: "text-sm leading-none text-[#fbbf24]",
  salariesGrid: "mt-5 grid grid-cols-2 gap-3",
  salaryBox: "rounded-2xl px-4 py-3",
  salaryBeforeBox: "bg-[#fff1f2]",
  salaryAfterBox: "bg-[#ecfdf3]",
  salaryLabelBefore: "text-xs font-semibold text-[#ef4444]",
  salaryLabelAfter: "text-xs font-semibold text-[#22c55e]",
  salaryValue: "mt-1 text-sm font-bold text-[oklch(var(--foreground))]",
  increaseBadge:
    "mt-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold",
  increaseBlue: "bg-[#dbeafe] text-[#2563eb]",
  increasePurple: "bg-[#f3e8ff] text-[#9333ea]",
  increaseGreen: "bg-[#dcfce7] text-[#16a34a]",
  increaseOrange: "bg-[#ffedd5] text-[#ea580c]",
  increaseIndigo: "bg-[#e0e7ff] text-[#4f46e5]",
  increaseRed: "bg-[#fee2e2] text-[#dc2626]",
  increaseTeal: "bg-[#ccfbf1] text-[#0f766e]",
  increaseSky: "bg-[#e0f2fe] text-[#0284c7]",
  increasePink: "bg-[#fce7f3] text-[#db2777]",
  increaseEmerald: "bg-[#d1fae5] text-[#059669]",
  increaseViolet: "bg-[#ede9fe] text-[#7c3aed]",
  increaseCyan: "bg-[#cffafe] text-[#0891b2]",
  quote:
    "mt-5 text-sm leading-7 text-[oklch(var(--muted-foreground))] italic",
  metaRow:
    "mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[oklch(var(--muted-foreground))]",
  metaItem: "inline-flex items-center gap-2",
  metaDotPink: "h-2.5 w-2.5 rounded-full bg-[#ec4899]",
  metaDotSlate: "h-2.5 w-2.5 rounded-full bg-[#94a3b8]",
  emptyState:
    "mt-10 rounded-3xl border border-dashed border-[oklch(var(--border))] bg-white px-6 py-12 text-center text-[oklch(var(--muted-foreground))]",
  footer: "mt-10 flex justify-center",
  moreButton:
    "rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(37,99,235,0.28)] transition hover:opacity-90"
};