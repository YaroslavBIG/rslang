import { getAggregatedWords } from './getAggregatedWords';
import { getDayOfYear } from '../utils/getDayOfYear';

export const getTodayLearnedWords = async () => {
  const dayOfyear = getDayOfYear();
  const filter = { $and: [{ 'userWord.optional.day': dayOfyear, 'userWord.optional.deleted': 'false' }] };
  const words = await getAggregatedWords(filter);
  return words;
};
