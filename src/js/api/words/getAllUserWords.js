import { globalUser } from '../../utils';
import { getResponse } from '../getResponse';

export const getAllUserWords = () => {
  const user = globalUser.get();
  const { id } = user;
  const url = `users/${id}/words`;
  const method = { method: 'GET' };

  return getResponse(url, method);
};
