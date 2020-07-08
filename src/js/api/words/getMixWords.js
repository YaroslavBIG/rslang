import { getAggregatedWords } from './getAggregatedWords';

export const getMixWords = async () => {
  const repeatWords = await getAggregatedWords({ $or: [{ 'userWord.optional.repeat': 'true' }, { 'userWord.difficulty': 'again' }] });
  const hardWords = await getAggregatedWords({ 'userWord.difficulty': 'hard' });
  const goodWords = await getAggregatedWords({ 'userWord.difficulty': 'good' });
  const weekWords = await getAggregatedWords({ 'userWord.difficulty': 'week' });
  console.log([repeatWords, hardWords, goodWords, weekWords]);
  return [repeatWords, hardWords, goodWords, weekWords];
};
// again, hard, good, weak
