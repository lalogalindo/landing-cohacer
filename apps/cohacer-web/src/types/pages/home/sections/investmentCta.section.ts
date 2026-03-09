// src/types/pages/home/sections/investmentCta.section.ts
import type { Section } from "@/types/section";

/**
 * InvestmentCtaContent
 *
 * Propósito:
 * - Contenido del bloque CTA de inversión.
 */
export type InvestmentCtaContent = {
  title: string;
  highlight: string;
  subtitle?: string;
};

/**
 * InvestmentCtaSection
 *
 * Propósito:
 * - Sección renderizable del Home.
 */
export type InvestmentCtaSection = Section<"investmentCta", InvestmentCtaContent>;