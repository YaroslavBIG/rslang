import { savannahData } from './constants';
import { createGameOverWindow } from './createGameOverWindow';
import { refreshBtnHandler } from './refreshBtnHandler';

export const gameOver = (live, quest, container) => {
  const counter = document.getElementById('counter');
  const wrapper = document.getElementById('savannah-wrapper');
  live.remove();
  quest.remove();
  container.remove();
  savannahData.gameOver = true;
  const gameOverWindow = document.createElement('div');
  gameOverWindow.classList.add('game-over-window');
  gameOverWindow.innerHTML = createGameOverWindow(counter.innerHTML);
  counter.remove();
  wrapper.append(gameOverWindow);
  refreshBtnHandler();
};
