// src/content/sites/validezPage.ts
import type { BeneficiosPageContent } from "@/types/pages/beneficios/beneficios.types";
import { 
  beneficiosIntroContent,
  beneficiosResultadosContent,
  beneficiosTransformacionContent,
 } from "@/content/data/beneficiosPage";

/**
 * BeneficiosPageContent
 *
 * Propósito:
 * - Definir el contenido de la página Beneficios.
 */
export const beneficiosPageContent: BeneficiosPageContent = {
  siteKey: "cohacer-web",
  layoutKey: "stacked",

  meta: {
    title: "Beneficios de Titularte por Experiencia Laboral | Cohacer",
    description:
      "Descubre los beneficios de titularte por experiencia laboral con Cohacer: mejores oportunidades, crecimiento profesional, aumento salarial y resultados reales.",
  },

  sections: [
    {
      type: "beneficiosIntro",
      id: "beneficios-intro",
      content: beneficiosIntroContent
    },
    {
      type: "beneficiosResultados",
      id: "resultados",
      content: beneficiosResultadosContent,
    },
    {
      type: "beneficiosTransformacion",
      id: "transformacion",
      content: beneficiosTransformacionContent
    }
  ],
};