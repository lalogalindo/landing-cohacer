export const heroSectionStyles = {
  base: "relative w-full overflow-hidden",

  backgroundBase: [
    "flex",
    "items-center",
    "justify-center",
    "w-full",
  ].join(" "),

  container: [
    "mx-auto",
    "w-full",
    "max-w-6xl",
    "px-4",
    "sm:px-6",
  ].join(" "),

  backgroundContainer: [
    "relative",
    "z-10",
    "flex",
    "min-h-screen",
    "w-full",
    "items-center",
    "justify-center",
  ].join(" "),

  content: [
    "flex",
    "flex-col",
    "gap-4",
  ].join(" "),

  backgroundContent: [
    "mx-auto",
    "max-w-4xl",
    "items-center",
    "text-center",
  ].join(" "),

  eyebrow: [
    "mb-2",
    "text-[0.7rem]",
    "font-medium",
    "uppercase",
    "tracking-[0.22em]",
    "text-white/80",
  ].join(" "),

  title: [
    "font-semibold",
    "leading-tight",
  ].join(" "),

  backgroundTitle: [
    "max-w-4xl",
    "text-[2.6rem]",
    "font-extrabold",
    "leading-[1.02]",
    "tracking-[-0.03em]",
    "sm:text-[3.5rem]",
    "md:text-[4.4rem]",
    "lg:text-[5.1rem]",
  ].join(" "),

  subtitle: [
    "leading-relaxed",
    "max-w-[60ch]",
  ].join(" "),

  backgroundSubtitle: [
    "mx-auto",
    "mt-3",
    "max-w-3xl",
    "text-sm",
    "leading-relaxed",
    "sm:text-base",
    "md:text-lg",
  ].join(" "),

  actions: [
    "mt-6",
    "flex",
    "flex-col",
    "gap-3",
    "sm:flex-row",
  ].join(" "),

  backgroundActions: [
    "justify-center",
  ].join(" "),

  decorativeIcon: [
    "mt-10",
    "text-[3rem]",
    "text-[oklch(var(--primary))]",
    "sm:text-[3.75rem]",
  ].join(" "),

  mediaImage: "h-full w-full object-cover",

  splitGrid: [
    "grid",
    "grid-cols-1",
    "items-center",
    "gap-8",
    "py-10",
    "sm:py-14",
    "lg:grid-cols-2",
  ].join(" "),
};