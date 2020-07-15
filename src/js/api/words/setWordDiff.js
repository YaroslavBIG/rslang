import { isNewUserWord } from '../../mainGame/utils';
import { userWord } from './userWord';

export const setWordDiff = (wordId = false, diff = 'good', del = 'false') => {
  const targetWordId = wordId || sessionStorage.getItem('id');
  const method = isNewUserWord(targetWordId) ? 'POST' : 'PUT';
  userWord(targetWordId, method, diff, del);
};
