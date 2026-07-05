import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { initMenu } from './scripts/modules/menu.js';
import { initScrollState } from './scripts/modules/scroll-state.js';
import { initFadeUp } from './scripts/modules/fade-up.js';
import { initVideos } from './scripts/modules/videos.js';
import { initLicenciaturasCarousel } from './scripts/modules/licenciaturas-carousel.js';
import { initAcreditacionModal } from './scripts/modules/acreditacion-modal.js';
import { initLicenciaturaPdfModal } from './scripts/modules/licenciatura-pdf-modal.js';
import { initAsesores } from './scripts/modules/asesores.js';
import { initCompaniesMarquee } from './scripts/modules/companies-marquee.js';
import { initEsmiAssistant } from './esmi/index.js';

const swiperModules = {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
};

const menuApi = initMenu();

initScrollState();
initFadeUp();
initVideos({ Swiper, modules: swiperModules });
initLicenciaturasCarousel({ Swiper, modules: swiperModules });
initLicenciaturaPdfModal();
initAcreditacionModal({ closeMenu: menuApi.closeMenu });
initAsesores();
initCompaniesMarquee();
initEsmiAssistant();
