import { getAggregatedWords } from './getAggregatedWords';
/**
 * All User Words
 * Возвращает слова которые не были изучены пользователем в указанном количестве
 * @param {Number} wordsPerPage количество слов
 * @returns {Array} Массив обектов указанной длинны со словами, при их отсутствии пустой массив
 */
export const getNewWords = async (wordsPerPage) => {
  try {
    return await getAggregatedWords({ userWord: null }, wordsPerPage);
  } catch (err) {
    return Object.keys(err);
  }
};
