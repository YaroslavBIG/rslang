import { constantsData } from './constants';
import { fetchSprintGameData } from './fetchSprintGameData';
import { randomInteger } from '../utils';
import star from '../../assets/star-win.svg';

export const rightChoice = () => {
  const points = document.getElementById('points');
  const controller = document.getElementById('controller');
  constantsData.correctAnswersCounter += 1; // Показать на экране результата
  let result;

  if (points) {
    controller.children[2].play();
    result = +points.innerHTML + (constantsData.minimumScore * constantsData.combo);
    constantsData.rightInARow += 1;
    const newStar = document.getElementById(`star-${constantsData.rightInARow}`);
    if (constantsData.combo < 8) {
      newStar.style = `background-image: url('${star}')`;
    }
    if (constantsData.rightInARow === 4) {
      const comboBlock = document.getElementById('combo-block');
      const comboSection = comboBlock.querySelectorAll('.combo-block__section');
      comboSection.forEach((section) => {
        setTimeout(() => {
          section.style.background = '';
        }, 600);
      });
      if (constantsData.combo < 8) {
        constantsData.combo *= 2;
        constantsData.rightInARow = 0;
        const information = document.getElementById('main-information');
        information.innerHTML = `ВАШЕ КОМБО: x${constantsData.combo}`;
      }
    }
    points.innerHTML = `${result}`;
  }
  fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
};

export const wrongChoice = () => {
  const points = document.getElementById('points');
  const controller = document.getElementById('controller');
  const comboBlock = document.getElementById('combo-block');
  const comboSection = comboBlock.querySelectorAll('.combo-block__section');
  comboSection.forEach((section) => {
    section.style.background = '';
  });
  controller.children[3].play();
  constantsData.combo = 1;
  constantsData.rightInARow = 0;
  constantsData.wrongAnswersCounter += 1; // Показать на экране результата
  const information = document.getElementById('main-information');
  information.innerHTML = `ВАШЕ КОМБО: x${constantsData.combo}`;
  if (points) {
    fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
  }
};
