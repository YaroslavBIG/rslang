import { randomInteger } from '../utils';

export const getTwoWords = (dataArr) => {
  const twoWordsArr = [];
  const dataArrLength = dataArr.length;
  for (let i = 0; i < 2; i += 1) {
    twoWordsArr.push(dataArr[randomInteger(0, (dataArrLength - 1))]);
  }
  return twoWordsArr;
};
