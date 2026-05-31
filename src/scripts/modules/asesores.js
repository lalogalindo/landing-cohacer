// src/scripts/modules/asesores.js

import { $, $$ } from '../utils/dom.js';
import { getFirstName, getPhoneHref, getWhatsAppHref } from '../utils/phone.js';
import { ASESORES } from '../data/asesores-data.js';

const CAROUSEL_GAP_FALLBACK = 24;

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
 * - asesor: Información del asesor proveniente del módulo local.
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
 * createCarouselButton
 *
 * Propósito:
 * - Crear un botón de navegación para el carrusel de asesores.
 *
 * Parámetros:
 * - direction: Dirección del botón, puede ser previous o next.
 *
 * Regresa:
 * - Botón HTML configurado.
 */
function createCarouselButton(direction) {
  const button = document.createElement('button');
  const isPrevious = direction === 'previous';
  const icon = isPrevious ? 'left' : 'right';
  const label = isPrevious ? 'Ver asesores anteriores' : 'Ver siguientes asesores';
  const className = isPrevious ? 'asesores-nav-prev' : 'asesores-nav-next';

  button.type = 'button';
  button.className = `asesores-nav-button ${className}`;
  button.setAttribute('aria-label', label);
  button.innerHTML = `<i class="fa-solid fa-chevron-${icon}" aria-hidden="true"></i>`;

  return button;
}

/**
 * createCarouselDot
 *
 * Propósito:
 * - Crear un dot de navegación para una página del carrusel.
 *
 * Parámetros:
 * - pageIndex: Índice visual del dot.
 *
 * Regresa:
 * - Botón HTML configurado como dot.
 */
function createCarouselDot(pageIndex) {
  const dot = document.createElement('button');

  dot.type = 'button';
  dot.className = 'asesores-dot';
  dot.setAttribute('aria-label', `Ir al grupo de asesores ${pageIndex + 1}`);

  return dot;
}

/**
 * clearCarouselControls
 *
 * Propósito:
 * - Eliminar botones y dots previos antes de volver a renderizar el carrusel.
 *
 * Parámetros:
 * - carousel: Contenedor principal del carrusel.
 */
function clearCarouselControls(carousel) {
  carousel
    .querySelectorAll('.asesores-nav-button, .asesores-dots')
    .forEach((element) => element.remove());
}

/**
 * getAsesorCards
 *
 * Propósito:
 * - Obtener las cards reales renderizadas dentro del track.
 *
 * Parámetros:
 * - track: Contenedor de cards.
 *
 * Regresa:
 * - Lista de cards del carrusel.
 */
function getAsesorCards(track) {
  return Array.from(track.querySelectorAll('.asesor-card'));
}

/**
 * getCarouselGap
 *
 * Propósito:
 * - Obtener el gap horizontal real del track.
 *
 * Parámetros:
 * - track: Contenedor de cards.
 *
 * Regresa:
 * - Gap numérico en pixeles.
 */
function getCarouselGap(track) {
  const styles = window.getComputedStyle(track);
  const gap = Number.parseFloat(styles.columnGap || styles.gap);

  return Number.isNaN(gap) ? CAROUSEL_GAP_FALLBACK : gap;
}

/**
 * getItemsPerPage
 *
 * Propósito:
 * - Calcular cuántas cards caben visualmente por página.
 *
 * Parámetros:
 * - carousel: Contenedor visible del carrusel.
 * - track: Contenedor de cards.
 * - cards: Lista de cards renderizadas.
 *
 * Regresa:
 * - Número seguro de cards por página.
 */
function getItemsPerPage(carousel, track, cards) {
  const firstCard = cards[0];

  if (!firstCard) return 1;

  const gap = getCarouselGap(track);
  const cardWidth = firstCard.getBoundingClientRect().width;
  const carouselWidth = carousel.getBoundingClientRect().width;

  if (!cardWidth || !carouselWidth) return 1;

  return Math.max(1, Math.floor((carouselWidth + gap) / (cardWidth + gap)));
}

/**
 * getPageIndexes
 *
 * Propósito:
 * - Crear los índices iniciales de cada página del carrusel.
 *
 * Parámetros:
 * - cards: Lista de cards renderizadas.
 * - itemsPerPage: Cantidad de cards visibles por página.
 *
 * Regresa:
 * - Lista de índices iniciales por página.
 */
function getPageIndexes(cards, itemsPerPage) {
  const maxStartIndex = Math.max(0, cards.length - itemsPerPage);
  const pageIndexes = [];

  for (let index = 0; index < cards.length; index += itemsPerPage) {
    const safeIndex = Math.min(index, maxStartIndex);

    if (!pageIndexes.includes(safeIndex)) {
      pageIndexes.push(safeIndex);
    }
  }

  if (!pageIndexes.includes(maxStartIndex)) {
    pageIndexes.push(maxStartIndex);
  }

  return pageIndexes;
}

/**
 * getSafeTrackOffset
 *
 * Propósito:
 * - Calcular el desplazamiento horizontal sin dejar espacios vacíos al final.
 *
 * Parámetros:
 * - carousel: Contenedor visible del carrusel.
 * - track: Contenedor de cards.
 * - card: Card objetivo.
 *
 * Regresa:
 * - Desplazamiento horizontal seguro en pixeles.
 */
