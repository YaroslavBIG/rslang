import { savannahData } from './constants';
import { fetchSavannahData } from './fetchSavannahData';
import { randomInteger } from '../utils';
import { recreationQuestionBlock } from './recreationQuestionBlock';
import { gameOver } from './gameOver';

export const choice = async (firstId, secondId) => {
  const counter = document.getElementById('counter');
  const question = document.getElementById('question');
  const wordsContainer = document.getElementById('words-container');
  const live = document.getElementById('lives').querySelectorAll('.live');

  if (firstId === secondId) {
    counter.innerHTML = Number(counter.innerHTML) + 1;
    recreationQuestionBlock();
  } else if (live.length > 0) {
    savannahData.falseQuestions += 1;
    if (live.length === 1) {
      gameOver(live[0], question, wordsContainer);
    } else {
      live[0].remove();
      recreationQuestionBlock();
    }
  }
  if (!savannahData.gameOver) {
    await fetchSavannahData(randomInteger(0, 59), randomInteger(0, 5));
  }
};
