// src/types/sections/hero.section.ts
import type { HeroVariant, HeroCta } from "@cohacer/ui";

/**
 * HeroSection
 *
 * Propósito:
 * - Wrapper renderizable del Hero.
 *
 * Información adicional:
 * - Se mantiene “plano” (sin `content`) porque tu `@cohacer/ui/HeroSection`
 *   ya consume este shape directo.
 */
export type HeroSection = {
  type: "hero";
  id: string;

  variant: HeroVariant;
  className: string;

  eyebrow?: string;
  title: string;
  subtitle: string;

  primaryCta: HeroCta;
  secondaryCta?: HeroCta;

  media?: { src: string; alt: string };

  overlayOpacity: number;
};