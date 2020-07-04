import { constantsData } from './constants';

export function answerHandler(
  randomWord,
  randomImage,
  randomText,
  randomAudio
) {
  var letterArr2 = randomWord.split('');
  var n = 0;
  var buttons = document.getElementsByClassName('game-block__body-cell-answer');
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', function () {
      if (button.innerHTML == letterArr2[0]) {
        button.style.background = '#28C38A';
        document
          .getElementsByClassName('game-block__body-cell')
          [n].appendChild(button);
        button.style.margin = '0 auto';
        button.setAttribute('disabled', 'true');
        button.style.cursor = 'auto';
        letterArr2.splice(0, 1);
        console.log(letterArr2);
        console.log(letterArr2[0]);
        n++;
        if (letterArr2.length == 0) {
          if ((constantsData.errorWord = false)) {
            constantsData.wrongAnswersCounter++;
            document.getElementsByClassName(
              'statistic-block'
            )[0].innerHTML += `<div>${randomWord}</div>`;
          }
          if (constantsData.checked == true) {
            var sound = document.createElement('audio');
            sound.src = `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${randomAudio}`;
            sound.play();
          }
          document.getElementsByClassName(
            'game-block__footer-dont-know-button'
          )[0].style.display = 'none';
          document.getElementsByClassName(
            'game-block__footer-continue'
          )[0].style.display = 'inline-block';
          document.getElementsByClassName(
            'game-block__context-image'
          )[0].src = `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${randomImage}`;
          document.getElementsByClassName(
            'game-block__context-image'
          )[0].style.display = 'block';
          document.getElementsByClassName(
            'game-block__context-text'
          )[0].style.display = 'block';
          document.getElementsByClassName(
            'game-block__context-text'
          )[0].innerHTML = randomText;
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
        }
      } else {
        constantsData.errorWord = false;
        document.getElementsByClassName(
          'game-block__footer-dont-know-button'
        )[0].style.display = 'inline-block';
        document.getElementsByClassName(
          'game-block__footer-continue'
        )[0].style.display = 'none';
        button.style.backgroundColor = '#ee5838';
        setTimeout(function () {
          button.style.backgroundColor = '#2582e7';
        }, 500);
      }
    });
  }
}
