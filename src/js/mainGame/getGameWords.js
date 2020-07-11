import { getSettings } from './utils';
import { getMixWords, getNewWords } from '../api';
import { randomArr, getDayOfYear } from '../utils';

export const getGameWords = async () => {
  const { newWordsPerDay, wordsPerDay, onlyNewWords } = getSettings();

  if (onlyNewWords) {
    const newW = await getNewWords(wordsPerDay);
    return newW[0].paginatedResults;
  }
  const lernedWords = (+wordsPerDay) - (+newWordsPerDay);
  const userWordsArr = await getMixWords();

  const wordsCouner = (arrN) => (userWordsArr[arrN][0].totalCount.length === 0
    ? 0 : userWordsArr[2][0].totalCount[0].count);
  const repeatCount = wordsCouner(0);
  const repeat = userWordsArr[0][0].paginatedResults;
  const hardCount = wordsCouner(1);
  const hard = userWordsArr[1][0].paginatedResults;
  const goodCount = wordsCouner(2);
  const good = userWordsArr[2][0].paginatedResults;
  const weekCount = wordsCouner(3);
  const week = userWordsArr[3][0].paginatedResults;
  const allWordsCount = (+repeatCount) + (+hardCount) + (+goodCount) + (+weekCount);
  const isEnoughUserWords = allWordsCount >= lernedWords;
  const newWordsCount = isEnoughUserWords ? +newWordsPerDay : (+wordsPerDay) - (+allWordsCount);
  const getNewW = await getNewWords(newWordsCount);
  const newWords = getNewW[0].paginatedResults;
  const allWords = [];
  if (repeatCount !== 0) allWords.push(...repeat);
  if (hardCount !== 0) allWords.push(...hard);
  if (goodCount !== 0) allWords.push(...good);
  if (weekCount !== 0) allWords.push(...week);
  const day = getDayOfYear();
  const filtred = allWords.filter((obj) => obj.userWord.optional.day !== day);

  const wordsLen = filtred.length;
  const spliced = () => {
    filtred.splice(+lernedWords, wordsLen - (+lernedWords - 1), ...newWords);
    return filtred;
  };
  wordsLen > (+lernedWords) ? spliced() : filtred.push(...newWords);

  const randomNums = randomArr(filtred.length);
  const res = randomNums.map((el) => filtred[el]);

  return res;
};
