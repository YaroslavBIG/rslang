import { getWords } from '../api';
import { getAllCards } from './getAllCards';
import { showPlayDescription } from './showPlayDescription';
import { clickStart } from './clickStart';

export const startSpeakGame = async (page, group, isRepeat) => {
  const result = await getWords(page, group, 0, 10);
  let resultTen = null;
  if (!isRepeat) {
    resultTen = result.length > 10 ? result.filter((el, index) => index < 10) : result;
  } else {
    resultTen = result.length > 10 ? result.filter((el, index) => index > 10) : result;
  }
  const resTemp = getAllCards(resultTen);
  document.querySelector('.answers').innerHTML = resTemp;

  showPlayDescription(false);
  clickStart();
};
