import { getWords } from '../api';
import { getAllCards } from './getAllCards';
import { showPlayDescription } from './showPlayDescription';
import { clickStart } from './clickStart';

export const startSpeakGame = async (page, group, isRepeat) => {
  const result = await getWords(page, group, 0, 10);
  let resultTen = null;
  if (!isRepeat) {
    resultTen = result.filter((el, index) => index < 10);
  } else {
    resultTen = result.filter((el, index) => index > 10);
  }
  const resTemp = getAllCards(resultTen);
  document.querySelector('.answers').innerHTML = resTemp;

  showPlayDescription(false);
  clickStart();
};
