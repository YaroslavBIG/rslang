import { load } from './js/utils';

window.onload = () => {
  load();
};

import { wordConstructorPage } from './js/pages/wordConstructorPage';
import { getButtons } from './js/wordConstructor/getButtons';
import { continuee } from './js/wordConstructor/continue';

window.onload = () => {
  document.querySelector('body').innerHTML = wordConstructorPage();
  var randomWord = Math.ceil(Math.random() * 19);
  var j = randomWord;
  getButtons(1, 1, j);
  continuee();
};
