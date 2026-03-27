// src/components/pages/contacto/sections/ContactoIntroSection/ContactoIntroSection.styles.ts

/**
 * contactoIntroSectionStyles
 *
 * Propósito:
 * - Centralizar las clases visuales de la sección
 *   inicial de la página Contacto.
 *
 * Información adicional:
 * - Se usa un gradiente horizontal azul a cian
 *   con transiciones suaves para acercarse al mock.
 */
export const contactoIntroSectionStyles = {
  section: [
    "relative overflow-hidden",
    "bg-[linear-gradient(90deg,_#2849c4_0%,_#3a7ef1_50%,_#1bb2d6_100%)]",
    "before:pointer-events-none before:absolute before:inset-0",
    "before:bg-[radial-gradient(circle_at_top_center,_rgba(255,255,255,0.10),_transparent_42%)]",
  ].join(" "),

  wrap: "relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24",

  header: "mx-auto max-w-4xl text-center",

  title: "text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.5rem]",

  description:
    "mx-auto mt-5 max-w-4xl text-base leading-7 text-white/90 sm:text-lg lg:text-[1.2rem] lg:leading-8",

  statsGrid:
    "mt-10 grid w-full max-w-4xl grid-cols-1 gap-4 sm:mt-12 md:grid-cols-3 md:gap-6",

  statCard: [
    "rounded-2xl border border-white/10",
    "bg-white/8",
    "px-6 py-8 text-center",
    "shadow-[0_20px_60px_rgba(9,28,98,0.16)]",
    "backdrop-blur-[5px]",
    "min-h-[165px]",
    "flex flex-col items-center justify-center",
  ].join(" "),

  statIcon: "text-[1.75rem] leading-none",

  statIconBolt: "text-[#ff9f43]",
  statIconBullseye: "text-[#ff4d8d]",
  statIconPhone: "text-[#ff4d6d]",

  statValue: "mt-4 text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-[2.1rem]",

  statLabel:
    "mt-3 max-w-[16rem] text-sm leading-6 text-white/90 sm:text-base",
};