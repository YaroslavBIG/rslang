import { load } from './js/utils';
import { intervalRepeatPromoPage } from './js/pages/intervalRepeatPromoPage';

window.onload = () => {
  load();
  document.body.innerHTML = intervalRepeatPromoPage();
};
