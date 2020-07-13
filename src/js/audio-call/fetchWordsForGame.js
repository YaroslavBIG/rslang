import { getWords } from '../api/getWords';
import { getAggregatedWords } from '../api/words/getAggregatedWords';
import { randomInteger } from '../utils/random';
import { DATA } from './data';

export const fetchWordsForGame = async () => {
  let wordsForGame = null;
  const filter = { $and: [{ 'userWord.optional.deleted': false }] };
  const userWords = await getAggregatedWords(filter);
  const randomPage = randomInteger(0, 29);
  if (userWords[0].paginatedResults.length >= 15) {
    wordsForGame = userWords[0].paginatedResults;
  } else {
    wordsForGame = await getWords(randomPage);
  }
  wordsForGame.sort(() => Math.random() - 0.5);
  DATA.words = wordsForGame;
  return wordsForGame;
};
