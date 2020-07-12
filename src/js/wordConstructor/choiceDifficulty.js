import { fetchSprintGameData } from './fetchWordConstructorGameData';
import { randomInteger } from '../utils';

export function choiceDifficulty() {
  document.getElementById('choice').onclick = function () {
    var select = document.getElementById('select');
    var value = select.value;
    if (value != '') {
      document.getElementsByClassName('game-block__header')[0].style.display =
        'flex';
      document.getElementsByClassName('game-block__body')[0].style.display =
        'flex';
      document.getElementsByClassName('game-block__footer')[0].style.display =
        'block';
      document.getElementById('choice').style.display = 'none';
      document.getElementById('select').style.display = 'none';
      fetchSprintGameData(randomInteger(0, 59), value);
    } else {
      alert('Уровень не выбран!');
    }
  };
}
