import { startGame } from './startGame';
import { gamePage } from './gamePage';
import { load } from '../utils';
import { addEventListnerAudioGame } from './addEventListnerAudioGame';

export const renderGame = () => {
  load();
  document.querySelector('#root').innerHTML = gamePage();
  startGame();
  addEventListnerAudioGame();
};
