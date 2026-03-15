import type { InversionPageContent } from "@/types/pages/inversion/inversion.types";
import { 
  inversionIntroContent,
  inversionComparisonContent ,
  inversionROIContent,
  inversionPricingContent
} from "@/content/data/inversionPage";

/**
 * inversionPageContent
 *
 * Propósito:
 * - Definir el contenido de la página Inversión.
 */
export const inversionPageContent: InversionPageContent = {
  siteKey: "cohacer-web",
  layoutKey: "stacked",

  meta: {
    title: "Inversión | Cohacer",
    description: "Conoce la inversión del proceso de titulación por experiencia laboral.",
  },

  sections: [
    {
      type: "inversionIntro",
      id: "inversion-intro",
      content: inversionIntroContent,
    },
    {
      type: "inversionComparison",
      id: "comparacion-costos",
      content: inversionComparisonContent
    },
    {
      type: "inversionROI",
      id: "calculadora-roi",
      content: inversionROIContent
    },
    {
      type: "inversionPricing",
      id: "planes",
      content: inversionPricingContent
    }
  ],
};