// src/content/sites/validezPage.ts
import type { ValidezPageContent } from "@/types/pages/validez/validez.types";
import { 
  sepValidityContent, 
  acuerdo286Content,
  cedulaProcessContent,
  mythsRealityContent,
  verificationTransparencyContent,
  directContactContent,
 } from "@/content/data/validezPage";

/**
 * validezPageContent
 *
 * Propósito:
 * - Definir el contenido de la página Validez.
 */
export const validezPageContent: ValidezPageContent = {
  siteKey: "cohacer-web",
  layoutKey: "stacked",

  meta: {
    title: "Validez Oficial SEP | Cohacer",
    description:
      "Conoce la validez oficial SEP del proceso de titulación por experiencia laboral.",
  },

  sections: [
    {
      type: "sepValidity",
      id: "validez-oficial-sep",
      content: sepValidityContent,
    },
    {
      type: "acuerdo286",
      id: "acuerdo-286",
      content: acuerdo286Content
    },
    {
      type: "cedulaProcess",
      id: "proceso-cedula",
      content: cedulaProcessContent,
    },
    {
      type: "mythsReality",
      id: "mitos-y-realidades",
      content: mythsRealityContent
    },
    {
      type: "verificationTransparency",
      id: "verificacion-transparencia",
      content: verificationTransparencyContent
    },
    {
      type: "directContactCta",
      id: "contacto-directo",
      content: directContactContent
    }
  ],
};