import { $$ } from '../utils/dom.js';

/**
 * initFadeUp
 *
 * Propósito:
 * - Activar animaciones fade-up cuando los elementos entran al viewport.
 */
export function initFadeUp() {
  const fadeEls = $$('.fade-up');

  if (!fadeEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach((el) => observer.observe(el));
}
