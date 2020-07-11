import { putGameStatistics } from '../api';
import { constantsData } from './constants';

export function exitInGame() {
  document
    .getElementsByClassName('wrapper-block__black-cross')[0]
    .addEventListener('click', function () {
      var conf = confirm('Вы уверены?');
      if (conf) {
        document.getElementById('confirmed').click();
        const statisticObj = {
          total: constantsData.total,
          right: constantsData.longCorrectAnswersCounter,
          wrong: constantsData.longWrongAnswersCounter,
        };
        putGameStatistics('word-constructor', statisticObj);
      } else {
        document.getElementById('cancellation').click();
      }
    });
}
