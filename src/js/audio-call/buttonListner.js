import { DATA } from './data';
import { nextWord } from './nextWord';
import { startGame } from './startGame';

export const buttonListner = () => {
  const button = document.querySelector('.audio-call-buttons__button');
  const audioImg = document.querySelector('.audio-call-content__audio');
  const mainWordContent = document.querySelector('.audio-call-content__word');
  if (button.classList.contains('next')) {
    nextWord(DATA.words, DATA.indexForGame);
  } else if (button.classList.contains('again')) {
    startGame();
    button.classList.remove('again');
    button.innerHTML = 'Не знаю';
  } else {
    audioImg.classList.add('hide');
    mainWordContent.classList.remove('hide');
    DATA.wrongAnswer += 1;
    DATA.indexForGame += 1;
    button.classList.add('next');
    button.innerHTML = 'Следующее';
  }
};
