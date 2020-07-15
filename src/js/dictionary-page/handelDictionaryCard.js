import { updateUserWords } from './updateUserWords';
import { audioWordsDictionary } from './audioWordsDictionary';
import { getUserWordById } from './getUserWordById';

export const handelDictioaryCard = async (e) => {
  e.preventDefault();
  const card = e.target.closest('.word-card');
  const removeBtn = e.target.closest('.word-card__btn_remove');
  const returnBtn = e.target.closest('.word-card__btn_return');
  const audioWords = e.target.closest('.word-card__audio');
  const wordsNumber = document.querySelector('.dictonary-count__numder');

  if (removeBtn) {
    const wordId = card.dataset.idWord;
    const wordObj = await getUserWordById(wordId);
    const wordOption = {
      difficulty: wordObj.difficulty,
      optional: {
        day: wordObj.optional.day,
        date: wordObj.optional.date,
        deleted: true,
        repeat: wordObj.optional.repeat,
        repeatCount: wordObj.optional.repeatCount,
      },
    };
    await updateUserWords(wordId, wordOption);
    card.remove();
    wordsNumber.innerHTML -= 1;
  }

  if (returnBtn) {
    const wordId = card.dataset.idWord;
    const wordObj = await getUserWordById(wordId);
    const wordOption = {
      difficulty: 'weak',
      optional: {
        day: wordObj.optional.day,
        date: wordObj.optional.date,
        deleted: false,
        repeat: wordObj.optional.repeat,
        repeatCount: wordObj.optional.repeatCount,
      },
    };
    updateUserWords(wordId, wordOption);
    card.remove();
    wordsNumber.innerHTML -= 1;
  }

  if (audioWords) {
    const audioSrc = card.dataset.idAudio;
    audioWordsDictionary(audioSrc);
  }
};
