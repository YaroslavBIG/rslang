import { continuee } from './continue';
import { fetchSprintGameData } from './fetchWordConstructorGameData';
import { randomInteger } from '../utils';
import { constantsData } from './constants';

export function dontKnowButton(
  randomWord,
  randomTranslate,
  randomAudio,
  randomTextExample,
  randomImage
) {
  var n = 0;
  var buttons = document.getElementsByClassName('game-block__body-cell-answer');
  var letterArr3 = randomWord.split('');
  document
    .getElementsByClassName('game-block__footer-dont-know-button')[0]
    .addEventListener('click', function () {
      document.getElementsByClassName(
        'game-block__body-cells-answers'
      )[0].innerHTML = '';
      for (let i = 0; i < letterArr3.length; i++) {
        let cell = document.getElementsByClassName('game-block__body-cell')[i];
        cell.innerHTML = `<button class="game-block__body-cell-answer">${letterArr3[i]}</button>`;

        document.getElementsByClassName('game-block__body-cell-answer')[
          i
        ].style.margin = '0 auto';
        document
          .getElementsByClassName('game-block__body-cell-answer')
          [i].setAttribute('disabled', 'true');
        document.getElementsByClassName('game-block__body-cell-answer')[
          i
        ].style.cursor = 'auto';
        document.getElementsByClassName('game-block__body-cell-answer')[
          i
        ].style.backgroundColor = '#28C38A';
      }
      document.getElementsByClassName('game-block__context-image')[0].src =
        constantsData.backendUrl + `${randomImage}`;
      document.getElementsByClassName(
        'game-block__context-image'
      )[0].style.display = 'block';
      document.getElementsByClassName(
        'game-block__context-text'
      )[0].style.display = 'block';
      document.getElementsByClassName(
        'game-block__context-text'
      )[0].innerHTML = randomTextExample;
      document.getElementsByClassName(
        'game-block__context-name'
      )[0].style.display = 'block';
      document.getElementsByClassName(
        'game-block__header-volume'
      )[0].style.display = 'block';
      document.getElementsByClassName('game-block__header')[0].style.width =
        '75%';
      document.getElementsByClassName(
        'game-block__volume-block'
      )[0].style.width = '50%';
      document.getElementsByClassName(
        'game-block__footer-dont-know-button'
      )[0].style.display = 'none';
      document.getElementsByClassName(
        'game-block__footer-continue'
      )[0].style.display = 'inline-block';
    });
}
