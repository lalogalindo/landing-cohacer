/**
 * verificationTransparencySectionStyles
 *
 * Propósito:
 * - Centralizar las clases utilitarias de la sección
 *   de verificación y transparencia.
 *
 * Información adicional:
 * - Usa tokens OKLCH y layout mobile first.
 * - El fondo general replica el tono claro azulado
 *   visto en la referencia.
 */
export const verificationTransparencySectionStyles = {
  section:
    "bg-[#eff6ff] px-4 py-14 sm:px-6 lg:px-8",

  wrap:
    "mx-auto flex w-full max-w-6xl flex-col gap-8",

  header:
    "mx-auto flex max-w-3xl flex-col items-center gap-3 text-center",

  title:
    "text-3xl font-extrabold tracking-tight text-[oklch(var(--foreground))] sm:text-4xl",

  subtitle:
    "max-w-2xl text-sm leading-7 text-[oklch(var(--muted-foreground))] sm:text-base",

  cardsGrid:
    "grid grid-cols-1 gap-5 md:grid-cols-3",

  card:
    "rounded-2xl bg-white px-6 py-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)]",

  cardIconWrap:
    "mb-5 flex justify-center",

  cardIcon: (tone: "blue" | "green" | "purple") =>
    [
      "flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white",
      tone === "blue" ? "bg-[#3b82f6]" : "",
      tone === "green" ? "bg-[#22c55e]" : "",
      tone === "purple" ? "bg-[#a855f7]" : "",
    ]
      .filter(Boolean)
      .join(" "),

  cardTitle:
    "mb-3 text-xl font-extrabold text-[oklch(var(--foreground))]",

  cardDescription:
    "text-sm leading-7 text-[oklch(var(--muted-foreground))] sm:text-base",

  linksPanel:
    "rounded-2xl bg-white px-6 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:px-8",

  linksPanelTitle:
    "mb-8 text-center text-2xl font-extrabold text-[oklch(var(--foreground))]",

  linksGrid:
    "grid grid-cols-1 gap-8 md:grid-cols-2",

  linkGroup:
    "flex flex-col",

  linkGroupTitle:
    "mb-4 text-base font-bold text-[oklch(var(--foreground))]",

  linkList:
    "flex list-none flex-col gap-6 p-0 m-0",

  linkItem:
    "flex flex-col gap-1",

  linkTitleRow:
    "flex items-start gap-2",

  linkBullet:
    "mt-0.5 text-sm text-[#a855f7]",

  linkTitle:
    "text-base font-extrabold text-[oklch(var(--foreground))]",

  linkSubtitle:
    "pl-5 text-sm leading-6 text-[oklch(var(--muted-foreground))]",

  linkAnchor:
    "pl-5 break-words text-sm leading-6 text-[#2563eb] underline underline-offset-2 hover:opacity-80",
} as const;