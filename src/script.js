import { startMainGame } from './js/mainGame';
import { mainGameRender } from './js/pages';

document.querySelector('#root').innerHTML = mainGameRender();
startMainGame();
