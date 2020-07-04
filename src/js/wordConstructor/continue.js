import { fetchSprintGameData } from './fetchWordConstructorGameData';
import { randomInteger } from '../utils';

var randomWord = Math.ceil(Math.random() * 19);
var randomPage = Math.ceil(Math.random() * 29);
var randomGroup = Math.ceil(Math.random() * 5);
var j = randomWord;
var page = randomPage;
var group = randomGroup;
var t = 0;
var b = 1;
export function continuee() {
  document
    .getElementsByClassName('game-block__footer-continue')[0]
    .addEventListener('click', function () {
      document.getElementsByClassName(
        'game-block__context-image'
      )[0].style.display = 'none';
      document.getElementsByClassName(
        'game-block__context-text'
      )[0].style.display = 'none';
      document.getElementsByClassName(
        'game-block__context-name'
      )[0].style.display = 'none';
      document.getElementsByClassName('game-block__body-cells')[0].innerHTML =
        '';
      document.getElementsByClassName(
        'game-block__body-cells-answers'
      )[0].innerHTML = '';
      document.getElementsByClassName(
        'game-block__header-volume'
      )[0].style.display = 'none';
      document.getElementsByClassName('game-block__header')[0].style.width =
        '100%';
      document.getElementsByClassName(
        'game-block__volume-block'
      )[0].style.width = '0%';
      t++;
      b++;
      document.getElementsByClassName(
        'wrapper-block__raund'
      )[0].innerHTML = `${b}/10`;
      if (b == 11) {
        document.body.innerHTML = '';
      }
      document.getElementsByClassName(
        'game-block__footer-dont-know-button'
      )[0].style.display = 'inline-block';
      document.getElementsByClassName(
        'game-block__footer-continue'
      )[0].style.display = 'none';
      fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
    });
}
