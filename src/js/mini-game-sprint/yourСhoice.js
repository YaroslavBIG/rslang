import { constantsData } from './constants';
import { fetchSprintGameData } from './fetchSprintGameData';
import { randomInteger } from '../utils';

export const rightChoice = () => {
  const points = document.getElementById('points');
  const controller = document.getElementById('controller');
  constantsData.correctAnswersCounter += 1; // Показать на экране результата
  let result;

  if (points) {
    controller.children[2].play();
    result = +points.innerHTML + (constantsData.minimumScore * constantsData.combo);
    constantsData.rightInARow += 1;
    if (constantsData.rightInARow === 4) {
      if (constantsData.combo < 8) {
        constantsData.combo *= 2;
        constantsData.rightInARow = 0;
      }
    }
    points.innerHTML = `${result}`;
  }
  fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
};
export const wrongChoice = () => {
  const points = document.getElementById('points');
  const controller = document.getElementById('controller');
  controller.children[3].play();
  constantsData.combo = 1;
  constantsData.rightInARow = 0;
  constantsData.wrongAnswersCounter += 1; // Показать на экране результата
  if (points) {
    fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
  }
};
