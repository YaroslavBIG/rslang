import { load } from './js/utils';
// import { router } from './js/router';
import { createSpeakItPage } from './js/pages';
import { startSpeakGame } from './js/speak-it-game/startSpeakGame';
import { changeLevel } from './js/speak-it-game/changeLevel';
import { clickRestart } from './js/speak-it-game/clickRestart';

// window.addEventListener('hashchange', router);
window.onload = () => {
  load();
  document.querySelector('#root').innerHTML = createSpeakItPage();
  startSpeakGame(0, 0, false);
  changeLevel();
  clickRestart();
  // router();
};
