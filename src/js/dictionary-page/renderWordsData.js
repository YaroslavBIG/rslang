import { getInfoWordById } from '../api/getInfoWordById';
import { renderCard } from './renderCard';
import { getResponse } from '../api/getResponse';
import { load } from '../utils/load';
import { globalUser } from '../utils/main';

export const renderWordsData = async (category = 'all') => {
  const wordsWrapper = document.querySelector('.words-wrapper');
  wordsWrapper.innerHTML = '';
  const wordsNumber = document.querySelector('.dictonary-count__numder');
  load();
  let words = null;
  const userId = globalUser.get()[0].id || '5ee8922512daba0017bdc957';
  const url = `users/${userId}/words`;
  words = await getResponse(url, { method: 'GET' }); //зпрос слов ползвателя
  if (category === 'all') { // фильтр массива слов пользователя для категорий словаря (изучаеме, сложные, удаленные)
    words = words.filter((word) => word.difficulty !== 'hard' && word.optional.isDelete === false);
  } else if (category === 'hard') {//сложные слова по параметру difficlty: hard
    words = words.filter((word) => word.difficulty === 'hard' && word.optional.isDelete === false);
  } else if (category === 'delete') {//удаленные в optional поставил флаг(свойство) isDelete
    words = words.filter((word) => word.optional.isDelete === true); //
  }
  wordsNumber.innerHTML = words.length;
  if (words.length) {//запрос полной инфорации о слове по его id и ренеринг карточек
    const FILTER_WORDS = words.map((word) => getInfoWordById(word.wordId));
    const WORDS_INFO = await Promise.all(FILTER_WORDS);
    WORDS_INFO.forEach((word) => {
      renderCard(word.id, word.audio, word.word, word.transcription, word.wordTranslate, word.textExample, word.image, category);
    });
  }
};
