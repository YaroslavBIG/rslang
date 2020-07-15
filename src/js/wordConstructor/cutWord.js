import { answerHandler } from './answerHandler';
export function cutWord(
  randomWord,
  randomImage,
  randomTextExample,
  randomTranslate,
  randomAudio
) {
  document.getElementsByClassName(
    'game-block__header-name'
  )[0].innerHTML = randomTranslate;
  var letterArr = randomWord.split('');
  letterArr = letterArr.sort();
  document.getElementsByClassName(
    'game-block__body-cells-answers'
  )[0].innerHTML = '';
  document.getElementsByClassName('game-block__body-cells')[0].innerHTML = '';
  for (let i = 0; i < letterArr.length; i++) {
    document.getElementsByClassName(
      'game-block__body-cells-answers'
    )[0].innerHTML += `<button class="game-block__body-cell-answer">${letterArr[i]}</button>`;

    document.getElementsByClassName(
      'game-block__body-cells'
    )[0].innerHTML += `<div class="game-block__body-cell"></div>`;
  }
  answerHandler(
    randomWord,
    randomImage,
    randomTextExample,
    randomTranslate,
    randomAudio
  );
}
