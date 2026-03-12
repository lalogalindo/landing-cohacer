export const inversionIntroSectionStyles = {
  section:
    "bg-[linear-gradient(135deg,#1f4fbf_0%,#2f6de1_100%)] px-5 py-14 md:px-8 md:py-20",

  wrap:
    "mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8",

  header: "flex max-w-4xl flex-col items-center text-center",

  title:
    "max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-[-0.02em] text-white md:text-5xl",

  description:
    "mt-4 max-w-3xl text-pretty text-sm leading-7 text-white/90 md:text-lg md:leading-8",

  highlightCard:
    "flex min-h-[112px] w-full max-w-md flex-col items-center justify-center rounded-xl bg-[#14b86f] px-6 py-5 text-center shadow-[0_12px_30px_rgba(0,0,0,0.18)]",

  highlightAmount:
    "flex items-center justify-center gap-2 text-lg font-extrabold leading-none text-white md:text-3xl",

  highlightBadge: "text-base md:text-lg",

  highlightCaption:
    "mt-3 text-sm font-medium leading-6 text-white/90 md:text-base",
} as const;