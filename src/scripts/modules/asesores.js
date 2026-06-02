// src/scripts/modules/asesores.js

import { $, $$ } from '../utils/dom.js';
import { getFirstName, getPhoneHref, getWhatsAppHref } from '../utils/phone.js';
import { ASESORES } from '../data/asesores-data.js';

const DEFAULT_VISIBLE_ASESORES_LIMIT = 3;

/**
 * initAsesores
 *
 * Propósito:
 * - Cargar asesores desde un módulo local empaquetado por Vite.
 * - Renderizar 3 asesores principales cuando no hay slug válido.
 * - Renderizar una sola card cuando el slug corresponde a un asesor.
 */
export function initAsesores() {
  const slug = getCurrentSlug();

  renderAsesores(ASESORES, slug);
}

/**
 * getCurrentSlug
 *
 * Propósito:
 * - Obtener el primer segmento de la URL actual.
 *
 * Regresa:
 * - Slug limpio en minúsculas.
 */
function getCurrentSlug() {
  return window.location.pathname.replace(/^\//, '').split('/')[0].toLowerCase().trim();
}

/**
 * getAsesorEntries
 *
 * Propósito:
 * - Obtener únicamente asesores reales.
 * - Evitar romper si en el futuro vuelve a existir una llave default.
 *
 * Parámetros:
 * - data: Objeto completo de asesores.
 *
 * Regresa:
 * - Lista de pares [slug, asesor].
 */
function getAsesorEntries(data) {
  return Object.entries(data).filter(([key]) => key !== 'default');
}

/**
 * getVisibleAsesores
 *
 * Propósito:
 * - Mostrar un asesor por slug.
 * - Si no hay slug válido, mostrar únicamente los primeros 3 asesores.
 *
 * Parámetros:
 * - data: Objeto completo de asesores.
 * - slug: Slug actual de la URL.
 *
 * Regresa:
 * - Lista de asesores visibles.
 */
function getVisibleAsesores(data, slug) {
  if (slug && data[slug]) return [data[slug]];

  return getAsesorEntries(data)
    .slice(0, DEFAULT_VISIBLE_ASESORES_LIMIT)
    .map(([, asesor]) => asesor);
}

/**
 * escapeHtml
 *
 * Propósito:
 * - Evitar inyectar HTML accidentalmente desde la data.
 *
 * Parámetros:
 * - value: Texto a limpiar.
 *
 * Regresa:
 * - Texto seguro para innerHTML.
 */
function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

/**
 * formatNameByWords
 *
 * Propósito:
 * - Mostrar una palabra del nombre por línea.
 *
 * Parámetros:
 * - name: Nombre completo del asesor.
 *
 * Regresa:
 * - Nombre con saltos de línea HTML.
 */
function formatNameByWords(name) {
  return escapeHtml(name).trim().split(' ').join('<br />');
}

/**
 * getCampoType
 *
 * Propósito:
 * - Resolver el tipo de campo por configuración o por contenido.
 *
 * Parámetros:
 * - campo: Campo dinámico del asesor.
 *
 * Regresa:
 * - Tipo de campo: email, telefono, whatsapp o texto.
 */
function getCampoType(campo) {
  const value = String(campo?.valor || '').trim();

  if (campo?.tipo) return campo.tipo;
  if (value.includes('@')) return 'email';
  if (value.replace(/\D/g, '').length >= 10) return 'telefono';

  return 'texto';
}

/**
 * getCampoIconClass
 *
 * Propósito:
 * - Elegir el ícono según el tipo/contenido del campo.
 *
 * Parámetros:
 * - campo: Campo dinámico del asesor.
 *
 * Regresa:
 * - Clases de Font Awesome.
 */
function getCampoIconClass(campo) {
  const type = getCampoType(campo);

  if (type === 'email') return 'fa-regular fa-envelope';
  if (type === 'whatsapp') return 'fa-brands fa-whatsapp';
  if (type === 'telefono') return 'fa-solid fa-phone';

  return 'fa-regular fa-circle-dot';
}

/**
 * getCampoHref
 *
 * Propósito:
 * - Crear el href correcto según el tipo de campo.
 *
 * Parámetros:
 * - campo: Campo dinámico del asesor.
 *
 * Regresa:
 * - URL para el link.
 */
function getCampoHref(campo) {
  const type = getCampoType(campo);
  const value = String(campo?.valor || '').trim();

  if (type === 'email') return `mailto:${value}`;
  if (type === 'whatsapp') return getWhatsAppHref(value);
  if (type === 'telefono') return getPhoneHref(value);

  return '';
}

/**
 * createCampoMarkup
 *
 * Propósito:
 * - Crear el HTML para un campo dinámico.
 *
 * Parámetros:
 * - campo: Campo dinámico del asesor.
 *
 * Regresa:
 * - Markup del campo.
 */
function createCampoMarkup(campo) {
  const type = getCampoType(campo);
  const href = getCampoHref(campo);
  const value = escapeHtml(campo?.valor);
  const iconClass = getCampoIconClass(campo);
  const targetAttrs = type === 'whatsapp' ? ' target="_blank" rel="noopener noreferrer"' : '';

  if (!href) {
    return `
      <p class="asesor-link asesor-field asesor-field-${type}">
        <i class="${iconClass}" aria-hidden="true"></i>
        <span>${value}</span>
      </p>
    `;
  }

  return `
    <a class="asesor-link asesor-field asesor-field-${type}" href="${href}"${targetAttrs}>
      <i class="${iconClass}" aria-hidden="true"></i>
      <span>${value}</span>
    </a>
  `;
}

/**
 * createAsesorCard
 *
 * Propósito:
 * - Crear una card de asesor con nombre, campo1 y campo2.
 *
 * Parámetros:
 * - asesor: Información del asesor.
 * - isSingle: Indica si la card se mostrará sola por slug.
 *
 * Regresa:
 * - Elemento HTML de la card del asesor.
 */
function createAsesorCard(asesor, isSingle = false) {
  const card = document.createElement('article');
  const campos = Array.isArray(asesor.campos) ? asesor.campos.slice(0, 2) : [];

  card.className = `asesor-card ${isSingle ? 'is-single' : ''}`;
  card.innerHTML = `
    <div class="asesor-info">
      <h3 class="asesor-name">${formatNameByWords(asesor.nombre)}</h3>

      ${campos.map((campo) => createCampoMarkup(campo)).join('')}
    </div>

    <img class="asesor-photo" src="${asesor.fotografia}" alt="${escapeHtml(asesor.nombre)}" loading="lazy" />
  `;

  return card;
}

/**
 * clearAsesoresControls
 *
 * Propósito:
 * - Eliminar controles heredados del carrusel.
 *
 * Parámetros:
 * - carousel: Contenedor principal.
 */
function clearAsesoresControls(carousel) {
  carousel
    .querySelectorAll('.asesores-nav-button, .asesores-dots')
    .forEach((element) => element.remove());
}

/**
 * updateContactButtons
 *
 * Propósito:
 * - Cambiar los botones principales de contacto cuando existe un asesor por slug.
 *
 * Parámetros:
 * - asesor: Información del asesor activo.
 * - hasActiveAsesor: Indica si el slug corresponde a un asesor real.
 */
function updateContactButtons(asesor, hasActiveAsesor) {
  if (!hasActiveAsesor) return;

  const contactButtons = $$('a.btn[href="#contacto"], #header-cta-fixed');
  const label = `Contacta a ${getFirstName(asesor.nombre)}`;

  contactButtons.forEach((button) => {
    const icon = button.querySelector('svg');

    button.textContent = '';

    if (icon) button.appendChild(icon);

    button.append(` ${label}`);
  });
}

/**
 * renderAsesores
 *
 * Propósito:
 * - Renderizar 3 asesores principales cuando no hay slug válido.
 * - Renderizar una sola card cuando existe un slug válido.
 *
 * Parámetros:
 * - data: Objeto completo de asesores.
 * - slug: Primer segmento de la URL.
 */
function renderAsesores(data, slug) {
  const carousel = $('#asesores-carousel');
  const track = $('#asesores-track');
  const nombreTitle = $('#contact-nombre-title');
  const hasActiveAsesor = Boolean(slug && data[slug]);
  const visibleAsesores = getVisibleAsesores(data, slug);

  if (!carousel || !track) return;

  track.innerHTML = '';
  track.style.transform = '';
  clearAsesoresControls(carousel);

  carousel.classList.toggle('is-single', hasActiveAsesor);
  carousel.classList.toggle('is-static', !hasActiveAsesor);
  carousel.classList.remove('is-carousel', 'is-marquee', 'has-single-page');

  if (nombreTitle) {
    nombreTitle.textContent = hasActiveAsesor
      ? `habla con ${data[slug].nombre}`
      : 'estamos para ayudarte';
  }

  visibleAsesores.forEach((asesor) => {
    track.appendChild(createAsesorCard(asesor, hasActiveAsesor));
  });

  if (hasActiveAsesor) {
    updateContactButtons(data[slug], true);
  }
}