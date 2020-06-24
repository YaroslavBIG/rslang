import { mainPromoPage } from './js/mainPromoPage/mainPromoPage';
import { addSwiper } from './js/swiper/swiper';
window.onload = () => {
  document.querySelector('body').innerHTML = mainPromoPage();
  addSwiper();
};
