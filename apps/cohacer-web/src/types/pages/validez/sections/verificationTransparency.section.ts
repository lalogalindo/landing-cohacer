/**
 * Tonos visuales permitidos para las tarjetas superiores.
 */
export type VerificationTransparencyCardTone = string;

/**
 * Íconos permitidos para las tarjetas superiores.
 */
export type VerificationTransparencyCardIcon = string;

/**
 * Tarjeta superior de verificación.
 *
 * Propósito:
 * - Representar cada mensaje destacado del bloque principal.
 */
export type VerificationTransparencyCard = {
  title: string;
  description?: string;
  icon: VerificationTransparencyCardIcon;
  tone: VerificationTransparencyCardTone;
};

/**
 * Enlace oficial individual.
 *
 * Propósito:
 * - Representar una referencia externa verificable.
 */
export type VerificationTransparencyLinkItem = {
  title: string;
  subtitle?: string;
  label: string;
  href: string;
};

/**
 * Grupo de enlaces oficiales.
 *
 * Propósito:
 * - Agrupar enlaces relacionados dentro del panel inferior.
 */
export type VerificationTransparencyLinkGroup = {
  title?: string;
  items: VerificationTransparencyLinkItem[];
};

/**
 * Contenido de la sección VerificationTransparency.
 *
 * Propósito:
 * - Definir la estructura tipada del contenido
 *   consumido por la sección.
 */
export type VerificationTransparencyContent = {
  title: string;
  subtitle?: string;
  cards: VerificationTransparencyCard[];
  linksTitle: string;
  linkGroups: VerificationTransparencyLinkGroup[];
};