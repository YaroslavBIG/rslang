import { getResponse } from './getResponse';
import { load } from '../utils/load';
import { globalUser } from '../utils/main';

export const updateUserWords = async (wordId, wordOption) => {
  load();
  const userId = globalUser.get()[0].id || '5ee8922512daba0017bdc957';
  const url = `users/${userId}/words/${wordId}`;
  await getResponse(url, { method: 'PUT', body: JSON.stringify(wordOption) });
};