function getSafeTrackOffset(carousel, track, card) {
  if (!card) return 0;

  const maxOffset = Math.max(0, track.scrollWidth - carousel.getBoundingClientRect().width);

  return Math.min(card.offsetLeft, maxOffset);
}

/**
 * updateCarouselControls
 *
 * Propósito:
 * - Actualizar estado visual de dots, botones y desplazamiento del track.
 *
 * Parámetros:
 * - state: Estado interno del carrusel.
 */
function updateCarouselControls(state) {
  const targetIndex = state.pageIndexes[state.activePageIndex] || 0;
  const targetCard = state.cards[targetIndex];
  const offset = getSafeTrackOffset(state.carousel, state.track, targetCard);

  state.track.style.transform = `translate3d(-${offset}px, 0, 0)`;

  Array.from(state.dots.children).forEach((dot, index) => {
    const isActive = index === state.activePageIndex;

    dot.dataset.active = String(isActive);
    dot.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

/**
 * setActiveAsesorPage
 *
 * Propósito:
 * - Cambiar la página activa del carrusel.
 *
 * Parámetros:
 * - state: Estado interno del carrusel.
 * - pageIndex: Índice de página solicitado.
 */
function setActiveAsesorPage(state, pageIndex) {
  const lastPageIndex = state.pageIndexes.length - 1;

  state.activePageIndex = Math.min(Math.max(pageIndex, 0), lastPageIndex);

  updateCarouselControls(state);
}

/**
 * goToAdjacentAsesorPage
 *
 * Propósito:
 * - Avanzar o retroceder una página del carrusel con navegación circular.
 *
 * Parámetros:
 * - state: Estado interno del carrusel.
 * - direction: Dirección numérica del movimiento.
 */
function goToAdjacentAsesorPage(state, direction) {
  const totalPages = state.pageIndexes.length;

  if (totalPages <= 1) return;

  const nextPageIndex = (state.activePageIndex + direction + totalPages) % totalPages;

  setActiveAsesorPage(state, nextPageIndex);
}

/**
 * rebuildAsesoresPagination
 *
 * Propósito:
 * - Reconstruir dots e índices cuando cambia el tamaño disponible del carrusel.
 *
 * Parámetros:
 * - state: Estado interno del carrusel.
 */
function rebuildAsesoresPagination(state) {
  const itemsPerPage = getItemsPerPage(state.carousel, state.track, state.cards);

  state.pageIndexes = getPageIndexes(state.cards, itemsPerPage);
  state.activePageIndex = Math.min(state.activePageIndex, state.pageIndexes.length - 1);
  state.dots.innerHTML = '';

  state.pageIndexes.forEach((_, pageIndex) => {
    const dot = createCarouselDot(pageIndex);

    dot.addEventListener('click', () => {
      setActiveAsesorPage(state, pageIndex);
    });

    state.dots.appendChild(dot);
  });

  state.carousel.classList.toggle('has-single-page', state.pageIndexes.length <= 1);

  updateCarouselControls(state);
}

/**
 * initAsesoresNavigation
 *
 * Propósito:
 * - Agregar botones, dots y comportamiento navegable al carrusel de asesores.
 *
 * Parámetros:
 * - carousel: Contenedor principal del carrusel.
 * - track: Contenedor de cards.
 */
function initAsesoresNavigation(carousel, track) {
  const cards = getAsesorCards(track);

  if (cards.length <= 1) return;

  const previousButton = createCarouselButton('previous');
  const nextButton = createCarouselButton('next');
  const dots = document.createElement('div');

  dots.className = 'asesores-dots';
  dots.setAttribute('aria-label', 'Navegación de asesores');

  const state = {
    carousel,
    track,
    cards,
    dots,
    activePageIndex: 0,
    pageIndexes: [],
  };

  previousButton.addEventListener('click', () => {
    goToAdjacentAsesorPage(state, -1);
  });

  nextButton.addEventListener('click', () => {
    goToAdjacentAsesorPage(state, 1);
  });

  carousel.appendChild(previousButton);
  carousel.appendChild(nextButton);
  carousel.appendChild(dots);

  rebuildAsesoresPagination(state);

  window.addEventListener('resize', () => {
    rebuildAsesoresPagination(state);
  });
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
 * - Renderizar todos los asesores en modo carrusel cuando no hay slug.
 * - Renderizar una sola card en layout cómodo cuando existe un slug válido.
 *
 * Parámetros:
 * - data: Objeto completo de asesores proveniente del módulo local.
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
  clearCarouselControls(carousel);

  carousel.classList.toggle('is-single', hasActiveAsesor);
  carousel.classList.toggle('is-carousel', !hasActiveAsesor);
  carousel.classList.remove('is-marquee', 'has-single-page');

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

  visibleAsesores.forEach((asesor) => {
    track.appendChild(createAsesorCard(asesor));
  });

  initAsesoresNavigation(carousel, track);
}