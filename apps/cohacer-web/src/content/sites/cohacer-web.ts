// src/content/sites/cohacer-web.ts
import type { LandingPageContent } from "@/types/types";
import {
  homeHeroContent,
  homeEligibilityContent,
  homeBenefitsGridContent,
  homeProcessStepsContent,
  homeTestimonialsGridContent,
  homeInvestmentLeadFormContent,
} from "@/content/data";

export const cohacerWebContent: LandingPageContent = {
  siteKey: "cohacer-web",
  layoutKey: "stacked",
  meta: {
    title: "COHACER® — Titulación por Experiencia Laboral (Acuerdo 286)",
    description:
      "Titulación por experiencia laboral en México bajo el Acuerdo 286 de la SEP. Proceso legal, seguro y con acompañamiento personalizado.",
  },

  header: {
    brand: { name: "COHACER®" },
    nav: [
      { label: "Requisitos", href: "#requisitos" },
      { label: "Inversión", href: "#inversion" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: {
      label: "Evaluar perfil gratis",
      href: "#contacto",
      variant: "primary",
    },
  },

  sections: [
    {
      type: "hero",
      id: "inicio",
      ...homeHeroContent,
      className: "cohacer-hero-template",
    },

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
      content: homeInvestmentLeadFormContent
    }
  ],

  footer: {
    brand: {
      name: "COHACER",
      tagline: "Tu experiencia merece reconocimiento oficial.",
    },

    infoLinks: [
      { label: "Validez Oficial (Acuerdo 286 SEP)", href: "/validez" },
      { label: "Inversión y Formas de Pago", href: "/inversion" },
      { label: "Preguntas Frecuentes", href: "/faq" },
    ],

    contact: {
      email: "info@cohacer.com",
      phone: "+52 55 1234 5678",
      schedule: "Lun-Vie 9:00-18:00",
    },

    socialLinks: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "WhatsApp", href: "#" },
    ],

    copyright:
      "© 2024 COHACER. Todos los derechos reservados. | Título con validez oficial SEP",
  },
};