// src/scripts/modules/asesores.js

import { $, $$ } from '../utils/dom.js';
import { getFirstName, getWhatsAppHref } from '../utils/phone.js';
import { ASESORES } from '../data/asesores-data.js';

const DEFAULT_VISIBLE_ASESORES_LIMIT = 3;
const DEFAULT_CTA_PHONE = '56 1526 4223';

const PRIMARY_CONTACT_CTA_SELECTORS = [
  '[data-asesor-cta="primary"]',
  'a.btn[href="#contacto"]',
  '#header-cta-fixed',
];

const WHATSAPP_CONTACT_CTA_SELECTORS = [
  '[data-asesor-cta="whatsapp"]',
  'a[href*="wa.me"]',
  'a[href*="api.whatsapp.com"]',
];

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

const RESERVED_ROUTES = [
  '',
  'aviso-privacidad',
  'aviso-privacidad.html',
  'terminos-condiciones',
  'terminos-condiciones.html',
];

/**
 * getCurrentSlug
 *
 * Propósito:
 * - Obtener el primer segmento de la URL actual.
 * - Evitar que rutas legales o rutas reservadas se interpreten como slugs de asesor.
 *
 * Regresa:
 * - Slug limpio en minúsculas.
 * - Cadena vacía cuando la ruta no corresponde a un asesor.
 */
