import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';

// ─── Mobile Menu ───
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const navClose = document.querySelector('.nav-close');
const navLinks = document.querySelectorAll('.main-nav a');

function openMenu() {
  toggle?.setAttribute('aria-expanded', 'true');
  toggle?.setAttribute('aria-label', 'Cerrar menú');
  nav?.classList.add('is-open');
  header?.classList.add('is-menu-open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Abrir menú');
  nav?.classList.remove('is-open');
  header?.classList.remove('is-menu-open');
  document.body.style.overflow = '';
}

toggle?.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMenu() : openMenu();
});

navClose?.addEventListener('click', closeMenu);
navLinks.forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 980) closeMenu();
});

// ─── Header stacking + active nav link on scroll ───
const sections = document.querySelectorAll('section[id]');
function updateHeaderState() {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}

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
function handleScrollState() {
  updateHeaderState();
  updateActiveNav();
}
handleScrollState();
window.addEventListener('scroll', handleScrollState, { passive: true });

// ─── Scroll fade-up animations ───
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);
fadeEls.forEach((el) => observer.observe(el));

// ─── YouTube Videos Data ───
const VIDEOS_DATA = [
  // Promocionales
  {
    id: 'mRc6chDkq4Y',
    title: 'Promocional COHACER 1',
    category: 'promocional',
    badge: 'Promocional',
    isShort: false,
  },
  {
    id: 'CCyjSsoPHQY',
    title: 'Promocional COHACER 2',
    category: 'promocional',
    badge: 'Promocional',
    isShort: false,
  },
  {
    id: 'MjoQgonW1aU',
    title: 'Promocional COHACER 3',
    category: 'promocional',
    badge: 'Promocional',
    isShort: true,
  },
  {
    id: '6hybykGYvsA',
    title: 'Promocional COHACER 4',
    category: 'promocional',
    badge: 'Promocional',
    isShort: true,
  },

  // Testimoniales
  {
    id: '1pyhbLC1sYw',
    title: 'Testimonial COHACER 1',
    category: 'testimonial',
    badge: 'Testimonial',
    isShort: false,
  },
  {
    id: '0XzYWEJcxfw',
    title: 'Testimonial COHACER 2',
    category: 'testimonial',
    badge: 'Testimonial',
    isShort: true,
  },
  {
    id: 'bwru58dzMB8',
    title: 'Testimonial COHACER 3',
    category: 'testimonial',
    badge: 'Testimonial',
    isShort: true,
  },
  {
    id: '9oQavi7FixE',
    title: 'Testimonial COHACER 4',
    category: 'testimonial',
    badge: 'Testimonial',
    isShort: true,
  },
  {
    id: 'TCiTx02VQCE',
    title: 'Testimonial COHACER 5',
    category: 'testimonial',
    badge: 'Testimonial',
    isShort: true,
  },
  {
    id: '_wj1FyMHTQw',
    title: 'Testimonial COHACER 6',
    category: 'testimonial',
    badge: 'Testimonial',
    isShort: true,
  },
  {
    id: '3b2NjVp9Hwg',
    title: 'Testimonial COHACER 7',
    category: 'testimonial',
    badge: 'Testimonial',
    isShort: true,
  },
  {
    id: '3Eza62IAECQ',
    title: 'Testimonial COHACER 8',
    category: 'testimonial',
    badge: 'Testimonial',
    isShort: true,
  },
  {
    id: '279eXDh6eQM',
    title: 'Testimonial COHACER 9',
    category: 'testimonial',
    badge: 'Testimonial',
    isShort: true,
  },
  {
    id: 'vOeIPpFLTPA',
    title: 'Testimonial COHACER 10',
    category: 'testimonial',
    badge: 'Testimonial',
    isShort: true,
  },

  // Maestría
  {
    id: 'UfxYtF6adnk',
    title: 'Maestría COHACER',
    category: 'maestria',
    badge: 'Maestría',
    isShort: false,
  },
];

