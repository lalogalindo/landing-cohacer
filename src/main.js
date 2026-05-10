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


// ─── Testimonial video selector ───
const testimonialFrame = document.querySelector('.testimonial-video-frame');
const testimonialVideoButtons = document.querySelectorAll('.testimonial-video-button');

testimonialVideoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const videoId = button.dataset.videoId;

    if (!testimonialFrame || !videoId) return;

    testimonialFrame.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`;

    testimonialVideoButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
  });
});

// ─── Local reels / stories modal ───
const reelThumbs = document.querySelectorAll('.reel-thumb');
const reelsModal = document.querySelector('#reels-modal');
const reelsViewer = document.querySelector('[data-reels-viewer]');
const reelsVideo = document.querySelector('.reels-video');
const reelsCounter = document.querySelector('.reels-counter');
const reelsCloseButtons = document.querySelectorAll('[data-reels-close]');
const reelsPrevButtons = document.querySelectorAll('[data-reels-prev]');
const reelsNextButtons = document.querySelectorAll('[data-reels-next]');

const reels = Array.from(reelThumbs).map((thumb, index) => {
  const video = thumb.querySelector('video');

  return {
    index,
    src: video?.getAttribute('src') || '',
    label: thumb.getAttribute('aria-label') || `Reel ${index + 1}`,
  };
});

let activeReelIndex = 0;
let previousBodyOverflow = '';
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function playActiveReel() {
  if (!reelsVideo) return;

  reelsVideo.currentTime = 0;
  const playPromise = reelsVideo.play();

  if (playPromise) {
    playPromise.catch(() => {
      // Some browsers can still block autoplay; controls remain visible for manual playback.
    });
  }
}

function updateReel(index, shouldAnimate = true) {
  if (!reelsVideo || !reels.length) return;

  const nextIndex = (index + reels.length) % reels.length;
  const nextReel = reels[nextIndex];

  activeReelIndex = nextIndex;
  reelsVideo.pause();

  if (shouldAnimate) {
    reelsViewer?.classList.add('is-switching');
  }

  window.setTimeout(() => {
    reelsVideo.src = nextReel.src;
    reelsVideo.setAttribute('aria-label', nextReel.label);

    if (reelsCounter) {
      reelsCounter.textContent = `${activeReelIndex + 1} / ${reels.length}`;
    }

    reelsVideo.load();
    playActiveReel();
    reelsViewer?.classList.remove('is-switching');
  }, shouldAnimate ? 180 : 0);
}

function openReels(index) {
  if (!reelsModal || !reelsVideo || !reels.length) return;

  previousBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  document.body.classList.add('reels-lock');
  reelsModal.classList.add('is-open');
  reelsModal.setAttribute('aria-hidden', 'false');
  updateReel(index, false);
}

function closeReels() {
  if (!reelsModal || !reelsVideo) return;

  reelsVideo.pause();
  reelsVideo.removeAttribute('src');
  reelsVideo.load();
  reelsModal.classList.remove('is-open');
  reelsModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('reels-lock');
  document.body.style.overflow = previousBodyOverflow;
}

function showNextReel() {
  updateReel(activeReelIndex + 1);
}

function showPreviousReel() {
  updateReel(activeReelIndex - 1);
}

function isReelsOpen() {
  return reelsModal?.classList.contains('is-open');
}

reelThumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => openReels(index));
});

reelsCloseButtons.forEach((button) => button.addEventListener('click', closeReels));
reelsPrevButtons.forEach((button) => button.addEventListener('click', showPreviousReel));
reelsNextButtons.forEach((button) => button.addEventListener('click', showNextReel));

reelsViewer?.addEventListener('touchstart', (event) => {
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });

reelsViewer?.addEventListener('touchmove', (event) => {
  const touch = event.changedTouches[0];
  touchEndX = touch.clientX;
  touchEndY = touch.clientY;
}, { passive: true });

reelsViewer?.addEventListener('touchend', (event) => {
  const touch = event.changedTouches[0];
  touchEndX = touch.clientX;
  touchEndY = touch.clientY;

  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  const isHorizontalSwipe = Math.abs(deltaX) > 46 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4;

  if (!isHorizontalSwipe) return;

  if (deltaX < 0) {
    showNextReel();
  } else {
    showPreviousReel();
  }
}, { passive: true });

window.addEventListener('keydown', (event) => {
  if (!isReelsOpen()) return;

  if (event.key === 'Escape') {
    closeReels();
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    showPreviousReel();
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault();
    showNextReel();
  }
});
