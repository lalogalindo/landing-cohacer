/**
 * $
 *
 * Propósito:
 * - Obtener un elemento del DOM con un selector CSS.
 *
 * Parámetros:
 * - selector: Selector CSS del elemento buscado.
 * - scope: Nodo desde donde se hará la búsqueda.
 *
 * Regresa:
 * - Elemento encontrado o null.
 */
export function $(selector, scope = document) {
  return scope.querySelector(selector);
}

/**
 * $$
 *
 * Propósito:
 * - Obtener una lista de elementos del DOM como arreglo.
 *
 * Parámetros:
 * - selector: Selector CSS de los elementos buscados.
 * - scope: Nodo desde donde se hará la búsqueda.
 *
 * Regresa:
 * - Arreglo de elementos encontrados.
 */
export function $$(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

/**
 * setBodyLocked
 *
 * Propósito:
 * - Bloquear o desbloquear el scroll del documento.
 *
 * Parámetros:
 * - isLocked: Indica si el body debe bloquear el scroll.
 */
export function setBodyLocked(isLocked) {
  document.body.style.overflow = isLocked ? 'hidden' : '';
}
