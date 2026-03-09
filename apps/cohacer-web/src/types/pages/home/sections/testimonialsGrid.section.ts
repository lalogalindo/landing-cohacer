// src/types/pages/home/sections/testimonialsGrid.section.ts
import type { Section } from "@/types/section";

/**
 * TestimonialGridItem
 *
 * Propósito:
 * - Testimonio individual para formato grid.
 */
export type TestimonialGridItem = {
  name: string;
  role?: string;
  quote: string;
  highlight?: string;
};

/**
 * TestimonialsGridContent
 *
 * Propósito:
 * - Contenido del bloque de testimonios (grid).
 */
export type TestimonialsGridContent = {
  title: string;
  subtitle?: string;
  items: TestimonialGridItem[];
};

/**
 * TestimonialsGridSection
 *
 * Propósito:
 * - Sección renderizable del Home.
 */
export type TestimonialsGridSection = Section<
  "testimonialsGrid",
  TestimonialsGridContent
>;