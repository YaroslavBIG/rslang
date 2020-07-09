import { getWordsByDiff } from './getWordsByDif';

export const getMixWords = async () => {
  const repeatWords = await getWordsByDiff('repeat');
  const hardWords = await getWordsByDiff('hard');
  const goodWords = await getWordsByDiff('good');
  const weekWords = await getWordsByDiff('week');

  console.log([repeatWords, hardWords, goodWords, weekWords]);
  return [repeatWords, hardWords, goodWords, weekWords];
};
// repeatWords, hardWords, goodWords, weekWords
