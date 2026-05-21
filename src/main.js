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


// ─── Reels Data (Scalable) ───
const REELS_DATA = [
  {
    id: 1,
    videoSrc: '/assets/vid1.mp4',
    title: 'Historia Real 1',
    description: 'Logros extraordinarios con apoyo cercano.',
    badge: 'Historia 1'
  },
  {
    id: 2,
    videoSrc: '/assets/vid2.mp4',
    title: 'Historia Real 2',
    description: 'Un paso adelante hacia el futuro.',
    badge: 'Historia 2'
  },
  // To add more videos, just add objects here:
  // {
  //   id: 3,
  //   videoSrc: '/assets/vid3.mp4',
  //   title: 'Historia Real 3',
  //   description: 'Descripción del video.',
  //   badge: 'Nuevo'
  // }
];

// ─── Reels Modal & Swiper Logic ───
const reelsModal = document.querySelector('#reels-modal');
const reelsClose = document.querySelector('.reels-close');
const previewsContainer = document.querySelector('.video-previews');
const swiperWrapper = document.querySelector('.reels-swiper .swiper-wrapper');

let swiper;
let reelVideos = [];
let muteToggles = [];

function renderReels() {
  if (!previewsContainer || !swiperWrapper) return;

  // Clear existing content
  previewsContainer.innerHTML = '';
  swiperWrapper.innerHTML = '';

  REELS_DATA.forEach((reel, index) => {
    // 1. Render Preview Card
    const previewCard = document.createElement('div');
    previewCard.className = 'video-preview-card';
    previewCard.dataset.videoIndex = index;
    previewCard.innerHTML = `
      <video src="${reel.videoSrc}" muted loop playsinline preload="none"></video>
      <div class="play-overlay">
        <span class="play-icon">▶</span>
        <span class="play-label">Ver historia</span>
      </div>
      <span class="video-badge">${reel.badge}</span>
    `;
    previewsContainer.appendChild(previewCard);

    // 2. Render Swiper Slide
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <div class="reel-container">
        <video class="reel-video" src="${reel.videoSrc}" playsinline loop preload="none"></video>
        <div class="reel-ui">
          <button class="mute-toggle" aria-label="Silenciar">🔊</button>
          <div class="reel-info">
            <h3>${reel.title}</h3>
            <p>${reel.description}</p>
          </div>
        </div>
      </div>
    `;
    swiperWrapper.appendChild(slide);
  });

  // Re-collect elements
  reelVideos = document.querySelectorAll('.reel-video');
  muteToggles = document.querySelectorAll('.mute-toggle');
  
  initSwiper();
  setupEventListeners();
}

function initSwiper() {
  if (swiper) swiper.destroy();
  
  swiper = new Swiper('.reels-swiper', {
    modules: [Mousewheel, Pagination],
    direction: 'vertical',
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      slideChange: function () {
        pauseAllVideos();
        playCurrentVideo(this.activeIndex);
      },
    },
  });
}

function pauseAllVideos() {
  reelVideos.forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
}

function playCurrentVideo(index) {
  const video = reelVideos[index];
  if (video) {
    video.play().catch(err => console.log("Auto-play blocked:", err));
  }
}

function openReels(index) {
  reelsModal?.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  swiper.slideTo(index, 0);
  playCurrentVideo(index);
}

function closeReels() {
  reelsModal?.classList.remove('is-open');
  document.body.style.overflow = '';
  pauseAllVideos();
}

function setupEventListeners() {
  // Opening modal
  document.querySelectorAll('.video-preview-card').forEach((preview) => {
    preview.addEventListener('click', () => {
      const index = parseInt(preview.dataset.videoIndex);
      openReels(index);
    });

    // Hover effect
    const v = preview.querySelector('video');
    preview.addEventListener('mouseenter', () => v.play());
    preview.addEventListener('mouseleave', () => {
      v.pause();
      v.currentTime = 0;
    });
  });

  // Mute/Unmute Logic
  muteToggles.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isMuted = !reelVideos[0].muted;
      reelVideos.forEach(v => v.muted = isMuted);
      muteToggles.forEach(t => t.textContent = isMuted ? '🔇' : '🔊');
    });
  });
}

reelsClose?.addEventListener('click', closeReels);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && reelsModal?.classList.contains('is-open')) {
    closeReels();
  }
});

// Initial Render
renderReels();


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
const acredModal   = document.querySelector('#acred-modal');
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
    const nombreTitle  = document.querySelector('#contact-nombre-title');
    const asesorName   = document.querySelector('#contact-asesor-name');
    const cargoEl      = document.querySelector('#contact-cargo');
    const waLink       = document.querySelector('#contact-whatsapp-link');
    const waNum        = document.querySelector('#contact-whatsapp-num');
    const phoneLink    = document.querySelector('#contact-phone-link');
    const phoneNum     = document.querySelector('#contact-phone-num');
    const horarioShort = document.querySelector('#contact-horario-short');
    const horarioLabel = document.querySelector('#contact-horario-label');
    const horarioDetail= document.querySelector('#contact-horario-detalle');

    if (nombreTitle) {
      nombreTitle.textContent = slug && data[slug]
        ? `habla con ${asesor.nombre}`
        : 'estamos para ayudarte';
    }
    if (asesorName)   asesorName.textContent  = asesor.nombre;
    if (cargoEl)      cargoEl.textContent      = asesor.cargo;
    if (waLink)       waLink.href              = `https://wa.me/${asesor.whatsapp}`;
    if (waNum)        waNum.textContent        = asesor.whatsappDisplay;
    if (phoneLink)    phoneLink.href           = `tel:${asesor.telefono}`;
    if (phoneNum)     phoneNum.textContent     = asesor.telefonoDisplay;
    if (horarioShort) horarioShort.textContent = asesor.horario;
    if (horarioLabel) horarioLabel.textContent = asesor.horario.split('·')[0].trim();
    if (horarioDetail)horarioDetail.textContent= asesor.horarioDetalle;

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
