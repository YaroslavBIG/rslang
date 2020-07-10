import { getResponse } from '../api/getResponse';
import { globalUser } from '../utils/main';

/**
 * Update user words
 * Функция для изменения свойств объекта слова по его id в словах пользователя
 * @param {string} wordId id слова, которое нужно изменить
 * @param {object} wordOption объект с стандартными свойствами объекта слова
 * @example wordOptionn = {
    "id": "5ee9241e12daba0017bdd5a8",
    "difficulty": string, weak - легкое, hard - тяжёлое
    "optional": {
      "isDelete": boolean, если true помещает слово в удаленные
      "repeatNumber": number, количество повторений
      "lastRepeat": number, последний раз повторялось
      "nextRepeat": number следующее повторение
    },
    "wordId": "5e9f5ee35eb9e72bc21af716"
  }
 */

export const updateUserWords = async (wordId, wordOption) => {
  const { id: userId } = globalUser.get();
  const url = `users/${userId}/words/${wordId}`;
  await getResponse(url, { method: 'PUT', body: JSON.stringify(wordOption) });
};
