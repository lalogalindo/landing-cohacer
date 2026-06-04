import { $, $$, setBodyLocked } from '../utils/dom.js';
import { VIDEOS_DATA } from '../config/videos-data.js';

/**
 * initVideos
 *
 * Propósito:
 * - Inicializar previews de videos, filtros, carrusel horizontal y modal tipo reels.
 *
 * Parámetros:
 * - options: Dependencias de Swiper y sus módulos.
 */
export function initVideos(options) {
  const { Swiper, modules } = options;
  const reelsModal = $('#reels-modal');
  const reelsClose = $('.reels-close');
  const previewsContainer = $('.videos-swiper .video-previews') || $('.video-previews');
  const reelsWrapper = $('.reels-swiper .swiper-wrapper');
  const categoryTabs = $$('.video-category-tab');

  let activeCategory = 'todos';
  let reelsSwiper;
  let videosSwiper;

  /**
   * getYouTubeThumbnail
   *
   * Propósito:
   * - Construir la URL del thumbnail de YouTube.
   *
   * Parámetros:
   * - videoId: ID del video de YouTube.
   *
   * Regresa:
   * - URL del thumbnail.
   */
  function getYouTubeThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  /**
   * getFilteredVideos
   *
   * Propósito:
   * - Obtener videos según la categoría activa.
   *
   * Regresa:
   * - Lista filtrada de videos.
   */
  function getFilteredVideos() {
    if (activeCategory === 'todos') return VIDEOS_DATA;

    return VIDEOS_DATA.filter((video) => video.category === activeCategory);
  }

  /**
   * renderPreviews
   *
   * Propósito:
   * - Pintar las cards del carrusel horizontal de videos.
   */
  function renderPreviews() {
    if (!previewsContainer) return;

    previewsContainer.innerHTML = '';

    getFilteredVideos().forEach((video) => {
      const globalIndex = VIDEOS_DATA.indexOf(video);
      const card = document.createElement('div');

      card.className = `swiper-slide video-preview-card ${video.isShort ? 'is-short' : 'is-landscape'}`;
      card.dataset.videoIndex = String(globalIndex);
      card.innerHTML = `
        <img src="${getYouTubeThumbnail(video.id)}" alt="${video.title}" loading="lazy" />
        <div class="play-overlay">
          <span class="play-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </span>
        </div>
        <span class="video-badge">${video.badge}</span>
        <span class="video-title-overlay">${video.title}</span>
      `;

      previewsContainer.appendChild(card);
    });
  }

  /**
   * renderReelsSlides
   *
   * Propósito:
   * - Pintar los slides del modal vertical tipo reels.
   */
  function renderReelsSlides() {
    if (!reelsWrapper) return;

    reelsWrapper.innerHTML = '';

    VIDEOS_DATA.forEach((video) => {
      const slide = document.createElement('div');

      slide.className = 'swiper-slide';
      slide.dataset.videoId = video.id;
      slide.dataset.isShort = String(video.isShort);
      slide.innerHTML = `
        <div class="reel-container ${video.isShort ? 'reel-short' : 'reel-landscape'}">
          <div class="reel-iframe-wrapper" data-video-id="${video.id}"></div>
          <div class="reel-ui">
            <div class="reel-info">
              <h3>${video.title}</h3>
            </div>
          </div>
        </div>
      `;

      reelsWrapper.appendChild(slide);
    });
  }

  /**
   * removeActiveIframes
   *
   * Propósito:
   * - Eliminar iframes activos para detener reproducción de YouTube.
   */
  function removeActiveIframes() {
    $$('.reel-iframe-wrapper iframe').forEach((iframe) => iframe.remove());
  }

  /**
   * loadIframeForSlide
   *
   * Propósito:
   * - Insertar iframe solo en el slide activo.
   * - Evitar que otros videos sigan sonando.
   *
   * Parámetros:
   * - index: Índice del slide activo.
   */
  function loadIframeForSlide(index) {
    removeActiveIframes();

    const slide = reelsWrapper?.children[index];
    const wrapper = slide?.querySelector('.reel-iframe-wrapper');
    const videoId = wrapper?.dataset.videoId;

    if (!videoId || !wrapper) return;

    const iframe = document.createElement('iframe');

    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.setAttribute('frameborder', '0');

    wrapper.appendChild(iframe);
  }

  /**
   * initReelsSwiper
   *
   * Propósito:
   * - Inicializar Swiper vertical del modal de videos.
   */
  function initReelsSwiper() {
    if (!$('.reels-swiper')) return;

    if (reelsSwiper) reelsSwiper.destroy(true, true);

    reelsSwiper = new Swiper('.reels-swiper', {
      modules: [modules.Mousewheel, modules.Pagination],
      direction: 'vertical',
      mousewheel: true,
      pagination: {
        el: '.reels-modal .swiper-pagination',
        clickable: true,
      },
      on: {
        slideChange() {
          loadIframeForSlide(this.activeIndex);
        },
      },
    });
  }

  /**
   * openReels
   *
   * Propósito:
   * - Abrir el modal de videos en el índice seleccionado.
   *
   * Parámetros:
   * - index: Índice global del video seleccionado.
   */
  function openReels(index) {
    if (!reelsModal) return;

    reelsModal.classList.add('is-open');
    setBodyLocked(true);

    if (!reelsSwiper) initReelsSwiper();

    reelsSwiper?.slideTo(index, 0);
    loadIframeForSlide(index);
  }

  /**
   * closeReels
   *
   * Propósito:
   * - Cerrar el modal de videos y detener reproducción.
   */
  function closeReels() {
    reelsModal?.classList.remove('is-open');
    setBodyLocked(false);
    removeActiveIframes();
  }

  /**
   * initVideosSwiper
   *
   * Propósito:
   * - Inicializar Swiper horizontal de previews.
   */
  function initVideosSwiper() {
    if (!$('.videos-swiper')) return;

    if (videosSwiper) videosSwiper.destroy(true, true);

    videosSwiper = new Swiper('.videos-swiper', {
      modules: [modules.Navigation, modules.Mousewheel],
      slidesPerView: 'auto',
      spaceBetween: 14,
      grabCursor: true,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      mousewheel: {
        forceToAxis: true,
        releaseOnEdges: true,
      },
      navigation: {
        prevEl: '.videos-prev',
        nextEl: '.videos-next',
      },
    });
  }

  /**
   * bindEvents
   *
   * Propósito:
   * - Conectar eventos de filtros, previews y cierre del modal.
   */
  function bindEvents() {
    previewsContainer?.addEventListener('click', (event) => {
      const preview = event.target.closest('.video-preview-card');
      const index = Number.parseInt(preview?.dataset.videoIndex || '', 10);

      if (Number.isNaN(index)) return;

      openReels(index);
    });

    categoryTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        categoryTabs.forEach((currentTab) => {
          currentTab.classList.remove('active');
          currentTab.setAttribute('aria-selected', 'false');
        });

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        activeCategory = tab.dataset.category || 'todos';

        renderPreviews();
        videosSwiper?.update();
        videosSwiper?.slideTo(0);
      });
    });

    reelsClose?.addEventListener('click', closeReels);

    reelsModal?.addEventListener('click', (event) => {
      if (event.target === reelsModal) closeReels();
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && reelsModal?.classList.contains('is-open')) closeReels();
    });
  }

  renderReelsSlides();
  initReelsSwiper();
  renderPreviews();
  initVideosSwiper();
  bindEvents();
}
