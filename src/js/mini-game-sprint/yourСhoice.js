import { constantsData } from './constants';
import { fetchSprintGameData } from './fetchSprintGameData';
import { randomInteger } from '../utils';

export const rightChoice = () => {
  const points = document.getElementById('points');
  constantsData.correctAnswersCounter += 1; // Показать на экране результата

  const result = +points.innerHTML + (constantsData.minimumScore * constantsData.combo);
  constantsData.rightInARow += 1;
  if (constantsData.rightInARow === 4) {
    if (constantsData.combo < 8) {
      constantsData.combo *= 2;
      constantsData.rightInARow = 0;
    }
  }
  points.innerHTML = `${result}`;
  fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
};
export const wrongChoice = () => {
  constantsData.combo = 1;
  constantsData.rightInARow = 0;
  constantsData.wrongAnswersCounter += 1; // Показать на экране результата
  fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
};
