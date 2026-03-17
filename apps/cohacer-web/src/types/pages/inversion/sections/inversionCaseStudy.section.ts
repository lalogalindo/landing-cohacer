/**
 * InversionCaseStudyItem
 *
 * Propósito:
 * - Representar un caso de éxito individual
 *   dentro de la sección.
 */
export type InversionCaseStudyItem = {
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  investment: string;
  previousSalary: string;
  currentSalary: string;
  roiLabel: string;
  roi: string;
  testimonial: string;
};

/**
 * InversionCaseStudyContent
 *
 * Propósito:
 * - Representar el contenido tipado completo
 *   de la sección de casos de éxito.
 */
export type InversionCaseStudyContent = {
  title: string;
  items: InversionCaseStudyItem[];
};