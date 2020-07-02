import { getInfoWordById } from '../api/getInfoWordById';
import { renderCard } from './renderCard';
import { getUserWords } from '../api/getUserWords';
import { filterDictionaryWords } from './filterDictionaryWords';
import { getUserSettings } from '../api/getUserSettings';

export const renderWordsData = async (category = 'all') => {
  const wordsWrapper = document.querySelector('.words-wrapper');
  wordsWrapper.innerHTML = '';
  const wordsNumber = document.querySelector('.dictonary-count__numder');
  let words = null;
  const userSettings = await getUserSettings();
  words = await getUserWords();
  words = filterDictionaryWords(words, category);
  wordsNumber.innerHTML = words.length;
  if (words.length) {
    const FILTER_WORDS = words.map((word) => getInfoWordById(word.wordId));
    const WORDS_INFO = await Promise.all(FILTER_WORDS);
    WORDS_INFO.forEach((word) => {
      renderCard(word, userSettings, category);
    });
  }
};
