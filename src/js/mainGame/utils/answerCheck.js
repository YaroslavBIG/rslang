import { setNewUserWord } from '../../api/words/setNewUserWord';

export const answerCheck = () => {
  const wordBlock = document.querySelector('.sentence--target-word');

  const word = sessionStorage.getItem('word').toLowerCase();
  const currentWord = wordBlock.innerText.toLowerCase();
  const { id } = sessionStorage;

  const hint = wordBlock.firstChild || wordBlock;
  const isHint = hint.nodeName === 'SPAN';
  const isRightAnswer = ((word === currentWord) && !isHint);
  if (isRightAnswer) {
    setNewUserWord(id);
  }
  return isRightAnswer;
};
