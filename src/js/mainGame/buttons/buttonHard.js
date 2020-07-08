import { isNewUserWord } from '../utils/isNewUserWord';
import { userWord } from '../../api/words/userWord';
import { gameArrows } from './arrow';

export const buttonHard = () => {
  const wordId = sessionStorage.getItem('id');
  const method = isNewUserWord(wordId) ? 'POST' : 'PUT';
  userWord(wordId, method, 'hard');
  const obj = {
    target: 'right',
  };
  gameArrows(obj);
};
