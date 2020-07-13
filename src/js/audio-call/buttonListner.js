import { DATA } from './data';
import { renderData } from './renderData';

export const buttonListner = () => {
  const button = document.querySelector('.audio-call__button');
  const audioImg = document.querySelector('.audio-call-content__audio');
  const mainWordContent = document.querySelector('.audio-call-content__word');
  if (button.classList.contains('next')) {
    renderData(DATA.words, DATA.indexForGame);
    button.classList.remove('next');
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