// ─── Video Carousel & Reels Modal ───
const reelsModal = document.querySelector('#reels-modal');
const reelsClose = document.querySelector('.reels-close');
const previewsContainer = document.querySelector('.videos-swiper .video-previews');
const reelsSwiperWrapper = document.querySelector('.reels-swiper .swiper-wrapper');
const categoryTabs = document.querySelectorAll('.video-category-tab');
const videosPrevButton = document.querySelector('.videos-prev');
const videosNextButton = document.querySelector('.videos-next');

let reelsSwiper;
let videosSwiper;
let activeCategory = 'todos';
let activeIframe = null;

function getYouTubeThumbnail(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

function getFilteredVideos() {
  if (activeCategory === 'todos') return VIDEOS_DATA;

  return VIDEOS_DATA.filter((video) => video.category === activeCategory);
}

function ensureVideosFontAwesomeArrows() {
  if (videosPrevButton) {
    videosPrevButton.innerHTML = '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>';
    videosPrevButton.setAttribute('aria-label', 'Video anterior');
  }

  if (videosNextButton) {
    videosNextButton.innerHTML = '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>';
    videosNextButton.setAttribute('aria-label', 'Video siguiente');
  }
}

function renderPreviews() {
  if (!previewsContainer) return;

  previewsContainer.innerHTML = '';

  const filteredVideos = getFilteredVideos();

  filteredVideos.forEach((video) => {
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

  setupPreviewListeners();
}

function renderReelsSlides() {
  if (!reelsSwiperWrapper) return;

  reelsSwiperWrapper.innerHTML = '';

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

    reelsSwiperWrapper.appendChild(slide);
  });
}

function initReelsSwiper() {
  if (!document.querySelector('.reels-swiper')) return;

  if (reelsSwiper) {
    reelsSwiper.destroy(true, true);
  }

  reelsSwiper = new Swiper('.reels-swiper', {
    modules: [Mousewheel, Pagination],
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

function removeActiveIframes() {
  document.querySelectorAll('.reel-iframe-wrapper iframe').forEach((iframe) => {
    iframe.remove();
  });

  activeIframe = null;
}

function loadIframeForSlide(index) {
  removeActiveIframes();

  if (!reelsSwiperWrapper) return;

  const slide = reelsSwiperWrapper.children[index];
  if (!slide) return;

  const wrapper = slide.querySelector('.reel-iframe-wrapper');
  if (!wrapper) return;

  const videoId = wrapper.dataset.videoId;
  if (!videoId) return;

  const iframe = document.createElement('iframe');

  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.setAttribute('frameborder', '0');

  wrapper.appendChild(iframe);
  activeIframe = iframe;
}

function openReels(index) {
  if (!reelsModal) return;

  reelsModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  if (!reelsSwiper) {
    initReelsSwiper();
  }

  if (reelsSwiper) {
    reelsSwiper.slideTo(index, 0);
  }

  loadIframeForSlide(index);
}

function closeReels() {
  if (!reelsModal) return;

  reelsModal.classList.remove('is-open');
  document.body.style.overflow = '';

  removeActiveIframes();
}

function setupPreviewListeners() {
  document.querySelectorAll('.video-preview-card').forEach((preview) => {
    preview.onclick = () => {
      const index = Number.parseInt(preview.dataset.videoIndex || '0', 10);
      openReels(index);
    };
  });
}

function initVideosSwiper() {
  if (!document.querySelector('.videos-swiper')) return;

  ensureVideosFontAwesomeArrows();

  if (videosSwiper) {
    videosSwiper.destroy(true, true);
  }

  videosSwiper = new Swiper('.videos-swiper', {
    modules: [Navigation, Mousewheel],
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

    if (videosSwiper) {
      videosSwiper.update();
      videosSwiper.slideTo(0);
    }
  });
});

reelsClose?.addEventListener('click', closeReels);

reelsModal?.addEventListener('click', (event) => {
  if (event.target === reelsModal) {
    closeReels();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && reelsModal?.classList.contains('is-open')) {
    closeReels();
  }
});

// Initial Render
renderReelsSlides();
initReelsSwiper();
renderPreviews();
initVideosSwiper();


// ─── Licenciaturas Carousel ───
const licenciaturasSwiper = new Swiper('.licenciaturas-swiper', {
  modules: [Navigation, Pagination, Autoplay],
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


// ─── Modal Acreditación ───
const acredModal = document.querySelector('#acred-modal');
const openAcredBtn = document.querySelector('#open-acred-modal');
const closeAcredBtn = document.querySelector('#close-acred-modal');
const acredBackdrop = document.querySelector('.acred-modal-backdrop');
const centroEvaluadorNavLink = document.querySelector('#centro-evaluador-nav-link');
const centroEvaluadorSection = document.querySelector('#centro-evaluador');

/**
 * openAcredModal
 *
 * Propósito:
 * - Abrir la modal de acreditación oficial.
 * - Bloquear el scroll del documento mientras la modal está activa.
 */
function openAcredModal() {
  acredModal?.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  closeAcredBtn?.focus();
}

function closeAcredModal() {
  acredModal?.classList.remove('is-open');
  document.body.style.overflow = '';
  openAcredBtn?.focus();
}

openAcredBtn?.addEventListener('click', openAcredModal);
closeAcredBtn?.addEventListener('click', closeAcredModal);
acredBackdrop?.addEventListener('click', closeAcredModal);

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

  closeMenu();

  centroEvaluadorSection?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  window.setTimeout(() => {
    openAcredModal();
  }, 650);
}

centroEvaluadorNavLink?.addEventListener('click', openCentroEvaluadorFromNav);


window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && acredModal?.classList.contains('is-open')) {
    closeAcredModal();
  }
});


// ─── Asesores por URL (/slug) ───

/**
 * normalizePhoneForLink
 *
 * Propósito:
 * - Limpiar un número telefónico visible para usarlo en enlaces.
 *
 * Parámetros:
 * - phone: Número telefónico tal como viene del JSON.
 *
 * Regresa:
 * - Número telefónico sin espacios ni caracteres visuales.
 */
function normalizePhoneForLink(phone) {
  return phone.replace(/\D/g, '');
}

/**
 * getWhatsAppHref
 *
 * Propósito:
 * - Construir una liga válida de WhatsApp desde el número visible.
 *
 * Parámetros:
 * - phone: Número de WhatsApp tal como viene del JSON.
 *
 * Regresa:
 * - URL de WhatsApp lista para usarse en href.
 */
function getWhatsAppHref(phone) {
  const cleanPhone = normalizePhoneForLink(phone);
  const phoneWithCountryCode = cleanPhone.startsWith('52') ? cleanPhone : `52${cleanPhone}`;

  return `https://wa.me/${phoneWithCountryCode}`;
}

/**
 * getPhoneHref
 *
 * Propósito:
 * - Construir una liga telefónica para abrir la app de llamadas en móvil.
 *
 * Parámetros:
 * - phone: Número telefónico tal como viene del JSON.
 *
 * Regresa:
 * - URL tel lista para usarse en href.
 */
function getPhoneHref(phone) {
  const cleanPhone = normalizePhoneForLink(phone);
  const phoneWithCountryCode = cleanPhone.startsWith('52') ? cleanPhone : `52${cleanPhone}`;

  return `tel:+${phoneWithCountryCode}`;
}

/**
 * getFirstName
 *
 * Propósito:
 * - Obtener el primer nombre del asesor para textos cortos de CTA.
 *
 * Parámetros:
 * - fullName: Nombre completo del asesor.
 *
 * Regresa:
 * - Primer nombre disponible.
 */
function getFirstName(fullName) {
  return fullName.trim().split(' ')[0];
}

/**
 * createAsesorCard
 *
 * Propósito:
 * - Crear una card de asesor con fotografía, nombre, WhatsApp, teléfono y horario.
 *
 * Parámetros:
 * - asesor: Información del asesor proveniente del JSON.
 * - isSingle: Indica si la card se mostrará sola por slug.
 *
 * Regresa:
 * - Elemento HTML de la card del asesor.
 */
function createAsesorCard(asesor, isSingle = false) {
  const card = document.createElement('article');

  card.className = `asesor-card ${isSingle ? 'is-single' : ''}`;

  card.innerHTML = `
    <img class="asesor-photo" src="${asesor.fotografia}" alt="${asesor.nombre}" loading="lazy" />

    <div class="asesor-info">
      <h3 class="asesor-name">${asesor.nombre}</h3>

      <a class="asesor-link asesor-whatsapp" href="${getWhatsAppHref(asesor.whatsapp)}" target="_blank" rel="noopener">
        <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
        <span>${asesor.whatsapp}</span>
      </a>

      <a class="asesor-link asesor-phone" href="${getPhoneHref(asesor.telefono)}">
        <i class="fa-solid fa-phone" aria-hidden="true"></i>
        <span>${asesor.telefono}</span>
      </a>

      <p class="asesor-schedule">
        <i class="fa-regular fa-calendar" aria-hidden="true"></i>
        <span>${asesor.horario}</span>
      </p>
    </div>
  `;

  return card;
}

/**
 * updateContactButtons
 *
 * Propósito:
 * - Cambiar los botones principales de contacto cuando existe un asesor por slug.
 *
 * Parámetros:
 * - asesor: Información del asesor activo.
 * - hasActiveAsesor: Indica si el slug corresponde a un asesor real.
 */
function updateContactButtons(asesor, hasActiveAsesor) {
  const contactButtons = document.querySelectorAll('a.btn[href="#contacto"], #header-cta-fixed');

  contactButtons.forEach((button) => {
    if (!hasActiveAsesor) return;

    const icon = button.querySelector('svg');
    const label = `Contacta a ${getFirstName(asesor.nombre)}`;

    button.textContent = '';

    if (icon) {
      button.appendChild(icon);
    }

    button.append(` ${label}`);
  });
}

/**
 * renderAsesores
 *
 * Propósito:
 * - Renderizar todos los asesores en modo marquesina cuando no hay slug.
 * - Renderizar una sola card en layout cómodo cuando existe un slug válido.
 *
 * Parámetros:
 * - data: Objeto completo de asesores proveniente del JSON.
 * - slug: Primer segmento de la URL.
 */
function renderAsesores(data, slug) {
  const carousel = document.querySelector('#asesores-carousel');
  const track = document.querySelector('#asesores-track');
  const nombreTitle = document.querySelector('#contact-nombre-title');

  if (!carousel || !track) return;

  const hasActiveAsesor = Boolean(slug && data[slug]);
  const asesores = hasActiveAsesor
    ? [data[slug]]
    : Object.entries(data)
        .filter(([key]) => key !== 'default')
        .map(([, asesor]) => asesor);

  track.innerHTML = '';
  carousel.classList.toggle('is-single', hasActiveAsesor);
  carousel.classList.toggle('is-marquee', !hasActiveAsesor);

  if (nombreTitle) {
    nombreTitle.textContent = hasActiveAsesor
      ? `habla con ${data[slug].nombre}`
      : 'estamos para ayudarte';
  }

  if (hasActiveAsesor) {
    track.appendChild(createAsesorCard(data[slug], true));
    updateContactButtons(data[slug], true);
    return;
  }

  const duplicatedAsesores = [...asesores, ...asesores];

  duplicatedAsesores.forEach((asesor) => {
    track.appendChild(createAsesorCard(asesor));
  });
}

/**
 * loadAsesor
 *
 * Propósito:
 * - Cargar asesores desde el JSON.
 * - Detectar si la URL tiene slug.
 * - Renderizar carrusel general o card individual.
 */
async function loadAsesor() {
  try {
    const res = await fetch('/assets/asesores.json');
    const data = await res.json();

    const slug = window.location.pathname.replace(/^\//, '').split('/')[0].toLowerCase().trim();

    renderAsesores(data, slug);
  } catch (err) {
    console.warn('No se pudo cargar asesores.json:', err);
  }
}

loadAsesor();
