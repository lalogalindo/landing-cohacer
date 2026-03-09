/**
 * Mapa centralizado de rutas del sitio.
 *
 * Propósito:
 * - Evitar strings duplicados en Header, router y enlaces.
 * - Mantener paths estables para SEO y analytics.
 */
export const routes = {
  home: { path: "/", label: "Inicio" },
  sepValidity: { path: "/validez-sep", label: "Validez SEP" },
  benefits: { path: "/beneficios", label: "Beneficios" },
  process: { path: "/proceso", label: "Proceso" },
  testimonials: { path: "/testimonios", label: "Testimonios" },
  contact: { path: "/contacto", label: "Contacto" },
} as const;