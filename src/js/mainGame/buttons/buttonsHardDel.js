import { isNewUserWord } from '../utils';
import { userWord } from '../../api/words/userWord';
import { gameArrows } from './arrow';
import { buttonAnswer } from './buttonAnswer';

export const buttonsHardDel = (diff = 'good', del = 'false') => {
  const wordId = sessionStorage.getItem('id');
  const method = isNewUserWord(wordId) ? 'POST' : 'PUT';
  userWord(wordId, method, diff, del);
  const obj = {
    target: 'right',
  };
  const wordBlock = document.querySelector('.sentence--target-word');
  if (del === 'true') {
    const word = sessionStorage.getItem('word').toLowerCase();
    wordBlock.innerText = word;
    gameArrows(obj);
  }
  if (diff === 'hard') {
    buttonAnswer();
    alert('Слову присвоенна категория: сложные'); // TODO: MODAL
  }
  wordBlock.innerText = '';
};
