// src/types/pages/beneficios/sections/beneficiosTestimonios.section.ts

/**
 * BeneficiosTestimoniosCategory
 *
 * Propósito:
 * - Representar una categoría disponible
 *   para filtrar testimonios.
 */
export type BeneficiosTestimoniosCategory = {
  id: string;
  name: string;
};

/**
 * BeneficiosTestimoniosAvatarTone
 *
 * Propósito:
 * - Restringir el tono visual configurable
 *   para el avatar y badge principal del testimonio.
 */
export type BeneficiosTestimoniosAvatarTone = string;

/**
 * BeneficiosTestimonioItem
 *
 * Propósito:
 * - Representar un testimonio individual
 *   dentro de la sección de testimonios.
 */
export type BeneficiosTestimonioItem = {
  name: string;
  initials: string;
  role: string;
  rating: number;
  beforeSalary: string;
  afterSalary: string;
  increaseLabel: string;
  quote: string;
  city: string;
  state: string;
  processDuration: string;
  avatarTone: BeneficiosTestimoniosAvatarTone;
  categories: string[];
};

/**
 * BeneficiosTestimoniosContent
 *
 * Propósito:
 * - Representar el contenido tipado de la
 *   sección de testimonios de la página Beneficios.
 */
export type BeneficiosTestimoniosContent = {
  title: string;
  description: string;
  moreButtonLabel: string;
  categories: BeneficiosTestimoniosCategory[];
  testimonials: BeneficiosTestimonioItem[];
};