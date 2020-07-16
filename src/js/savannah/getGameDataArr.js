import { randomInteger } from '../utils';
import { getWords } from '../api';

export const getGameDataArr = async () => {
  const randomPage = randomInteger(0, 19);
  const randomLevel = randomInteger(0, 5);
  const data = await getWords(randomPage, randomLevel);
  return data;
};
