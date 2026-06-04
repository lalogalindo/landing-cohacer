import { $ } from '../utils/dom.js';

/**
 * initLicenciaturasCarousel
 *
 * Propósito:
 * - Inicializar el carrusel de licenciaturas cuando exista en la página.
 *
 * Parámetros:
 * - options: Dependencias de Swiper y módulos necesarios.
 */
export function initLicenciaturasCarousel(options) {
  const { Swiper, modules } = options;

  if (!$('.licenciaturas-swiper')) return;

  new Swiper('.licenciaturas-swiper', {
    modules: [modules.Navigation, modules.Pagination, modules.Autoplay],
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: false,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      prevEl: '.licenciaturas-prev',
      nextEl: '.licenciaturas-next',
    },
    pagination: {
      el: '.licenciaturas-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        spaceBetween: 24,
      },
      980: {
        spaceBetween: 28,
      },
    },
  });
}
