import { $, $$ } from '../utils/dom.js';
import { getFirstName, getPhoneHref, getWhatsAppHref } from '../utils/phone.js';
import { ASESORES } from '../data/asesores-data.js';

/**
 * initAsesores
 *
 * Propósito:
 * - Cargar asesores desde un módulo local empaquetado por Vite.
 * - Evitar depender de archivos JSON públicos en producción.
 * - Renderizar carrusel general o card individual según slug.
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
 * getVisibleAsesores
 *
 * Propósito:
 * - Definir si se muestra un asesor por slug o todos los asesores reales.
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

  return Object.entries(data)
    .filter(([key]) => key !== 'default')
    .map(([, asesor]) => asesor);
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
  return String(name || '').trim().split(' ').join('<br />');
}

/**
 * createAsesorCard
 *
 * Propósito:
 * - Crear una card de asesor con fotografía, nombre, WhatsApp, teléfono y horario.
 *
 * Parámetros:
 * - asesor: Información del asesor proveniente del JSON.
 * - isSingle: Indica si la card se mostrará sola por slug.
 *
 * Regresa:
 * - Elemento HTML de la card del asesor.
 */
function createAsesorCard(asesor, isSingle = false) {
  const card = document.createElement('article');

  card.className = `asesor-card ${isSingle ? 'is-single' : ''}`;
  card.innerHTML = `
    <div class="asesor-info">
      <h3 class="asesor-name">${formatNameByWords(asesor.nombre)}</h3>

      <a class="asesor-link asesor-whatsapp" href="${getWhatsAppHref(asesor.whatsapp)}" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
        <span>${asesor.whatsapp}</span>
      </a>

      <a class="asesor-link asesor-phone" href="${getPhoneHref(asesor.telefono)}">
        <i class="fa-solid fa-phone" aria-hidden="true"></i>
        <span>${asesor.telefono}</span>
      </a>

      <p class="asesor-schedule">
        <i class="fa-regular fa-calendar" aria-hidden="true"></i>
        <span>${asesor.horario}</span>
      </p>
    </div>

    <img class="asesor-photo" src="${asesor.fotografia}" alt="${asesor.nombre}" loading="lazy" />
  `;

  return card;
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
 * - Renderizar todos los asesores en modo marquesina cuando no hay slug.
 * - Renderizar una sola card en layout cómodo cuando existe un slug válido.
 *
 * Parámetros:
 * - data: Objeto completo de asesores proveniente del JSON.
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
  carousel.classList.toggle('is-single', hasActiveAsesor);
  carousel.classList.toggle('is-marquee', !hasActiveAsesor);

  if (nombreTitle) {
    nombreTitle.textContent = hasActiveAsesor
      ? `habla con ${data[slug].nombre}`
      : 'estamos para ayudarte';
  }

  if (hasActiveAsesor) {
    track.appendChild(createAsesorCard(data[slug], true));
    updateContactButtons(data[slug], true);
    return;
  }

  visibleAsesores.concat(visibleAsesores).forEach((asesor) => {
    track.appendChild(createAsesorCard(asesor));
  });
}
