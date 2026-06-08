// src/esmi/esmi-whatsapp.js

import { ASESORES } from '../scripts/data/asesores-data.js';

const DEFAULT_WHATSAPP_PHONE = '5215615264223';
const RESERVED_ROUTES = [
  '',
  'aviso-privacidad',
  'aviso-privacidad.html',
  'terminos-condiciones',
  'terminos-condiciones.html',
];

/**
 * Normaliza un teléfono para usarlo directamente en enlaces de WhatsApp.
 * @param {string} phone Teléfono visible o ya normalizado.
 * @returns {string} Teléfono con solo dígitos o el fallback institucional si está vacío.
 */
function normalizeWhatsappPhone(phone) {
  const cleanPhone = String(phone || '').replace(/\D/g, '');

  if (!cleanPhone) {
    return DEFAULT_WHATSAPP_PHONE;
  }

  if (cleanPhone.startsWith('52')) {
    return cleanPhone;
  }

  return `52${cleanPhone}`;
}

/**
 * Obtiene el primer teléfono usable desde la ficha del asesor seleccionado.
 * @param {object | null} advisor Asesor detectado a partir del slug de la URL.
 * @returns {string} Teléfono visible del asesor o teléfono fallback de COHACER.
 */
function getAdvisorPhone(advisor) {
  const phoneField = advisor?.campos?.find((campo) => {
    const type = String(campo?.tipo || '').toLowerCase();
    const value = String(campo?.valor || '');

    return type === 'telefono' || type === 'whatsapp' || value.replace(/\D/g, '').length >= 10;
  });

  return phoneField?.valor || DEFAULT_WHATSAPP_PHONE;
}

/**
 * Devuelve el primer segmento de la URL actual para buscar un asesor por slug.
 * @returns {string} Slug limpio o cadena vacía cuando la ruta está reservada.
 */
function getCurrentSlug() {
  if (typeof window === 'undefined') {
    return '';
  }

  const slug = window.location.pathname
    .replace(/^\//, '')
    .split('/')[0]
    .toLowerCase()
    .trim();

  return RESERVED_ROUTES.includes(slug) ? '' : slug;
}

/**
 * Resuelve el asesor activo desde el slug de la URL, si existe en el catálogo local.
 * @returns {{slug: string, name: string, phone: string, hasAdvisor: boolean}} Datos mínimos del asesor para Esmi.
 */
export function resolveActiveAdvisor() {
  const slug = getCurrentSlug();
  const advisor = slug ? ASESORES[slug] : null;

  if (!advisor) {
    return {
      slug: '',
      name: '',
      phone: DEFAULT_WHATSAPP_PHONE,
      hasAdvisor: false,
    };
  }

  return {
    slug,
    name: advisor.nombre,
    phone: getAdvisorPhone(advisor),
    hasAdvisor: true,
  };
}

/**
 * Devuelve un valor legible o una alternativa segura cuando el dato no existe.
 * @param {string | number | null | undefined} value Valor guardado en el contexto de Esmi.
 * @param {string} fallback Texto que se mostrará cuando el valor esté vacío.
 * @returns {string} Valor preparado para incluirse en un resumen conversacional.
 */
function formatContextValue(value, fallback = 'No indicado') {
  return value === null || value === undefined || value === '' ? fallback : String(value);
}

/**
 * Construye un resumen breve del contexto acumulado para continuar por WhatsApp.
 * @param {object} context Contexto persistente de la conversación actual.
 * @returns {string} Resumen seguro con solo datos aportados por la persona usuaria.
 */
export function buildWhatsappContextSummary(context = {}) {
  const interests = Array.isArray(context.interests) && context.interests.length
    ? context.interests.join(', ')
    : 'No indicado';

  return [
    `Nombre: ${formatContextValue(context.name)}`,
    `Teléfono: ${formatContextValue(context.phone)}`,
    `Área laboral: ${formatContextValue(context.workArea)}`,
    `Experiencia: ${formatContextValue(context.experienceYears)} años`,
    `Intereses: ${interests}`,
  ].join('\n');
}

/**
 * Genera el mensaje inicial que se enviará al asesor de COHACER por WhatsApp.
 * @param {object} context Contexto persistente recolectado por Esmi.
 * @param {object} advisor Asesor activo o fallback institucional.
 * @returns {string} Mensaje listo para codificarse en una URL de WhatsApp.
 */
export function buildWhatsappMessage(context = {}, advisor = resolveActiveAdvisor()) {
  const greeting = advisor.hasAdvisor && advisor.name
    ? `Hola ${advisor.name}, quiero recibir atención personalizada sobre COHACER.`
    : 'Hola, quiero recibir atención personalizada sobre COHACER.';

  return [
    greeting,
    '',
    'Resumen de mi conversación con Esmi:',
    buildWhatsappContextSummary(context),
  ].join('\n');
}

/**
 * Crea un enlace de WhatsApp con el resumen contextual de la conversación.
 * @param {object} context Contexto persistente recolectado por Esmi.
 * @param {object} advisor Asesor activo o fallback institucional.
 * @returns {string} URL de WhatsApp con mensaje codificado.
 */
export function createWhatsappUrl(context = {}, advisor = resolveActiveAdvisor()) {
  const phone = normalizeWhatsappPhone(advisor.phone);

  return `https://wa.me/${phone}?text=${encodeURIComponent(buildWhatsappMessage(context, advisor))}`;
}
