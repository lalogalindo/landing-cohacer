import { $, $$ } from '../utils/dom.js';

/**
 * initScrollState
 *
 * Propósito:
 * - Actualizar el estado visual del header al hacer scroll.
 * - Marcar el enlace activo del menú según la sección visible.
 */
export function initScrollState() {
  const header = $('.site-header');
  const navLinks = $$('.main-nav a');
  const sections = $$('main section[id], #centro-evaluador');

  /**
   * updateHeaderState
   *
   * Propósito:
   * - Agregar sombra y estado scrolled al header cuando la página baja.
   */
  function updateHeaderState() {
    header?.classList.toggle('is-scrolled', window.scrollY > 24);
  }

  /**
   * updateActiveNav
   *
   * Propósito:
   * - Determinar qué sección está activa.
   * - Sincronizar el estado visual de los enlaces del menú.
   */
  function updateActiveNav() {
    const activationPoint = window.scrollY + Math.min(window.innerHeight * 0.42, 280);
    let currentId = sections[0]?.getAttribute('id');

    sections.forEach((section) => {
      if (activationPoint >= section.offsetTop) {
        currentId = section.getAttribute('id');
      }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      currentId = sections[sections.length - 1]?.getAttribute('id');
    }

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  /**
   * handleScrollState
   *
   * Propósito:
   * - Ejecutar todas las actualizaciones relacionadas con scroll en una sola función.
   */
  function handleScrollState() {
    updateHeaderState();
    updateActiveNav();
  }

  handleScrollState();
  window.addEventListener('scroll', handleScrollState, { passive: true });
}
