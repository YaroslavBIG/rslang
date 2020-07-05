import { load } from './js/utils';
// import { router } from './js/router';
import { createSpeakItPage } from './js/pages';
import { startSpeakGame } from './js/speak-it-game/startSpeakGame';

// window.addEventListener('hashchange', router);
window.onload = () => {
  load();
  document.querySelector('#root').innerHTML = createSpeakItPage();
  startSpeakGame(0, 0, 10);
  // router();
};
