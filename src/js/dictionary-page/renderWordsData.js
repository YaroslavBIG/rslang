import { renderCard } from './renderCard';
import { getUserSettings } from '../api/getUserSettings';
import { getAggregatedWords } from './getAggregatedWords';
import { getTodayLearnedWords } from './getTodayLearnedWords';

export const renderWordsData = async (category = 'all') => {
  getTodayLearnedWords();
  const wordsWrapper = document.querySelector('.words-wrapper');
  wordsWrapper.innerHTML = '';
  const wordsNumber = document.querySelector('.dictonary-count__numder');
  const dictonaryLearned = document.querySelector('.dictonary-learned');
  let words = null;
  let filter = null;
  const learnedWords = await getTodayLearnedWords();
  if (category === 'all') {
    dictonaryLearned.innerHTML = `Изучено сегодня: ${learnedWords[0].paginatedResults.length}`;
    filter = { $and: [{ 'userWord.difficulty': { $ne: 'hard' }, 'userWord.optional.deleted': false }] };
  } else if (category === 'hard') {
    dictonaryLearned.innerHTML = '';
    filter = { $and: [{ 'userWord.difficulty': 'hard', 'userWord.optional.deleted': false }] };
  } else if (category === 'delete') {
    dictonaryLearned.innerHTML = '';
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
