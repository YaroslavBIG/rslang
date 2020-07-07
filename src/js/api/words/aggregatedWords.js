import { globalUser } from '../../utils';
import { getResponse } from '../getResponse';

export const aggregatedWords = (filter) => {
  const { id } = globalUser.get();
  const body = JSON.stringify(filter);
  const res = getResponse(`users/${id}/aggregatedWords`, { method: 'GET', body });
  console.log(body);
  return res;
};
