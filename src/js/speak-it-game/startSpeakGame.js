import { getWords } from '../api';
import { getAllCards } from './getAllCards';
import { showPlayDescription } from './showPlayDescription';
import { clickStart } from './clickStart';

export const startSpeakGame = async (page, group, perPage) => {
  const result = await getWords(page, group, 10, perPage);
  const resTemp = getAllCards(result);
  document.querySelector('.answers').innerHTML = resTemp;

  showPlayDescription();
  clickStart();
};
