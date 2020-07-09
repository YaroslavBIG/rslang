import { getAggregatedWords } from './getAggregatedWords';

/**
 * Words by Difficulty
 * Возвращает все слова пользователя с указанной сложностью
 * @param {String} difficulty возможные варианты сложности слов 'week'; 'hard'; 'good'; 'repeat';
 * 'repeat' - возвращает так же слова со сложнстью 'again'
 * @returns {Array} Массив обектов со словами пользователя, при их отсутствии пустой массив
 */

export const getWordsByDiff = async (difficulty) => {
  try {
    const words = await getAggregatedWords({
      $and: [
        { 'userWord.difficulty': difficulty },
        { 'userWord.optional.deleted': 'false' },
      ],
    });

    const repeat = await getAggregatedWords({
      $and: [
        {
          $or: [{ 'userWord.optional.repeat': 'true' }, { 'userWord.difficulty': 'again' }],
        },
        {
          'userWord.optional.deleted': 'false',
        },
      ],
    });

    return difficulty === 'repeat' ? repeat : words;
  } catch (err) {
    return Object.keys(err);
  }
};
