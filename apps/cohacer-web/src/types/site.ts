// src/types/site.ts
import type { ButtonVariant } from "@cohacer/ui";

/**
 * SiteKey
 *
 * Propósito:
 * - Identificar el sitio dentro del monorepo.
 */
export type SiteKey = "cohacer-web" | "unidho-web" | "acuerdo286-web";

/**
 * LayoutKey
 *
 * Propósito:
 * - Identificar variantes de layout a nivel página.
 */
export type LayoutKey = "stacked" | "twoColumnLead" | "longForm";

/**
 * HeaderContent
 *
 * Propósito:
 * - Modelo de contenido del header (sin layout).
 */
export type HeaderContent = {
  brand: {
    name: string;
    logoSrc?: string;
  };
  nav?: Array<{ label: string; href: string }>;
  cta?: {
    label: string;
    href: string;
    variant?: ButtonVariant;
  };
};

/**
 * FooterContent
 *
 * Propósito:
 * - Modelo de contenido del footer (sin layout).
 */
export type FooterContent = {
  brand: {
    name: string;
    tagline?: string;
  };
  infoLinks: Array<{ label: string; href: string }>;
  contact: {
    email?: string;
    phone?: string;
    schedule?: string;
  };
  socialLinks: Array<{ label: string; href: string }>;
  copyright: string;
};

/**
 * PageContentBase
 *
 * Propósito:
 * - Estructura base para el contenido de cualquier página.
 *
 * Parámetros genéricos:
 * - TSection: Unión discriminada de secciones renderizables para esa página.
 */
export type PageContentBase<TSection> = {
  siteKey: SiteKey;
  layoutKey: LayoutKey;
  meta: {
    title: string;
    description: string;
  };
  header: HeaderContent;
  sections: TSection[];
  footer: FooterContent;
};