import { getMixWords } from '../../api/words/getMixWords';

export const returnUserWordsArr = async () => {
  const resp = await getMixWords();
  const resArr = [];
  resp.forEach((el) => {
    const item = el[0].paginatedResults;
    resArr.push(...item);
  });

  return resArr;
};
