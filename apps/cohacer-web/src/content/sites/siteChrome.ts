// src/content/site/siteChrome.ts
import type { HeaderProps } from "@/components/site/header/Header";
import type { FooterProps } from "@/components/site/footer/Footer";

import LOGO from "@/assets/logo.png";

import { SITE_ROUTES } from "@/routes/siteRoutes";

/**
 * siteHeaderContent
 *
 * Propósito:
 * - Centralizar configuración del header
 *   compartida por todo el sitio.
 */
export const siteHeaderContent: HeaderProps = {
  brand: {
    name: "Cohacer",
    logoSrc: LOGO,
  },
  nav: [
    { label: "Inicio", href: SITE_ROUTES.home },
    { label: "Validez Oficial", href: SITE_ROUTES.validez },
    { label: "Inversión", href: SITE_ROUTES.inversion },
    { label: "Beneficios", href: SITE_ROUTES.beneficios },
    { label: "Proceso", href: SITE_ROUTES.proceso },
    { label: "Contacto", href: SITE_ROUTES.contacto },
  ],
  cta: {
    label: "Evaluar perfil gratis",
    href: SITE_ROUTES.contacto,
    variant: "primary",
  },
};

/**
 * siteFooterContent
 *
 * Propósito:
 * - Centralizar configuración del footer
 *   compartida por todo el sitio.
 */
export const siteFooterContent: FooterProps = {
  brand: {
    name: "COHACER",
    tagline: "Tu experiencia merece reconocimiento oficial.",
  },

  infoLinks: [
    { label: "Validez Oficial (Acuerdo 286 SEP)", href: SITE_ROUTES.validez },
    { label: "Inversión y Formas de Pago", href: "/inversion" },
    { label: "Preguntas Frecuentes", href: "/faq" },
  ],

  contact: {
    email: "info@cohacer.com",
    phone: "+52 55 1234 5678",
    schedule: "Lun-Vie 9:00-18:00",
  },

  socialLinks: [
    { label: "Facebook", href: "#1" },
    { label: "LinkedIn", href: "#2" },
    { label: "WhatsApp", href: "#3" },
  ],

  copyright:
    "© 2026 COHACER. Todos los derechos reservados. | Título con validez oficial SEP",
};