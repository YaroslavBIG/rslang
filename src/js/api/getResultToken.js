import { getDataToken } from './getDataToken';

export const getResultToken = () => {
  const tokenRes = getDataToken();
  return { Authorization: `Bearer ${tokenRes}` };
};
