import { load } from './js/utils';
import { mainPromoPage } from './js/pages/mainPromoPage';
import { mainPromoPageHeader } from './js/pageElements/mainPromoPageHeader';
import { mainPromoPageBody } from './js/pageElements/mainPromoPageBody';
import { mainPromoPageFooter } from './js/pageElements/mainPromoPageFooter';
import { addSwiper } from './js/swiper/swiper';

window.onload = () => {
  load();
  document.body.innerHTML = mainPromoPage();
  document.getElementsByClassName(
    'modal-content'
  )[0].innerHTML += mainPromoPageHeader();
  document.getElementsByClassName(
    'modal-content'
  )[0].innerHTML += mainPromoPageBody();
  document.getElementsByClassName(
    'modal-content'
  )[0].innerHTML += mainPromoPageFooter();
  addSwiper();
};
