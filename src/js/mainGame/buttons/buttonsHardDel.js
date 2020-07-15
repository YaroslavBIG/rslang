import { gameArrows } from './arrow';
import { buttonAnswer } from './buttonAnswer';
import { setWordDiff } from '../../api';

export const buttonsHardDel = (diff = 'good', del = 'false') => {
  setWordDiff(false, diff, del);

  const wordBlock = document.querySelector('.sentence--target-word');
  if (del === 'true') {
    const word = sessionStorage.getItem('word').toLowerCase();
    wordBlock.innerText = word;
    gameArrows({ target: 'right' });
  }
  if (diff === 'hard') {
    buttonAnswer();
    alert('Слову присвоенна категория: сложные');
  }
  wordBlock.innerText = '';
};
