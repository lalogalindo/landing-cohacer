// src/routes/siteRoutes.ts

/**
 * SiteRouteItem
 *
 * Propósito:
 * - Definir la estructura base de una ruta navegable del sitio.
 */
export type SiteRouteItem = {
  label: string;
  path: string;
  enabled?: boolean;
};

/**
 * SITE_ROUTES
 *
 * Propósito:
 * - Centralizar los paths del sitio para evitar strings duplicados.
 */
export const SITE_ROUTES = {
  home: "/",
  validez: "/validez",
  inversion: "/inversion",
  beneficios: "/beneficios",
  proceso: "/proceso",
  contacto: "/contacto",
} as const;

/**
 * siteNavItems
 *
 * Propósito:
 * - Exponer los items del menú principal ya alineados al routeo.
 *
 * Regresa:
 * - Lista de rutas que puede consumir el header.
 */
export const siteNavItems: SiteRouteItem[] = [
  {
    label: "Inicio",
    path: SITE_ROUTES.home,
    enabled: true,
  },
  {
    label: "Validez Oficial",
    path: SITE_ROUTES.validez,
    enabled: true,
  },
  {
    label: "Inversión",
    path: SITE_ROUTES.inversion,
    enabled: true,
  },
  {
    label: "Beneficios",
    path: SITE_ROUTES.beneficios,
    enabled: false,
  },
  {
    label: "Proceso",
    path: SITE_ROUTES.proceso,
    enabled: false,
  },
  {
    label: "Contacto",
    path: SITE_ROUTES.contacto,
    enabled: false,
  },
];