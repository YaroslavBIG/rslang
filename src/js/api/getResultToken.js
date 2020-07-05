import { getDataToken } from './getDataToken';

export const getResultToken = async () => {
  const tokenRes = await getDataToken();
  return { Authorization: `Bearer ${tokenRes}` };
};
