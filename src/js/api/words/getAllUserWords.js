import { globalUser } from '../../utils';
import { getResponse } from '../getResponse';

export const getAllUserWords = async () => {
  const user = globalUser.get();
  const { id } = user;
  const url = `users/${id}/words`;
  const method = { method: 'GET' };
  const result = await getResponse(url, method);
  return result;
};
