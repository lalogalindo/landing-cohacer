export type Testimonial = {
  id: string;
  name: string;
  program: string;
  quote: string;
  image: {
    src: string;
    alt: string;
  };
};

export type TestimonialsContent = {
  title: string;
  subtitle?: string;
  items: Testimonial[];
};

/**
 * Sección de testimonios (renderizable).
 *
 * Propósito:
 * - Ser parte del arreglo `content.sections`.
 * - Proveer el discriminante `type` para el renderer.
 * - Encapsular el contenido tipado de testimonios.
 */
export type TestimonialsSection = {
  type: "testimonials";
  id: string;
  content: TestimonialsContent;

  /**
   * Config opcional de carrusel (UX).
   *
   * Propósito:
   * - Permitir autoplay y control de timing desde el contenido del sitio.
   */
  carousel?: {
    autoplay?: boolean;
    autoplayMs?: number;
  };
};