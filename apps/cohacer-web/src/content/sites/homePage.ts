import type { HomePageContent } from "@/types/pages/home/home.types";

import {
  homeEligibilityContent,
  homeBenefitsGridContent,
  homeProcessStepsContent,
  homeTestimonialsGridContent,
  homeInvestmentLeadFormContent,
} from "@/content/data";

/**
 * homePageContent
 *
 * Propósito:
 * - Definir contenido de la página Home.
 */
export const homePageContent: HomePageContent = {
  siteKey: "cohacer-web",
  layoutKey: "stacked",

  meta: {
    title: "COHACER® — Titulación por Experiencia Laboral",
    description:
      "Titulación por experiencia laboral bajo el Acuerdo 286 de la SEP.",
  },

  sections: [
    {
      type: "eligibility",
      id: "requisitos",
      content: homeEligibilityContent,
    },

    {
      type: "benefitsGrid",
      id: "beneficios",
      content: homeBenefitsGridContent,
    },

    {
      type: "processSteps",
      id: "proceso",
      content: homeProcessStepsContent,
    },

    {
      type: "testimonialsGrid",
      id: "testimonios",
      content: homeTestimonialsGridContent,
    },

    {
      type: "investmentLeadForm",
      id: "plan-personalizado",
      content: homeInvestmentLeadFormContent,
    },
  ],
};