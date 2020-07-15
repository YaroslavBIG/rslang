import { constantsData } from './constants';

export function answerHandler(
  randomWord,
  randomImage,
  randomText,
  randomTranslate,
  randomAudio,
) {
  const letterArr2 = randomWord.split('');
  let placeIndex = 0;
  const buttons = document.getElementsByClassName('game-block__body-cell-answer');
  constantsData.errorWord = 'correct';
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', () => {
      if (button.innerHTML == letterArr2[0]) {
        button.style.background = '#28C38A';
        document
          .getElementsByClassName('game-block__body-cell')
          [placeIndex].appendChild(button);
        button.style.margin = '0 auto';
        button.setAttribute('disabled', 'true');
        button.style.cursor = 'auto';
        letterArr2.splice(0, 1);
        placeIndex++;
        if (letterArr2.length == 0) {
          if (constantsData.errorWord == false) {
            constantsData.wrongAnswersCounter += 1;
            constantsData.longWrongAnswersCounter += 1;
            document.getElementsByClassName(
              'statistic-block__error',
            )[0].innerHTML = `ОШИБОК: ${constantsData.wrongAnswersCounter}`;
            document.getElementsByClassName(
              'statistic-block__errors',
            )[0].innerHTML += `<p>${randomWord} — ${randomTranslate}</p>`;
          }
          if (constantsData.errorWord == 'correct') {
            constantsData.correctAnswersCounter += 1;
            constantsData.longCorrectAnswersCounter += 1;
            document.getElementsByClassName(
              'statistic-block__correct',
            )[0].innerHTML = `ЗНАЮ: ${constantsData.correctAnswersCounter}`;
            document.getElementsByClassName(
              'statistic-block__corrects',
            )[0].innerHTML += `<p>${randomWord} — ${randomTranslate}</p>`;
          }
          if (constantsData.checked == true) {
            const sound = document.createElement('audio');
            sound.src = `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${randomAudio}`;
            sound.play();
          }
          document.getElementsByClassName(
            'game-block__footer-dont-know-button',
          )[0].style.display = 'none';
          document.getElementsByClassName(
            'game-block__footer-continue',
          )[0].style.display = 'inline-block';
          document.getElementsByClassName(
            'game-block__context-image',
          )[0].src = `${constantsData.backendUrl}${randomImage}`;
          document.getElementsByClassName(
            'game-block__context-image',
          )[0].style.display = 'block';
          document.getElementsByClassName(
            'game-block__context-text',
          )[0].style.display = 'block';
          document.getElementsByClassName(
            'game-block__context-text',
          )[0].innerHTML = randomText;
          document.getElementsByClassName(
            'game-block__context-name',
          )[0].style.display = 'block';
          document.getElementsByClassName(
            'game-block__header-volume',
          )[0].style.display = 'block';
          document.getElementsByClassName('game-block__header')[0].style.width = '75%';
          document.getElementsByClassName(
            'game-block__volume-block',
          )[0].style.width = '50%';
        }
      } else {
        constantsData.errorWord = false;
        document.getElementsByClassName(
          'game-block__footer-dont-know-button',
        )[0].style.display = 'inline-block';
        document.getElementsByClassName(
          'game-block__footer-continue',
        )[0].style.display = 'none';
        button.style.backgroundColor = '#ee5838';
        setTimeout(() => {
          button.style.backgroundColor = '#2582e7';
        }, 500);
      }
    });
  }
}
