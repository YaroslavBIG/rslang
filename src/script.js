import { load } from './js/utils';

window.onload = () => {
  load();
};

import { wordConstructorPage } from './js/pages/wordConstructorPage';
import { launchWordConstructorGame } from './js/wordConstructor/launchWordConstructorGame';

window.onload = () => {
  document.querySelector('body').innerHTML = wordConstructorPage();
  launchWordConstructorGame();
};
