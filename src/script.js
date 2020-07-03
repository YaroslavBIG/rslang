import { mainGameRender } from './js/pages';
import { startMainGame } from './js/mainGame/startGame';

document.querySelector('#root').innerHTML = mainGameRender();
startMainGame();