function getCurrentSlug() {
  const slug = window.location.pathname
    .replace(/^\//, '')
    .split('/')[0]
    .toLowerCase()
    .trim();

  if (RESERVED_ROUTES.includes(slug)) {
    return '';
  }

  return slug;
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
  if (value.replace(/\D/g, '').length >= 10) return 'whatsapp';

  return 'texto';
}

/**
 * getCampoIconClass
 *
 * Propósito:
 * - Elegir el ícono según el tipo/contenido del campo.
 * - Mostrar WhatsApp para campos de teléfono porque el contacto debe abrir WhatsApp.
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
  if (type === 'whatsapp' || type === 'telefono') return 'fa-brands fa-whatsapp';

  return 'fa-regular fa-circle-dot';
}

/**
 * getCampoHref
 *
 * Propósito:
 * - Crear el href correcto según el tipo de campo.
 * - Enviar los teléfonos a WhatsApp en lugar de llamada telefónica.
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
  if (type === 'whatsapp' || type === 'telefono') return getWhatsAppHref(value);

  return '';
}

/**
 * createCampoMarkup
 *
 * Propósito:
 * - Crear el HTML para un campo dinámico.
 * - Abrir WhatsApp en nueva pestaña cuando el campo sea teléfono o WhatsApp.
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
  const isWhatsAppContact = type === 'whatsapp' || type === 'telefono';
  const targetAttrs = isWhatsAppContact ? ' target="_blank" rel="noopener noreferrer"' : '';
  const whatsappClass = isWhatsAppContact ? ' asesor-field-whatsapp' : '';

  if (!href) {
    return `
      <p class="asesor-link asesor-field asesor-field-${type}${whatsappClass}">
        <i class="${iconClass}" aria-hidden="true"></i>
        <span>${value}</span>
      </p>
    `;
  }

  return `
    <a class="asesor-link asesor-field asesor-field-${type}${whatsappClass}" href="${href}"${targetAttrs}>
      <i class="${iconClass}" aria-hidden="true"></i>
      <span>${value}</span>
    </a>
  `;
}

/**
 * createAsesorCard
 *
 * Propósito:
 * - Crear una card de asesor con nombre, campo1, campo2 y horario.
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

      ${
        asesor.horario
          ? `
            <p class="asesor-schedule">
              <i class="fa-regular fa-calendar" aria-hidden="true"></i>
              <span>${escapeHtml(asesor.horario)}</span>
            </p>
          `
          : ''
      }
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
 * getUniqueElements
 *
 * Propósito:
 * - Obtener elementos únicos a partir de una lista de selectores.
 * - Evitar actualizar dos veces el mismo botón cuando coincide con varios selectores.
 *
 * Parámetros:
 * - selectors: Lista de selectores CSS.
 *
 * Regresa:
 * - Lista de elementos HTML únicos.
 */
function getUniqueElements(selectors) {
  return selectors
    .flatMap((selector) => Array.from($$(selector)))
    .filter((element, index, elements) => elements.indexOf(element) === index);
}

/**
 * isInsideAsesorCard
 *
 * Propósito:
 * - Validar si un elemento pertenece a una card de asesor.
 * - Evitar modificar teléfonos, correos o links internos de las cards.
 *
 * Parámetros:
 * - element: Elemento HTML a validar.
 *
 * Regresa:
 * - Booleano que indica si el elemento está dentro de una card.
 */
function isInsideAsesorCard(element) {
  return Boolean(element.closest('.asesor-card'));
}

/**
 * getPrimaryContactButtons
 *
 * Propósito:
 * - Obtener los botones CTA principales.
 * - Estos botones muestran textos como "Contacta a tu asesor" o "Contacta a Esmi".
 *
 * Regresa:
 * - Lista de botones CTA principales.
 */
function getPrimaryContactButtons() {
  return getUniqueElements(PRIMARY_CONTACT_CTA_SELECTORS).filter((button) => {
    return !isInsideAsesorCard(button);
  });
}

/**
 * getWhatsAppContactButtons
 *
 * Propósito:
 * - Obtener los botones CTA específicos de WhatsApp.
 * - Excluir botones principales que ya fueron marcados como CTA primario.
 *
 * Regresa:
 * - Lista de botones CTA de WhatsApp.
 */
function getWhatsAppContactButtons() {
  return getUniqueElements(WHATSAPP_CONTACT_CTA_SELECTORS).filter((button) => {
    const isPrimaryCta = button.dataset.asesorCta === 'primary';

    return !isPrimaryCta && !isInsideAsesorCard(button);
  });
}

/**
 * getPrimaryContactPhone
 *
 * Propósito:
 * - Obtener el primer teléfono disponible del asesor activo.
 * - Mantener separado el teléfono de CTA del contenido visible de las cards.
 *
 * Parámetros:
 * - asesor: Información del asesor activo.
 *
 * Regresa:
 * - Teléfono principal del asesor o teléfono general de CTA.
 */
function getPrimaryContactPhone(asesor) {
  const phoneField = asesor?.campos?.find((campo) => {
    const value = String(campo?.valor || '');
    const type = String(campo?.tipo || '');

    return type === 'telefono' || type === 'whatsapp' || value.replace(/\D/g, '').length >= 10;
  });

  return phoneField?.valor || DEFAULT_CTA_PHONE;
}

/**
 * getPrimaryContactLabel
 *
 * Propósito:
 * - Definir el texto del botón CTA principal.
 *
 * Parámetros:
 * - asesor: Información del asesor activo.
 * - hasActiveAsesor: Indica si el slug corresponde a un asesor real.
 *
 * Regresa:
 * - Texto visible para el CTA principal.
 */
function getPrimaryContactLabel(asesor, hasActiveAsesor) {
  if (hasActiveAsesor) {
    return `Contacta a ${getFirstName(asesor.nombre)}`;
  }

  return 'Contacta a Esmi';
}

/**
 * setButtonContent
 *
 * Propósito:
 * - Reescribir el contenido visible de un botón.
 * - Opcionalmente agregar un ícono antes del texto.
 *
 * Parámetros:
 * - button: Botón que se va a actualizar.
 * - label: Texto visible del botón.
 * - iconClass: Clases del ícono opcional.
 */
function setButtonContent(button, label, iconClass = '') {
  button.textContent = '';

  if (iconClass) {
    const icon = document.createElement('i');

    icon.className = iconClass;
    icon.setAttribute('aria-hidden', 'true');

    button.appendChild(icon);
    button.append(' ');
  }

  button.append(label);
}

/**
 * updateContactButtons
 *
 * Propósito:
 * - Cambiar los botones principales de contacto.
 * - Mantener textos distintos para el CTA izquierdo y el CTA de WhatsApp.
 * - Usar el teléfono del asesor cuando hay slug válido.
 * - Usar el teléfono general cuando no hay slug o el slug no existe.
 * - No modificar links dentro de las cards.
 *
 * Parámetros:
 * - asesor: Información del asesor activo.
 * - hasActiveAsesor: Indica si el slug corresponde a un asesor real.
 */
function updateContactButtons(asesor, hasActiveAsesor) {
  const phone = hasActiveAsesor ? getPrimaryContactPhone(asesor) : DEFAULT_CTA_PHONE;
  const whatsappHref = getWhatsAppHref(phone);
  const primaryLabel = getPrimaryContactLabel(asesor, hasActiveAsesor);
  const primaryButtons = getPrimaryContactButtons();

  primaryButtons.forEach((button) => {
    button.dataset.asesorCta = 'primary';

    setButtonContent(button, primaryLabel);

    button.setAttribute('href', whatsappHref);
    button.setAttribute('target', '_blank');
    button.setAttribute('rel', 'noopener noreferrer');
  });

  getWhatsAppContactButtons().forEach((button) => {
    button.dataset.asesorCta = 'whatsapp';

    setButtonContent(button, 'Escribir por WhatsApp', 'fa-brands fa-whatsapp');

    button.setAttribute('href', whatsappHref);
    button.setAttribute('target', '_blank');
    button.setAttribute('rel', 'noopener noreferrer');
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

  updateContactButtons(hasActiveAsesor ? data[slug] : null, hasActiveAsesor);
  renderAdvisorVisitInfo(hasActiveAsesor);
}

const DEFAULT_VISIT_INFO = {
  title: 'Visítenos en:',
  place: 'WTC-CDMX',
  address: 'Piso 36 Oficina 9 Montecito 38, Col. Nápoles C.P. 03810',
  phone: 'Tel: 55 8661 7065',
};

const SLUG_VISIT_INFO = {
  title: 'Visítenos en:',
  place: 'WTC-CDMX',
  address: 'Piso 36 Oficina 9 Montecito 38, Col. Nápoles C.P. 03810',
};

/**
 * getVisitInfo
 *
 * Propósito:
 * - Obtener la información de visita que debe mostrarse según el contexto actual.
 *
 * Parámetros:
 * - hasSlug: Indica si la página se está mostrando con un slug de asesor.
 *
 * Regresa:
 * - Información de dirección para renderizar.
 */
function getVisitInfo(hasSlug) {
  return hasSlug ? SLUG_VISIT_INFO : DEFAULT_VISIT_INFO;
}

/**
 * renderAdvisorVisitInfo
 *
 * Propósito:
 * - Renderizar el bloque de dirección debajo de los asesores o debajo del asesor activo.
 *
 * Parámetros:
 * - hasSlug: Indica si existe un slug activo en la URL.
 */
function renderAdvisorVisitInfo(hasSlug) {
  const visitInfoElement = document.getElementById('advisorVisitInfo');

  if (!visitInfoElement) {
    return;
  }

  const visitInfo = getVisitInfo(hasSlug);

  visitInfoElement.innerHTML = `
    <p class="advisor-visit-label">${visitInfo.title}</p>
    <p class="advisor-visit-place">${visitInfo.place}</p>
    <p class="advisor-visit-address">${visitInfo.address}</p>
    ${visitInfo.phone ? `<p class="advisor-visit-phone">${visitInfo.phone}</p>` : ''}
  `;
}