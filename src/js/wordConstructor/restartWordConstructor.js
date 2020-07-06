import { launchWordConstructorGame } from './launchWordConstructorGame';
import { wordConstructorPage } from '../pages/wordConstructorPage';

export function restartWordConstructor() {
  document
    .getElementsByClassName('statistic-block__restart')[0]
    .addEventListener('click', function () {
      document.querySelector('body').innerHTML = wordConstructorPage();
      launchWordConstructorGame();
    });
}
