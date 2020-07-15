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
  document.getElementsByClassName(
    'game-block__footer-dont-know-button'
  )[0].onclick = function () {
    if (constantsData.checked == true) {
      var sound = document.createElement('audio');
      sound.src = `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${randomAudio}`;
      sound.play();
    }
    constantsData.errorWord = true;
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
    document.getElementsByClassName('game-block__volume-block')[0].style.width =
      '50%';
    document.getElementsByClassName(
      'game-block__footer-dont-know-button'
    )[0].style.display = 'none';
    document.getElementsByClassName(
      'game-block__footer-continue'
    )[0].style.display = 'inline-block';
    if (constantsData.errorWord == true) {
      constantsData.wrongAnswersCounter += 1;
      constantsData.longWrongAnswersCounter += 1;
      document.getElementsByClassName(
        'statistic-block__error'
      )[0].innerHTML = `ОШИБОК: ${constantsData.wrongAnswersCounter}`;
      document.getElementsByClassName(
        'statistic-block__errors'
      )[0].innerHTML += `<p>${randomWord} — ${randomTranslate}</p>`;
    }
  };
  document.onkeydown = function (e) {
    if (
      document.getElementsByClassName('game-block__footer-dont-know-button')[0]
        .style.display == '' ||
      document.getElementsByClassName('game-block__footer-dont-know-button')[0]
        .style.display == 'inline-block'
    ) {
      if (e.code == 'Enter') {
        constantsData.errorWord = true;
        document.getElementsByClassName(
          'game-block__body-cells-answers'
        )[0].innerHTML = '';
        for (let i = 0; i < letterArr3.length; i++) {
          let cell = document.getElementsByClassName('game-block__body-cell')[
            i
          ];
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
        if (constantsData.errorWord == true) {
          constantsData.wrongAnswersCounter += 1;
          constantsData.longWrongAnswersCounter += 1;
          document.getElementsByClassName(
            'statistic-block__error'
          )[0].innerHTML = `ОШИБОК: ${constantsData.wrongAnswersCounter}`;
          document.getElementsByClassName(
            'statistic-block__errors'
          )[0].innerHTML += `<p>${randomWord} — ${randomTranslate}</p>`;
        }
        if (constantsData.checked == true) {
          var sound = document.createElement('audio');
          sound.src = `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${randomAudio}`;
          sound.play();
        }
      }
    }
  };
}
