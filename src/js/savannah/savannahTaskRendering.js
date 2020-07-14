import { randomInteger } from '../utils';
import { wordBlockData } from './wordBlockData';

export const savannahTaskRendering = (data) => {
  const first = document.getElementById('first-word');
  const second = document.getElementById('second-word');
  const third = document.getElementById('third-word');
  const fourth = document.getElementById('fourth-word');
  const question = document.getElementById('question');

  wordBlockData(first, data, 0);
  wordBlockData(second, data, 1);
  wordBlockData(third, data, 2);
  wordBlockData(fourth, data, 3);
  question.innerHTML = data[randomInteger(0, 3)].wordTranslate;
  question.dataset.id = data[randomInteger(0, 3)].id;
};
