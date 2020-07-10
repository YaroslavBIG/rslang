import { getResponse } from '../getResponse';
import { getThisUserUrl } from './getThisUserUrl';

export const finalPut = async (obj) => {
  delete obj.id;
  await getResponse(getThisUserUrl(), { method: 'PUT', body: JSON.stringify(obj) });
};
