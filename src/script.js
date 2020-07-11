import { load } from './js/utils';
import { router } from './js/router';
import { wordConstructorPage } from './js/pages/wordConstructorPage';
import { launchWordConstructorGame } from './js/wordConstructor/launchWordConstructorGame';

window.addEventListener('hashchange', router);
window.onload = () => {
  load();
  router();
  //document.body.innerHTML = wordConstructorPage();
  //launchWordConstructorGame();
};
