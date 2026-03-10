// src/components/pages/validez/CedulaProcessSection/CedulaProcessSection.styles.ts
export const cedulaProcessSectionStyles = {
  section: [
    "bg-[#f9fafb]",
    "py-14",
    "sm:py-16",
    "lg:py-20",
  ].join(" "),

  wrap: [
    "mx-auto",
    "w-full",
    "max-w-6xl",
    "px-4",
    "sm:px-6",
    "lg:px-8",
  ].join(" "),

  header: [
    "mx-auto",
    "mb-10",
    "max-w-4xl",
    "text-center",
  ].join(" "),

  title: [
    "text-3xl",
    "font-extrabold",
    "tracking-tight",
    "text-slate-900",
    "sm:text-4xl",
    "lg:text-5xl",
  ].join(" "),

  description: [
    "mx-auto",
    "mt-4",
    "max-w-3xl",
    "text-base",
    "leading-7",
    "text-slate-600",
    "sm:text-lg",
  ].join(" "),

  timeline: [
    "mx-auto",
    "max-w-5xl",
    "space-y-5",
    "sm:space-y-6",
  ].join(" "),

  stepRow: [
    "grid",
    "grid-cols-[28px_1fr]",
    "gap-4",
    "sm:grid-cols-[40px_1fr]",
    "sm:gap-6",
  ].join(" "),

  railColumn: [
    "relative",
    "flex",
    "min-h-[140px]",
    "justify-center",
  ].join(" "),

  railLineTop: [
    "absolute",
    "top-0",
    "left-1/2",
    "h-1/2",
    "w-px",
    "-translate-x-1/2",
    "bg-cyan-300",
  ].join(" "),

  railLineBottom: [
    "absolute",
    "bottom-0",
    "left-1/2",
    "h-1/2",
    "w-px",
    "-translate-x-1/2",
    "bg-cyan-300",
  ].join(" "),

  railLineBottomHidden: "hidden",

  dot: [
    "relative",
    "z-10",
    "mt-2",
    "h-5",
    "w-5",
    "rounded-full",
    "border-[3px]",
    "bg-white",
    "shadow-sm",
    "sm:h-6",
    "sm:w-6",
  ].join(" "),

  dotBlue: [
    "border-blue-500",
    "ring-2",
    "ring-blue-200/70",
  ].join(" "),

  dotGreen: [
    "border-green-500",
    "ring-2",
    "ring-green-200/70",
  ].join(" "),

  dotPurple: [
    "border-violet-500",
    "ring-2",
    "ring-violet-200/70",
  ].join(" "),

  dotYellow: [
    "border-amber-500",
    "ring-2",
    "ring-amber-200/70",
  ].join(" "),

  card: [
    "rounded-2xl",
    "border",
    "border-white/60",
    "bg-white/90",
    "p-5",
    "shadow-[0_6px_18px_rgba(15,23,42,0.08)]",
    "backdrop-blur-sm",
    "sm:p-6",
    "lg:p-7",
  ].join(" "),

  cardTitle: [
    "text-lg",
    "font-extrabold",
    "leading-tight",
    "text-slate-900",
    "sm:text-xl",
  ].join(" "),

  cardDescription: [
    "mt-3",
    "text-sm",
    "leading-7",
    "text-slate-600",
    "sm:text-base",
  ].join(" "),

  cardMeta: [
    "mt-4",
    "text-sm",
    "font-bold",
    "sm:text-base",
  ].join(" "),

  metaBlue: "text-blue-500",
  metaGreen: "text-green-500",
  metaPurple: "text-violet-500",
  metaYellow: "text-amber-500",
};