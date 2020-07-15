import { getMixWords } from '../api/words/getMixWords';

export const fetchUserWords = async () => {
  const allUserWordsArr = [];
  const userWordsArr = await getMixWords();
  userWordsArr.forEach((el) => {
    el.forEach((obj) => {
      const keysArr = Object.keys(obj);
      keysArr.forEach((key) => {
        if (key === 'paginatedResults') {
          obj[key].forEach((elem) => allUserWordsArr.push(elem));
        }
      });
    });
  });
  return allUserWordsArr;
};
