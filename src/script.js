import { load } from './js/utils';
import { router } from './js/router';
import { mainPromoPage } from './js/pages/mainPromoPage';
import { mainPromoPageHeader } from './js/pageElements/mainPromoPageHeader';
import { mainPromoPageBody } from './js/pageElements/mainPromoPageBody';
import { mainPromoPageFooter } from './js/pageElements/mainPromoPageFooter';
import { addSwiper } from './js/swiper/swiper';

window.addEventListener('hashchange', router);
window.onload = () => {
  load();
  router();
  document.body.innerHTML = mainPromoPage();
  document.getElementsByClassName(
    'wrapper-content'
  )[0].innerHTML += mainPromoPageHeader();
  document.getElementsByClassName(
    'wrapper-content'
  )[0].innerHTML += mainPromoPageBody();
  document.getElementsByClassName(
    'wrapper-content'
  )[0].innerHTML += mainPromoPageFooter();
  addSwiper();
};
