export const heroSectionStyles = {
  base: "relative w-full",

  container: [
    "mx-auto",
    "w-full",
    "max-w-6xl",
    "px-4 sm:px-6",
  ].join(" "),

  content: [
    "flex",
    "flex-col",
    "gap-4",
  ].join(" "),

  title: [
    "text-3xl",
    "sm:text-4xl",
    "lg:text-5xl",
    "font-semibold",
    "leading-tight",
  ].join(" "),

  subtitle: [
    "text-base",
    "leading-relaxed",
    "max-w-[60ch]",
  ].join(" "),

  actions: [
    "mt-4",
    "flex",
    "flex-col",
    "gap-3",
    "sm:flex-row",
  ].join(" "),

  mediaImage: "w-full h-full object-cover",

  splitGrid: [
    "grid",
    "grid-cols-1",
    "gap-8",
    "items-center",
    "py-10 sm:py-14",
    "lg:grid-cols-2",
  ].join(" "),
};