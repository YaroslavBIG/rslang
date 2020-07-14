import { DATA } from './data';
import { playAudio } from './playAudio';

export const cardsBlockListner = (e) => {
  const cardAnswer = e.target.closest('.audio-call-answers__item');
  const audioImg = e.target.closest('.audio-call-content__audio-img');
  const mainCard = document.querySelector('.audio-call-content__main-word');
  const audioImgContainer = document.querySelector('.audio-call-content__audio');
  const mainWordContent = document.querySelector('.audio-call-content__word');
  const button = document.querySelector('.audio-call-buttons__button');
  if (cardAnswer && !button.classList.contains('next') && !cardAnswer.classList.contains('wrong')) {
    const mainWordId = mainCard.dataset.idWord;
    const answerWordId = cardAnswer.dataset.idWord;
    if (mainWordId === answerWordId) {
      playAudio('files/correct.mp3');
      audioImgContainer.classList.add('hide');
      mainWordContent.classList.remove('hide');
      cardAnswer.classList.add('active');
      DATA.rightAnswer += 1;
      DATA.indexForGame += 1;
      DATA.points += 10;
      button.classList.add('next');
      button.innerHTML = 'Следующее';
    } else {
      playAudio('files/error.mp3');
      cardAnswer.classList.add('wrong');
      DATA.wrongAnswer += 1;
    }
  }
  if (audioImg) {
    const audioSrc = mainCard.dataset.idAudio;
    playAudio(audioSrc);
  }
};
