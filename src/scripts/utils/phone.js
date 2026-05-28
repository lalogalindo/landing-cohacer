/**
 * normalizePhoneForLink
 *
 * Propósito:
 * - Limpiar un número telefónico visible para usarlo en enlaces.
 *
 * Parámetros:
 * - phone: Número telefónico tal como viene del JSON.
 *
 * Regresa:
 * - Número telefónico sin espacios ni caracteres visuales.
 */
export function normalizePhoneForLink(phone) {
  return String(phone || '').replace(/\D/g, '');
}

/**
 * getPhoneWithCountryCode
 *
 * Propósito:
 * - Asegurar que un número telefónico tenga código de México.
 *
 * Parámetros:
 * - phone: Número telefónico tal como viene del JSON.
 *
 * Regresa:
 * - Número telefónico con código 52.
 */
export function getPhoneWithCountryCode(phone) {
  const cleanPhone = normalizePhoneForLink(phone);

  if (!cleanPhone) return '';

  return cleanPhone.startsWith('52') ? cleanPhone : `52${cleanPhone}`;
}

/**
 * getWhatsAppHref
 *
 * Propósito:
 * - Construir una liga válida de WhatsApp desde el número visible.
 *
 * Parámetros:
 * - phone: Número de WhatsApp tal como viene del JSON.
 *
 * Regresa:
 * - URL de WhatsApp lista para usarse en href.
 */
export function getWhatsAppHref(phone) {
  return `https://wa.me/${getPhoneWithCountryCode(phone)}`;
}

/**
 * getPhoneHref
 *
 * Propósito:
 * - Construir una liga telefónica para abrir la app de llamadas en móvil.
 *
 * Parámetros:
 * - phone: Número telefónico tal como viene del JSON.
 *
 * Regresa:
 * - URL tel lista para usarse en href.
 */
export function getPhoneHref(phone) {
  return `tel:+${getPhoneWithCountryCode(phone)}`;
}

/**
 * getFirstName
 *
 * Propósito:
 * - Obtener el primer nombre del asesor para textos cortos de CTA.
 *
 * Parámetros:
 * - fullName: Nombre completo del asesor.
 *
 * Regresa:
 * - Primer nombre disponible.
 */
export function getFirstName(fullName) {
  return String(fullName || '').trim().split(' ')[0] || '';
}
