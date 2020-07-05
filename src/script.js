import { load } from './js/utils';
// import { router } from './js/router';
import { createSpeakItPage } from './js/pages';

// window.addEventListener('hashchange', router);
window.onload = () => {
  load();
  document.querySelector('#root').innerHTML = createSpeakItPage();
  // router();
};
