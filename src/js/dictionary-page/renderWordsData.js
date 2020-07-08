import { renderCard } from './renderCard';
import { getUserSettings } from '../api/getUserSettings';
import { getAggregatedWords } from './getAggregatedWords';

export const renderWordsData = async (category = 'all') => {
  const wordsWrapper = document.querySelector('.words-wrapper');
  wordsWrapper.innerHTML = '';
  const wordsNumber = document.querySelector('.dictonary-count__numder');
  let words = null;
  let filter = null;
  if (category === 'all') {
    filter = { $and: [{ 'userWord.difficulty': { $ne: 'hard' }, 'userWord.optional.deleted': false }] };
  } else if (category === 'hard') {
    filter = { $and: [{ 'userWord.difficulty': 'hard', 'userWord.optional.deleted': false }] };
  } else if (category === 'delete') {
    filter = { $and: [{ 'userWord.optional.deleted': true }] };
  }
  words = await getAggregatedWords(filter);
  const userSettings = await getUserSettings();
  if (words.length) {
    wordsNumber.innerHTML = words[0].paginatedResults.length;
    words[0].paginatedResults.forEach((word) => {
      renderCard(word, userSettings, category);
    });
  }
};
