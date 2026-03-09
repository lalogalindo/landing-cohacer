import type { Section } from "@/types/section";

/**
 * BenefitIconKey
 *
 * Propósito:
 * - Llaves de iconos soportados por el componente de beneficios.
 */
export type BenefitIconKey = "trendUp" | "money" | "graduation" | "spark";

/**
 * BenefitsGridItem
 *
 * Propósito:
 * - Representar un beneficio individual dentro del grid.
 */
export type BenefitsGridItem = {
  icon?: BenefitIconKey;
  title: string;
  description?: string;
};

/**
 * BenefitsGridContent
 *
 * Propósito:
 * - Representar el contenido tipado del bloque de beneficios.
 */
export type BenefitsGridContent = {
  title: string;
  subtitle?: string;
  items: BenefitsGridItem[];
};

/**
 * BenefitsGridSection
 *
 * Propósito:
 * - Representar la sección renderizable del home
 *   para el bloque de beneficios.
 */
export type BenefitsGridSection = Section<"benefitsGrid", BenefitsGridContent>;