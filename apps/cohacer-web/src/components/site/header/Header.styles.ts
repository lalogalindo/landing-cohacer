/**
 * headerStyles
 *
 * Propósito:
 * - Centralizar clases Tailwind para mantener el componente pequeño.
 * - Permitir reutilizar el Header sin duplicar strings.
 *
 * Información adicional:
 * - Consume tokens (`bg-background`, `border-border`, `text-muted-foreground`, etc.)
 *   definidos por tu palette OKLCH.
 */
export const headerStyles = {
  root:
    "sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70",
  inner: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3",

  brandWrap: "flex items-center gap-2",
  brandLogo: "h-8 w-auto sm:h-10",
  brandText: "text-sm font-semibold tracking-tight text-foreground",

  desktopNav: "hidden items-center gap-6 md:flex",
  navLink:
    "text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline [&.active]:text-[#2563eb]",

  actions: "flex items-center gap-2",
  mobileToggleWrap: "md:hidden",

  mobileBackdrop: "fixed inset-0 z-40 bg-foreground/15 backdrop-blur-sm",
  mobilePanel:
    "fixed right-0 top-0 z-50 h-dvh w-[84vw] max-w-sm border-l border-border bg-background p-4 shadow-xl",
  mobileHeader: "flex items-center justify-between gap-3",
  mobileTitle: "text-sm font-semibold text-foreground",
  mobileNav: "mt-5 flex flex-col gap-1",
  mobileNavLink: "rounded-xl px-3 py-2 text-sm text-foreground hover:bg-muted  [&.active]:text-[#2563eb]",
  mobileCtaWrap: "mt-4",
} as const;