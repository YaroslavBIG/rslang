import { launchWordConstructorGame } from './launchWordConstructorGame';
import { wordConstructorPage } from '../pages/wordConstructorPage';
import { constantsData } from './constants';

export function restartWordConstructor() {
  document
    .getElementsByClassName('statistic-block__restart')[0]
    .addEventListener('click', function () {
      document.querySelector('body').innerHTML = wordConstructorPage();
      constantsData.wrongAnswersCounter = 0;
      constantsData.correctAnswersCounter = 0;
      document.getElementsByClassName(
        'statistic-block__errors'
      )[0].innerHTML = `<p class="statistic-block__error">Ошибок: 0</p>`;
      document.getElementsByClassName(
        'statistic-block__corrects'
      )[0].innerHTML = `<p class="statistic-block__correct">Знаю: 0</p>`;
      launchWordConstructorGame();
    });
}
