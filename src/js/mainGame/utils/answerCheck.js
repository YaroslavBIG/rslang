import { userWord } from '../../api/words/userWord';
import { isNewUserWord } from './isNewUserWord';

export const answerCheck = () => {
  const wordBlock = document.querySelector('.sentence--target-word');

  const word = sessionStorage.getItem('word').toLowerCase();
  const currentWord = wordBlock.innerText.toLowerCase();
  const { id } = sessionStorage;

  const hint = wordBlock.firstChild || wordBlock;
  const isHint = hint.nodeName === 'SPAN';
  const isRightAnswer = ((word === currentWord) && !isHint);
  if (isRightAnswer) {
    const method = isNewUserWord(id) ? 'POST' : 'PUT';
    userWord(id, method);
  }
  return isRightAnswer;
};
