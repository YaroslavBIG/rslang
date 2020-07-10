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
  try {
    const repeatWords = getWordsByDiff('repeat');
    const hardWords = getWordsByDiff('hard');
    const goodWords = getWordsByDiff('good');
    const weekWords = getWordsByDiff('week');

    return await Promise.all([repeatWords, hardWords, goodWords, weekWords]);
  } catch (err) {
    return Object.keys(err);
  }
};
