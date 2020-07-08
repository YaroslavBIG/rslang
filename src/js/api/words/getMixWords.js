import { getAggregatedWords } from './getAggregatedWords';

export const getMixWords = async () => {
  const repeatWords = await getAggregatedWords({ $or: [{ 'userWord.difficulty': 'again' }, { 'userWord.optional.repeat': 'true' }] });
  const hardWords = await getAggregatedWords({ 'userWord.difficulty': 'hard' });
  const goodWords = await getAggregatedWords({ 'userWord.difficulty': 'good' });
  const weekWords = await getAggregatedWords({ 'userWord.difficulty': 'week' });
  console.log(repeatWords, hardWords, goodWords, weekWords);
};
// again, hard, good, weak
