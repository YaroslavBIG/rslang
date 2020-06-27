import { load } from './js/utils';

window.onload = () => {
  load();
};

import { wordConstructorPage } from './js/pages/wordConstructorPage';
import { getButtons } from './js/wordConstructor/getButtons';

window.onload = () => {
  document.querySelector('body').innerHTML = wordConstructorPage();
  getButtons(1, 1);
};
