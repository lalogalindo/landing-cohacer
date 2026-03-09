// src/types/pages/home/sections/eligibility.section.ts

/**
 * Tonos visuales permitidos para los badges superiores.
 */
export type EligibilityBadgeTone = "green" | "blue" | "neutral";

/**
 * Tonos visuales permitidos para el ícono de cada card.
 */
export type EligibilityItemIconTone = "blue" | "green" | "purple";

/**
 * Íconos permitidos para los elementos de elegibilidad.
 */
export type EligibilityItemIcon = "text" | "graduation";

/**
 * Badge superior de la sección.
 *
 * Propósito:
 * - Representar sellos o etiquetas visuales como SEP o Cédula Profesional.
 */
export type EligibilityBadge = {
  label: string;
  tone?: EligibilityBadgeTone;
};

/**
 * Item individual de elegibilidad.
 *
 * Propósito:
 * - Representar cada requisito dentro del grid de cards.
 */
export type EligibilityItem = {
  title: string;
  description?: string;
  icon?: EligibilityItemIcon;
  iconTone?: EligibilityItemIconTone;
  iconLabel?: string;
};

/**
 * Contenido de la sección Eligibility.
 *
 * Propósito:
 * - Definir el contenido tipado del bloque de elegibilidad.
 */
export type EligibilityContent = {
  title: string;
  subtitle?: string;
  badges?: EligibilityBadge[];
  items: EligibilityItem[];
};

/**
 * EligibilitySection
 *
 * Propósito:
 * - Wrapper tipado de la sección de elegibilidad dentro del Home.
 *
 * Información adicional:
 * - El discriminante vive aquí, no en el JSON.
 */
export type EligibilitySection = {
  type: "eligibility";
  id: string;
  content: EligibilityContent;
};