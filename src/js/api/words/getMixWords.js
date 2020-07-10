import { getWordsByDiff } from './getWordsByDif';

/**
 * Mix Words
 * Возвращает массив с набором изученных слов:
 * 1 элемент массива слова для повторения (помеченные again или с параметром repeat: 'true')
 * 2 элемент массива слова со сложностью 'hard'
 * 3 элемент массива слова со сложностью 'good'
 * 4 элемент массива слова со сложностью 'week'
 * @returns {Array} Массив с массивами обектов, при их отсутствии с пустыми массивами
 */

export const getMixWords = async () => {
  const repeatWords = await getWordsByDiff('repeat');
  const hardWords = await getWordsByDiff('hard');
  const goodWords = await getWordsByDiff('good');
  const weekWords = await getWordsByDiff('week');

  return [repeatWords, hardWords, goodWords, weekWords];
};
