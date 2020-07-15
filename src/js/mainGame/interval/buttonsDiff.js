import { setWordDiff } from '../../api';
import { nextCard, isNewUserWord } from '../utils';
import { buttonsChange } from './buttonsChange';
import { setStatistic } from '../statistic/setStatistic';

export const buttonsDiff = (event) => {
  const { id } = event.target;
  setWordDiff(false, id);
  const isNew = isNewUserWord(sessionStorage.getItem('id')) ? 'newWordsCount' : 'card';
  setStatistic(isNew);
  nextCard('right', 'intervals');
  buttonsChange();
};
