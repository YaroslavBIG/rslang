import { swaggerUrl } from './constants';

/**
 * Get info word by id
 * @param {string} id id слова
 * возвращает объект с данными
 * {
    "id": "string",
    "word": "string",
    "image": "string",
    "audio": "string",
    "audioMeaning": "string",
    "audioExample": "string",
    "textMeaning": "string",
    "textExample": "string",
    "transcription": "string",
    "wordTranslate": "string",
    "textMeaningTranslate": "string",
    "textExampleTranslate": "string"
    }
 */

export const getInfoWordById = async (id) => {
  const rawResponse = await fetch(`${swaggerUrl}words/${id}?noAssets=false`);
  return rawResponse.json();
};
