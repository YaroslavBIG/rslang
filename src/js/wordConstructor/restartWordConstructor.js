import { launchWordConstructorGame } from './launchWordConstructorGame';
import { wordConstructorPage } from '../pages/wordConstructorPage';
import { constantsData } from './constants';
import { putGameStatistics } from '../api';

export function restartWordConstructor() {
  document
    .getElementsByClassName('statistic-block__restart')[0]
    .addEventListener('click', function () {
      if (constantsData.counter != constantsData.end) {
        document.querySelector('.main').innerHTML = wordConstructorPage();
        constantsData.wrongAnswersCounter = 0;
        constantsData.correctAnswersCounter = 0;
        document.getElementsByClassName(
          'statistic-block__errors'
        )[0].innerHTML = `<p class="statistic-block__error">Ошибок: 0</p>`;
        document.getElementsByClassName(
          'statistic-block__corrects'
        )[0].innerHTML = `<p class="statistic-block__correct">Знаю: 0</p>`;
        launchWordConstructorGame();
      } else {
        alert(
          'У вас закончились слова, попробуйте сыграть в основную игру для изучения новых слов'
        );
        document.getElementById('confirmed').click();
        const statisticObj = {
          total: constantsData.total,
          right: constantsData.longCorrectAnswersCounter,
          wrong: constantsData.longWrongAnswersCounter,
        };
        putGameStatistics('word-constructor', statisticObj);
      }
    });
}
