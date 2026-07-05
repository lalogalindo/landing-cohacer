import { $, setBodyLocked } from '../utils/dom.js';

/**
 * initAcreditacionModal
 *
 * Propósito:
 * - Inicializar la modal de acreditación oficial.
 * - Permitir abrirla desde el CTA y desde el enlace Centro Evaluador del menú.
 *
 * Parámetros:
 * - options: Funciones externas necesarias para coordinar el menú.
 */
export function initAcreditacionModal(options = {}) {
  const { closeMenu } = options;
  const acredModal = $('#acred-modal');
  const openAcredBtn = $('#open-acred-modal');
  const closeAcredBtn = $('#close-acred-modal');
  const acredBackdrop = $('.acred-modal-backdrop');
  const centroEvaluadorNavLink = $('#centro-evaluador-nav-link');
  const centroEvaluadorSection = $('#centro-evaluador');
  const titulacionModal = $('#titulacion-modal');
  const openTitulacionBtn = $('#open-titulacion-modal');
  const closeTitulacionBtn = $('#close-titulacion-modal');
  const titulacionBackdrop = $('.titulacion-modal-backdrop');
  const institucionesModal = $('#instituciones-modal');
  const openInstitucionesBtn = $('#open-instituciones-modal');
  const closeInstitucionesBtn = $('#close-instituciones-modal');
  const institucionesBackdrop = $('.instituciones-modal-backdrop');

  /**
   * openAcredModal
   *
   * Propósito:
   * - Abrir la modal de acreditación oficial.
   * - Bloquear el scroll del documento mientras la modal está activa.
   */
  function openAcredModal() {
    acredModal?.classList.add('is-open');
    setBodyLocked(true);
    closeAcredBtn?.focus();
  }

  /**
   * closeAcredModal
   *
   * Propósito:
   * - Cerrar la modal de acreditación oficial.
   * - Restaurar el scroll del documento.
   */
  function closeAcredModal() {
    acredModal?.classList.remove('is-open');
    setBodyLocked(false);
    openAcredBtn?.focus();
  }

  /**
   * Abre la modal de titulación y bloquea el scroll del documento.
   *
   * @returns {void}
   */
  function openTitulacionModal() {
    titulacionModal?.classList.add('is-open');
    setBodyLocked(true);
    closeTitulacionBtn?.focus();
  }

  /**
   * Cierra la modal de titulación y devuelve el foco al botón que la abrió.
   *
   * @returns {void}
   */
  function closeTitulacionModal() {
    titulacionModal?.classList.remove('is-open');
    setBodyLocked(false);
    openTitulacionBtn?.focus();
  }

  /**
   * Abre la modal de Instituciones Hermanas y bloquea el scroll del documento.
   *
   * @returns {void}
   */
  function openInstitucionesModal() {
    institucionesModal?.classList.add('is-open');
    setBodyLocked(true);
    closeInstitucionesBtn?.focus();
  }

  /**
   * Cierra la modal de Instituciones Hermanas y devuelve el foco al botón que la abrió.
   *
   * @returns {void}
   */
  function closeInstitucionesModal() {
    institucionesModal?.classList.remove('is-open');
    setBodyLocked(false);
    openInstitucionesBtn?.focus();
  }

  /**
   * openCentroEvaluadorFromNav
   *
   * Propósito:
   * - Llevar al usuario a la sección Centro Evaluador.
   * - Abrir automáticamente la modal de acreditación después del scroll.
   *
   * Parámetros:
   * - event: Evento del enlace del menú.
   */
  function openCentroEvaluadorFromNav(event) {
    event.preventDefault();
    closeMenu?.();

    centroEvaluadorSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    window.setTimeout(openAcredModal, 650);
  }

  openAcredBtn?.addEventListener('click', openAcredModal);
  closeAcredBtn?.addEventListener('click', closeAcredModal);
  acredBackdrop?.addEventListener('click', closeAcredModal);
  openTitulacionBtn?.addEventListener('click', openTitulacionModal);
  closeTitulacionBtn?.addEventListener('click', closeTitulacionModal);
  titulacionBackdrop?.addEventListener('click', closeTitulacionModal);
  openInstitucionesBtn?.addEventListener('click', openInstitucionesModal);
  closeInstitucionesBtn?.addEventListener('click', closeInstitucionesModal);
  institucionesBackdrop?.addEventListener('click', closeInstitucionesModal);
  centroEvaluadorNavLink?.addEventListener('click', openCentroEvaluadorFromNav);

  window.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (acredModal?.classList.contains('is-open')) closeAcredModal();
    if (titulacionModal?.classList.contains('is-open')) closeTitulacionModal();
    if (institucionesModal?.classList.contains('is-open')) closeInstitucionesModal();
  });
}
