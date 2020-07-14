import { recreationQuestionBlock } from './recreationQuestionBlock';
import { savannahData } from './constants';
import { fetchSavannahData } from './fetchSavannahData';
import { randomInteger } from '../utils';
import { gameOver } from './gameOver';

export const timeOutQuestion = () => {
  const question = document.getElementById('question');
  const wordsContainer = document.getElementById('words-container');
  const live = document.getElementById('lives').querySelectorAll('.live');
  if (live) {
    live[0].remove();
  }
  if (live.length === 1) {
    gameOver(live[0], question, wordsContainer);
    console.log('game over');
  }
  savannahData.falseQuestions += 1;
  recreationQuestionBlock();
  fetchSavannahData(randomInteger(0, 59), randomInteger(0, 5));
};
