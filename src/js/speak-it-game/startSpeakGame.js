import { getWords } from '../api';
import { getAllCards } from './getAllCards';
import { getMixWords } from '../api/words/getMixWords';
import { showPlayDescription } from './showPlayDescription';

export const startSpeakGame = async (page, group, isRepeat) => {
  const resp = await getMixWords();
  let result = [];
  if (resp.length !== 0 && resp.length >= 10) {
    resp.forEach((el) => {
      const item = el[0].paginatedResults;
      result.push(...item);
    });
  } else {
    result = await getWords(page, group, 0, 10);
  }
  let resultTen = null;
  if (!isRepeat) {
    resultTen = result.length > 10 ? result.filter((el, index) => index < 10) : result;
  } else {
    resultTen = result.length > 10 ? result.filter((el, index) => index > 10) : result;
  }
  const resTemp = getAllCards(resultTen);
  document.querySelector('.answers').innerHTML = resTemp;

  showPlayDescription(false);
};
