import { $ } from '../utils/dom.js';

/**
 * initCompaniesMarquee
 *
 * Propósito:
 * - Cargar empresas desde JSON.
 * - Renderizar filas de logos clickeables con animación marquee.
 */
export async function initCompaniesMarquee() {
  try {
    const res = await fetch('/assets/companies.json');
    const content = await res.json();

    renderCompaniesMarquee(content);
  } catch (err) {
    console.warn('No se pudo cargar companies.json:', err);
  }
}

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
 * - Arreglo de filas.
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
 * - Duplicar una fila para crear loop continuo.
 *
 * Parámetros:
 * - row: Fila original.
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
 * - Obtener la clase de viewport según el número máximo visible.
 *
 * Parámetros:
 * - visibleCount: Cantidad máxima de logos visibles.
 *
 * Regresa:
 * - Clase CSS para controlar el ancho del viewport.
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
 * - Crear un anchor clickeable para una empresa.
 *
 * Parámetros:
 * - company: Empresa con name, url y src.
 * - rowIndex: Índice de la fila.
 * - itemIndex: Índice del elemento dentro de la fila.
 *
 * Regresa:
 * - Elemento anchor con imagen.
 */
function createCompanyLink(company, rowIndex, itemIndex) {
  const anchor = document.createElement('a');

  anchor.className = 'company-logo-link';
  anchor.href = company.url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.setAttribute('aria-label', company.name);
  anchor.dataset.rowIndex = String(rowIndex);
  anchor.dataset.itemIndex = String(itemIndex);
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
 * - rowIndex: Índice de fila para alternar dirección.
 * - visibleCount: Cantidad máxima visible.
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

  duplicateRow(row).forEach((company, itemIndex) => {
    track.appendChild(createCompanyLink(company, rowIndex, itemIndex));
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
 * - content: Contenido de empresas cargado desde JSON.
 */
function renderCompaniesMarquee(content) {
  const title = $('#companies-title');
  const subtitle = $('#companies-subtitle');
  const marquee = $('#companies-marquee');
  const {
    sectionTitle,
    sectionSubtitle,
    maxPerRow = 6,
    visibleCount = 4,
    companies = [],
  } = content;

  if (!marquee) return;

  if (title) title.textContent = sectionTitle;
  if (subtitle) subtitle.textContent = sectionSubtitle;

  marquee.innerHTML = '';

  chunkBy(companies, maxPerRow).forEach((row, rowIndex) => {
    marquee.appendChild(createMarqueeRow(row, rowIndex, visibleCount));
  });
}
