import type { LandingPageContent } from "@/types/types";
import { programsContent, companiesContent, testimonialsContent, teamContent } from "@/content/data";

export const cohacerWebContent: LandingPageContent = {
  siteKey: "cohacer-web",
  layoutKey: "stacked",
  meta: {
    title: "COHACER® — Titulación por Experiencia Laboral (Acuerdo 286)",
    description:
      "Titulación por experiencia laboral en México bajo el Acuerdo 286 de la SEP. Proceso legal, seguro y con acompañamiento personalizado.",
  },
  header: {
    brand: {
      name: "COHACER®",
      // logoSrc: '/assets/brands/cohacer/logo.svg',
    },
    nav: [
      { label: "Requisitos", href: "#requisitos" },
      { label: "Inversión", href: "#inversion" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Contacto", href: "#contacto" }
    ],
  },
  sections: [
    /**
     * Hero (dinámico desde JSON).
     */
    {
      type: "hero",
      id: "inicio",
      variant: "background",
      eyebrow: "Titulación por experiencia laboral",
      title: "Titúlate sin volver a estudiar una carrera",
      subtitle: "Proceso claro, rápido y acompañado.",
      primaryCta: {
        label: "Iniciar por WhatsApp",
        href: "https://wa.me/52...",
        external: true,
        button: {
          className: "jamon",
        },
      },
      secondaryCta: {
        label: "Ver programas",
        href: "#programas",
      },
      media: {
        src: "https://picsum.photos/1600/900",
        alt: "Graduación",
      },
      overlayOpacity: 0.6,
    },

    /**
     * Programas (dinámico desde JSON).
     * Esta sección se renderiza desde `programs.json`.
     */
    {
      type: "programs",
      id: "programas",
      content: programsContent,
    },
    {
      type: "companies",
      id: "empresas",
      content: companiesContent,
    },
    {
      type: "testimonials",
      id: "testimonios",
      content: testimonialsContent
    },
    {
      type: "team",
      id: "equipo",
      content: teamContent
    },
    {
      type: "bullets",
      id: "requisitos",
      title: "Si tienes…",
      items: [
        "Más de 3 años de experiencia laboral en la licenciatura a ingresar.",
        "Certificado de bachillerato original.",
        "Eres mayor de 25 años de edad.",
        "Para licenciaturas reguladas requieres carrera trunca o un gran portafolio de evidencias como cursos, talleres, diplomados, etc…",
      ],
    },
    {
      type: "trust",
      id: "confianza",
      title: "COHACER® es Sede de Evaluación Autorizada",
      items: [
        { label: "Proceso guiado", description: "Acompañamiento durante preparación, evaluaciones y trámite." },
        { label: "Validez oficial", description: "Titulación gestionada ante la SEP conforme al proceso." },
      ],
    },
    {
      type: "pricing",
      id: "inversion",
      title: "Inversión",
      price: { amount: 53000, currency: "MXN", note: "Costo total de la inversión" },
      bullets: ["Sin gastos ocultos.", "Inicias desde $5,000 MXN.", "Con diferentes modalidades de pago."],
      description:
        "Un servicio completo de titulación personalizado que incluye desde asesorías, simulaciones, trámites, evaluaciones y título ante la SEP.",
    },
    {
      type: "benefits",
      id: "beneficios",
      title: "Beneficios",
      items: [
        "En poco tiempo ¡Tú eliges! 2, 4 ó 6 meses.",
        "Tú acuerdas tus horarios.",
        "Sesiones en tiempo real.",
        "No hacemos grupos.",
        "Inicias en el momento que te registras.",
        "Garantía de titulación por escrito.",
        "Siempre estaremos contigo, desde que te registres, te prepararemos al 100%, cuando realizas tus exámenes, hasta que recibas tu título.",
        "Sin regresar a la universidad.",
        "Pagas mucho menos de lo que pagarías en una universidad por 4 años.",
        "Tú diseñas tu plan de pagos.",
        "Puedes estudiar una maestría o especialidad en cualquier universidad.",
        "Quedas inscrito en el registro de la Dirección Nacional de Profesionistas, SEP.",
      ],
    },
    {
      type: "leadForm",
      id: "contacto",
      title: "Agenda tu cita y nos pondremos en contacto contigo",
      submitLabel: "Solicitar contacto",
      privacyText:
        "Al introducir mis datos, afirmo estar consciente de las directrices de la Política de Privacidad estipuladas en",
      privacyHref: "https://unidho.mx/aviso-de-privacidad.html",
      fields: [
        { key: "fullName", label: "Nombre Completo", required: true, placeholder: "Tu nombre" },
        { key: "email", label: "Email", required: true, placeholder: "tucorreo@dominio.com" },
        { key: "phone", label: "Teléfono", required: true, placeholder: "55 0000 0000" },
        {
          key: "program",
          label: "Licenciatura de interés",
          options: [
            "Administración",
            "Ciencias Políticas y Administración Pública",
            "Comercio y Negocios Internacionales",
            "Ciencias de la Comunicación",
            "Contaduría",
            "Derecho",
            "Ing. Computacional",
            "Ing. Industrial",
            "Mercadotecnia",
            "Pedagogía",
            "Psicopedagogía",
          ],
        },
        {
          key: "source",
          label: "¿Cómo te enteraste de COHACER UNIDHO?",
          required: true,
          options: [
            "Facebook",
            "Instagram",
            "TikTok",
            "Google",
            "Pinterest",
            "YouTube",
            "LinkedIn",
            "X / Twitter",
            "Un conocido me lo recomendó",
            "Un asesor me abordó",
          ],
        },
      ],
    },
  ],
  footer: {
    legalLinks: [
      { label: "Aviso de privacidad", href: "https://cohacer.com/assets/htmlstatic/avisodeprivacidad.html" },
      { label: "Política de privacidad (UNIDHO)", href: "https://unidho.mx/aviso-de-privacidad.html" },
    ],
    disclaimer: "COHACER® — Información sujeta a verificación y actualización.",
  },
};