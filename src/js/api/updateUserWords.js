import { getResponse } from './getResponse';
import { load } from '../utils/load';
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
  load();
  const userId = globalUser.get()[0].id || '5ee8922512daba0017bdc957';
  const url = `users/${userId}/words/${wordId}`;
  await getResponse(url, { method: 'PUT', body: JSON.stringify(wordOption) });
};