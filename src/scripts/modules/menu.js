import { $, $$, setBodyLocked } from '../utils/dom.js';

/**
 * initMenu
 *
 * Propósito:
 * - Inicializar el menú móvil.
 * - Abrir y cerrar la navegación principal.
 * - Cerrar el menú al presionar Escape, al cambiar a desktop o al dar clic en un enlace.
 *
 * Regresa:
 * - API mínima para cerrar el menú desde otros módulos.
 */
export function initMenu() {
  const header = $('.site-header');
  const toggle = $('.menu-toggle');
  const nav = $('.main-nav');
  const navClose = $('.nav-close');
  const navLinks = $$('.main-nav a');

  /**
   * openMenu
   *
   * Propósito:
   * - Abrir el menú móvil.
   * - Bloquear el scroll del body mientras el menú está abierto.
   */
  function openMenu() {
    toggle?.setAttribute('aria-expanded', 'true');
    toggle?.setAttribute('aria-label', 'Cerrar menú');
    nav?.classList.add('is-open');
    header?.classList.add('is-menu-open');
    setBodyLocked(true);
  }

  /**
   * closeMenu
   *
   * Propósito:
   * - Cerrar el menú móvil.
   * - Restaurar el scroll del body.
   */
  function closeMenu() {
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Abrir menú');
    nav?.classList.remove('is-open');
    header?.classList.remove('is-menu-open');
    setBodyLocked(false);
  }

  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  navClose?.addEventListener('click', closeMenu);
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 980) closeMenu();
  });

  return { closeMenu };
}
