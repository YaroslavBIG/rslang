import { globalUser } from '../../utils';
import { getResponse } from '../getResponse';

export const agregatedWords = (filter) => {
  const { id } = globalUser;
  const url = `users/${id}/aggregatedWords`;
  return getResponse(url, { method: 'GET', body: filter });
};
