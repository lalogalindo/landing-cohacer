export const footerStyles = {
  root: "border-t border-border bg-[oklch(var(--accent))] text-[oklch(var(--accent-foreground))]",

  inner: "mx-auto max-w-6xl px-4 py-14",

  grid:
    "grid gap-10 md:grid-cols-2 lg:grid-cols-4",

  title:
    "text-sm font-semibold tracking-wide",

  text:
    "mt-2 text-sm opacity-80",

  list:
    "mt-3 flex flex-col gap-2 text-sm",

  link:
    "opacity-80 hover:opacity-100",

  contactItem:
    "flex items-center gap-2 text-sm opacity-80",

  divider:
    "mt-10 border-t border-white/10",

  bottom:
    "mt-6 text-center text-xs opacity-70",
} as const;