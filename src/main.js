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

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && acredModal?.classList.contains('is-open')) {
    closeAcredModal();
  }
});


// ─── Asesor por URL (/slug) ───
async function loadAsesor() {
  try {
    const res = await fetch('/assets/asesores.json');
    const data = await res.json();

    // Get first path segment: "/" → "", "/lalo" → "lalo", "/lalo/otra" → "lalo"
    const slug = window.location.pathname.replace(/^\//, '').split('/')[0].toLowerCase().trim();
    const asesor = data[slug] || data['default'];

    // Populate contact section
    const nombreTitle = document.querySelector('#contact-nombre-title');
    const asesorName = document.querySelector('#contact-asesor-name');
    const cargoEl = document.querySelector('#contact-cargo');
    const waLink = document.querySelector('#contact-whatsapp-link');
    const waNum = document.querySelector('#contact-whatsapp-num');
    const phoneLink = document.querySelector('#contact-phone-link');
    const phoneNum = document.querySelector('#contact-phone-num');
    const horarioShort = document.querySelector('#contact-horario-short');
    const horarioLabel = document.querySelector('#contact-horario-label');
    const horarioDetail = document.querySelector('#contact-horario-detalle');

    if (nombreTitle) {
      nombreTitle.textContent = slug && data[slug]
        ? `habla con ${asesor.nombre}`
        : 'estamos para ayudarte';
    }
    if (asesorName) asesorName.textContent = asesor.nombre;
    if (cargoEl) cargoEl.textContent = asesor.cargo;
    if (waLink) waLink.href = `https://wa.me/${asesor.whatsapp}`;
    if (waNum) waNum.textContent = asesor.whatsappDisplay;
    if (phoneLink) phoneLink.href = `tel:${asesor.telefono}`;
    if (phoneNum) phoneNum.textContent = asesor.telefonoDisplay;
    if (horarioShort) horarioShort.textContent = asesor.horario;
    if (horarioLabel) horarioLabel.textContent = asesor.horario.split('·')[0].trim();
    if (horarioDetail) horarioDetail.textContent = asesor.horarioDetalle;

    // Update Header CTA text
    const headerCta = document.querySelector('#header-cta-fixed');
    if (headerCta) {
      if (slug && data[slug]) {
        headerCta.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> Habla con el asesor ${asesor.nombre.split(' ')[0]}`;
      } else {
        headerCta.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> Hablar con asesor`;
      }
    }

  } catch (err) {
    console.warn('No se pudo cargar asesores.json:', err);
  }
}

loadAsesor();
