// src/content/sites/programasPage.ts

import type { ProgramasPageContent } from "@/types/pages/programas/programas.types";
import { 
  programasIntroContent,
  programasSearchContent,
  programasProcesoContent,
  programasCalculadoraContent,
  programasCTAContent
} from "@/content/data/programasPage";

/**
 * programasPageContent
 *
 * Propósito:
 * - Definir el contenido de la página Programas.
 */
export const programasPageContent: ProgramasPageContent = {
  siteKey: "cohacer-web",
  layoutKey: "stacked",

  meta: {
    title: "Programas Educativos COHACER | Cohacer",
    description:
      "Conoce los programas educativos de COHACER y transforma tu experiencia laboral en un título oficial con validez SEP.",
  },

  sections: [
    {
      type: "programasIntro",
      id: "programas-intro",
      content: programasIntroContent,
    },
    {
      type: "programasSearch",
      id: "programas-search",
      content: programasSearchContent,
    },
    {
      type: "programasProceso",
      id: "programas-proceso",
      content: programasProcesoContent,
    },
    {
      type: "programasCalculadora",
      id: "programas-calculadora",
      content: programasCalculadoraContent
    },
    {
      type: "programasCTA",
      id: "programas-cta",
      content: programasCTAContent
    }
  ],
};