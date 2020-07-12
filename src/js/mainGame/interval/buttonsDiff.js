import { setWordDiff } from '../../api';
import { nextCard } from '../utils';
import { buttonsChange } from './buttonsChange';

export const buttonsDiff = (event) => {
  const { id } = event.target;
  setWordDiff(false, id);
  nextCard('right', 'interval');
  buttonsChange();
};
