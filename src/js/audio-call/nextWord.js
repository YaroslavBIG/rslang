import { renderData } from './renderData';
import { renderStat } from './renderStat';
import { DATA } from './data';

export const nextWord = (wordsForGame, index) => {
  const button = document.querySelector('.audio-call-buttons__button');
  if (index < 10) {
    renderData(wordsForGame, index);
    button.classList.remove('next');
    button.innerHTML = 'Не знаю';
  } else {
    DATA.indexForGame = 0;
    button.innerHTML = 'Ещё раз';
    button.classList.add('again');
    renderStat();
  }
};
