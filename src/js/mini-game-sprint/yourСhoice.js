import constantsData from './constants';
import fetchSprintGameData from './fetchSprintGameData';
import { randomInteger } from '../utils';

const rightChoice = () => {
  const points = document.getElementById('points');
  const result = +points.innerHTML + (constantsData.countSum * constantsData.combo);
  (constantsData.combo < 5) ? constantsData.combo *= 2 : constantsData.combo;
  points.innerHTML = `${result}`;
  fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
};
const wrongChoice = () => {
  constantsData.combo = 1;
  fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
};

export { rightChoice, wrongChoice };
