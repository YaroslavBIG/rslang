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
 * @example userWord("5e9f5ee35eb9e72bc21af4a2", method = 'POST') => '417 (Expectation Failed)'
 */

export const userWord = (wordId, method = 'POST', difficulty = 'good', deleted = 'false') => {
  const { userId } = globalUser.get();

  const day = getDayOfYear();
  const repeat = difficulty === 'again';
  const newWordObj = {
    difficulty,
    optional: {
      day,
      date: getDate(),
      deleted,
      repeat,
      repeatCount: 0,
    },
  };
  const url = `users/${userId}/words/${wordId}`;
  const methodApi = { method, body: JSON.stringify(newWordObj) };
  return getResponse(url, methodApi);
};
