import { mainPromoPage } from './js/pages/mainPromoPage';
import { addSwiper } from './js/pages/swiper';
window.onload = () => {
  document.querySelector('body').innerHTML = mainPromoPage();
  addSwiper();
};
