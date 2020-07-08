import { getDayOfYear, getDate, globalUser } from '../../utils';
import { getResponse } from '../getResponse';

/**
 * User Word
 * Позволяет работать со словами пользователя
 * @param {string} wordId ID слова
 * @param {string} method
 * 'POST' - Устанавливает новое слово пользователя (если слово уже существует возвращает 417 ошибку)
 * 'PUT'  - Обновление существующего слова;
 * 'DELETE' - Удаление;
 * @param {string} difficulty Сложность слова возможные варианты again, hard, good, weak,
 * @param {string} deleted Пользователь исключил слово true/false
 * @return {Array} array массив объектов
 * @example userWord("5e9f5ee35eb9e72bc21af4a2", method = 'POST') => '417 (Expectation Failed)'
 */

export const userWord = async (wordId, method = 'POST', difficulty = 'good', deleted = 'false') => {
  const user = globalUser.get();
  const { id } = user;

  const day = getDayOfYear();
  const repeat = difficulty === 'again';
  const repeatCount = parseInt(sessionStorage.getItem('repeatCount'), 10) || 0; // TODO: REPEAT COUNT
  const newWordObj = {
    difficulty,
    optional: {
      day,
      date: getDate(),
      deleted,
      repeat,
      repeatCount,
    },
  };
  const url = `users/${id}/words/${wordId}`;
  const methodApi = { method, body: JSON.stringify(newWordObj) };
  const res = await getResponse(url, methodApi);
  return res;
};
