import { fetchSprintGameData } from './fetchWordConstructorGameData';
import { randomInteger } from '../utils';
import { statisticPage } from './statisticPage';
import { restartWordConstructor } from './restartWordConstructor';
import { dontKnowButton } from './dontKnowButton';
import { constantsData } from './constants';

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
      constantsData.total += 1;
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
      if (b == 11) {
        var statisticBlock = document.getElementsByClassName('statistic-block');
        statisticBlock[0].style.display = 'flex';
        document.getElementsByClassName('game-block')[0].style.display = 'none';
        document.getElementsByClassName(
          'wrapper-block__settings-and-raunds-description'
        )[0].style.display = 'none';
        restartWordConstructor();
        b = 1;
        return;
      }
      document.getElementsByClassName(
        'wrapper-block__raund'
      )[0].innerHTML = `${b}/10`;
      document.getElementsByClassName(
        'game-block__footer-dont-know-button'
      )[0].style.display = 'inline-block';
      document.getElementsByClassName(
        'game-block__footer-continue'
      )[0].style.display = 'none';
      fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
    });
  document.addEventListener('keydown', function (e) {
    if (
      document.getElementsByClassName('game-block__footer-continue')[0].style
        .display == 'inline-block'
    ) {
      if (e.code == 'Enter') {
        constantsData.total += 1;
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
        if (b == 11) {
          document.onkeydown = function () {};
          var statisticBlock = document.getElementsByClassName(
            'statistic-block'
          );
          statisticBlock[0].style.display = 'flex';
          document.getElementsByClassName('game-block')[0].style.display =
            'none';
          document.getElementsByClassName(
            'wrapper-block__settings-and-raunds-description'
          )[0].style.display = 'none';
          restartWordConstructor();
          b = 1;
          return;
        }
        document.getElementsByClassName(
          'wrapper-block__raund'
        )[0].innerHTML = `${b}/10`;
        document.getElementsByClassName(
          'game-block__footer-dont-know-button'
        )[0].style.display = 'inline-block';
        document.getElementsByClassName(
          'game-block__footer-continue'
        )[0].style.display = 'none';
        fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
      }
    }
  });
}
