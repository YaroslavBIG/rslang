import { updateUserWords } from '../api/updateUserWords';
import { audioWordsDictionary } from './audioWordsDictionary';

export const handelDictioaryCard = (e) => {
  e.preventDefault();
  const card = e.target.closest('.word-card');
  const removeBtn = e.target.closest('.word-card__btn_remove');
  const returnBtn = e.target.closest('.word-card__btn_return');
  const audioWords = e.target.closest('.word-card__audio');
  const wordsNumber = document.querySelector('.dictonary-count__numder');

  if (removeBtn) {
    const wordId = card.dataset.idWord;
    const wordOption = { difficulty: 'weak', optional: { isDelete: true } };
    updateUserWords(wordId, wordOption);
    card.remove();
    wordsNumber.innerHTML -= 1;
  }

  if (returnBtn) {
    const wordId = card.dataset.idWord;
    const wordOption = { difficulty: 'weak', optional: { isDelete: false } };
    updateUserWords(wordId, wordOption);
    card.remove();
    wordsNumber.innerHTML -= 1;
  }

  if (audioWords) {
    const audioSrc = card.dataset.idAudio;
    audioWordsDictionary(audioSrc);
    console.log('audio');
  }
};
