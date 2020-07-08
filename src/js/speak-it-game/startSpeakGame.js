import { getWords } from '../api';
import { getAllCards } from './getAllCards';
import { showPlayDescription } from './showPlayDescription';
import { clickStart } from './clickStart';

export const startSpeakGame = async (page, group) => {
  const result = await getWords(page, group, 0, 10);
  const resultTen = result.filter((el, index) => index < 10);
  const resTemp = getAllCards(resultTen);
  document.querySelector('.answers').innerHTML = resTemp;

  showPlayDescription();
  clickStart();
};
