import { getMixWords } from '../api/words/getMixWords';

export const userWords = async () => {
  const resp = await getMixWords();
  const resArr = [];
  resp.forEach((el) => {
    const item = el[0].paginatedResults;
    resArr.push(...item);
  });
  console.log(resArr);
  return resArr;
};
