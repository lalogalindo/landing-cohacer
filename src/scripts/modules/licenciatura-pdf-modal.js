import { $, $$, setBodyLocked } from '../utils/dom.js';

export function initLicenciaturaPdfModal() {
  const modal = $('#course-pdf-modal');
  const modalTitle = $('#course-pdf-title');
  const modalFrame = $('#course-pdf-frame');
  const closeButton = $('#close-course-pdf-modal');
  const backdrop = $('.course-pdf-backdrop');
  const courseCards = $$('.course-card[data-course-pdf]');
  let activeCard = null;

  function openCoursePdf(card) {
    const pdfUrl = card.dataset.coursePdf;
    const courseTitle = card.dataset.courseTitle || 'Licenciatura';

    if (!modal || !modalTitle || !modalFrame || !pdfUrl) return;

    activeCard = card;
    modalTitle.textContent = courseTitle;
    modalFrame.src = pdfUrl;
    modalFrame.title = `PDF de ${courseTitle}`;
    modal.classList.add('is-open');
    setBodyLocked(true);
    closeButton?.focus();
  }

  function closeCoursePdf() {
    modal?.classList.remove('is-open');
    setBodyLocked(false);

    if (modalFrame) modalFrame.src = '';
    activeCard?.focus();
    activeCard = null;
  }

  courseCards.forEach((card) => {
    card.addEventListener('click', () => openCoursePdf(card));
    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openCoursePdf(card);
    });
  });

  closeButton?.addEventListener('click', closeCoursePdf);
  backdrop?.addEventListener('click', closeCoursePdf);

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal?.classList.contains('is-open')) closeCoursePdf();
  });
}
