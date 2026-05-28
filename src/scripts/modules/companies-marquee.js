import { COMPANIES_CONTENT } from '../data/companies-data.js';

/**
 * chunkBy
 *
 * Propósito:
 * - Dividir un arreglo en filas con un máximo definido.
 *
 * Parámetros:
 * - items: Arreglo original.
 * - perRow: Máximo de elementos por fila.
 *
 * Regresa:
 * - Arreglo dividido en filas.
 */
function chunkBy(items, perRow) {
  const safePerRow = Math.max(1, perRow);
  const rows = [];

  for (let i = 0; i < items.length; i += safePerRow) {
    rows.push(items.slice(i, i + safePerRow));
  }

  return rows;
}

/**
 * duplicateRow
 *
 * Propósito:
 * - Duplicar una fila para crear un loop continuo de marquee.
 *
 * Parámetros:
 * - row: Fila original de empresas.
 *
 * Regresa:
 * - Fila duplicada.
 */
function duplicateRow(row) {
  return row.concat(row);
}

/**
 * getVisibleClass
 *
 * Propósito:
 * - Obtener la clase de ancho del viewport según el número máximo visible.
 *
 * Parámetros:
 * - visibleCount: Cantidad máxima de logos visibles.
 *
 * Regresa:
 * - Clase CSS correspondiente.
 */
function getVisibleClass(visibleCount) {
  if (visibleCount === 2) return 'companies-visible-2';
  if (visibleCount === 3) return 'companies-visible-3';

  return 'companies-visible-4';
}

/**
 * createCompanyLink
 *
 * Propósito:
 * - Crear un enlace clickeable para una empresa.
 *
 * Parámetros:
 * - company: Empresa con name, url y src.
 *
 * Regresa:
 * - Elemento anchor con imagen.
 */
function createCompanyLink(company) {
  const anchor = document.createElement('a');

  anchor.className = 'company-logo-link';
  anchor.href = company.url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.setAttribute('aria-label', company.name);

  anchor.innerHTML = `
    <img
      src="${company.src}"
      alt="${company.name}"
      loading="lazy"
    />
  `;

  return anchor;
}

/**
 * createMarqueeRow
 *
 * Propósito:
 * - Crear una fila marquee con dirección alternada.
 *
 * Parámetros:
 * - row: Empresas de la fila.
 * - rowIndex: Índice de la fila.
 * - visibleCount: Cantidad máxima de logos visibles.
 *
 * Regresa:
 * - Elemento HTML de la fila marquee.
 */
function createMarqueeRow(row, rowIndex, visibleCount) {
  const viewport = document.createElement('div');
  const blurLeft = document.createElement('div');
  const blurRight = document.createElement('div');
  const inner = document.createElement('div');
  const track = document.createElement('div');

  const directionClass = rowIndex % 2 === 1
    ? 'animate-marquee-right'
    : 'animate-marquee-left';

  viewport.className = `companies-marquee-viewport marquee-viewport ${getVisibleClass(visibleCount)}`;
  blurLeft.className = 'marquee-blur marquee-blur-left';
  blurRight.className = 'marquee-blur marquee-blur-right';
  inner.className = 'companies-marquee-inner';
  track.className = `companies-marquee-track ${directionClass}`;

  duplicateRow(row).forEach((company) => {
    track.appendChild(createCompanyLink(company));
  });

  inner.appendChild(track);
  viewport.appendChild(blurLeft);
  viewport.appendChild(blurRight);
  viewport.appendChild(inner);

  return viewport;
}

/**
 * renderCompaniesMarquee
 *
 * Propósito:
 * - Pintar el título, subtítulo y filas de empresas.
 *
 * Parámetros:
 * - content: Contenido local de empresas.
 */
function renderCompaniesMarquee(content) {
  const title = document.querySelector('#companies-title');
  const subtitle = document.querySelector('#companies-subtitle');
  const marquee = document.querySelector('#companies-marquee');

  if (!marquee) return;

  const {
    sectionTitle,
    sectionSubtitle,
    maxPerRow = 6,
    visibleCount = 4,
    companies = [],
  } = content;

  if (title) {
    title.textContent = sectionTitle;
  }

  if (subtitle) {
    subtitle.textContent = sectionSubtitle;
  }

  marquee.innerHTML = '';

  const rows = chunkBy(companies, maxPerRow);

  rows.forEach((row, rowIndex) => {
    marquee.appendChild(createMarqueeRow(row, rowIndex, visibleCount));
  });
}

/**
 * initCompaniesMarquee
 *
 * Propósito:
 * - Inicializar el marquee de empresas desde datos locales empaquetados por Vite.
 * - Evitar depender de companies.json en producción.
 */
export function initCompaniesMarquee() {
  renderCompaniesMarquee(COMPANIES_CONTENT);
}

/**
 * loadCompaniesMarquee
 *
 * Propósito:
 * - Mantener compatibilidad si main.js todavía importa este nombre.
 */
export function loadCompaniesMarquee() {
  initCompaniesMarquee();
}