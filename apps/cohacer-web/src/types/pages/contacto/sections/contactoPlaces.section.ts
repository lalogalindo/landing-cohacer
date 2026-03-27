/**
 * ContactoPlace
 *
 * Propósito:
 * - Representar una oficina o punto de atención
 *   dentro de la sección de ubicaciones.
 */
export type ContactoPlace = {
  title: string;
  location: string;
  addressLines: string[];
  phone?: string;
  email?: string;
  mapLabel: string;
  mapHref: string;
};

/**
 * ContactoPlacesContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   de oficinas de la página de Contacto.
 */
export type ContactoPlacesContent = {
  title: string;
  description: string;
  places: ContactoPlace[];
};