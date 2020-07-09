import { getSettings } from './utils';
import { getMixWords, getNewWords } from '../api';

export const getGameWords = async () => {
  const { newWordsPerDay, wordsPerDay } = getSettings();
  const lernedWords = (+wordsPerDay) - (+newWordsPerDay);
  const userWordsArr = await getMixWords();
  const repeatCount = userWordsArr[0][0].totalCount[0].count;
  const repeat = userWordsArr[0][0].paginatedResults[0];
  const hardCount = userWordsArr[1][0].totalCount[0].count;
  const hard = userWordsArr[1][0].paginatedResults[0];
  const goodCount = userWordsArr[2][0].paginatedResults[0].count;
  const good = userWordsArr[2][0].paginatedResults[0];
  const weekCount = userWordsArr[3][0].paginatedResults[0].count;
  const week = userWordsArr[3][0].paginatedResults[0];
  const allWordsCount = (+repeatCount) + (+hardCount) + (+goodCount) + (+weekCount);
  const isEnoughUserWords = allWordsCount >= lernedWords;
  const newWordsCount = isEnoughUserWords ? +newWordsPerDay : (+wordsPerDay) - (+allWordsCount);
  const newWords = await getNewWords(newWordsCount)[0].paginatedResults;
  const allWords = [];
  if (repeatCount !== 0) allWords.concat(repeat);
  if (hardCount !== 0) allWords.concat(hard);
  if (goodCount !== 0) allWords.concat(good);
  if (weekCount !== 0) allWords.concat(week);
  const wordsLen = allWords.length;
  const spliced = () => {
    allWords.splice(+lernedWords - 1, wordsLen - (+lernedWords - 1), ...newWords);
    return allWords;
  };
  wordsLen > (+lernedWords) ? spliced() : allWords.concat(newWords);
  return allWords;
};
