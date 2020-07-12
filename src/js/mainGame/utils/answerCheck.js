import { userWord } from '../../api/words/userWord';
import { isNewUserWord } from './isNewUserWord';
import { setStatistic, setAnswers } from '../statistic/setStatistic';

export const answerCheck = () => {
  const wordBlock = document.querySelector('.sentence--target-word');

  const word = sessionStorage.getItem('word').toLowerCase();
  const currentWord = wordBlock.innerText.toLowerCase();
  const { id } = sessionStorage;

  const hint = wordBlock.firstChild || wordBlock;
  const isHint = hint.nodeName === 'SPAN';
  const isRightAnswer = ((word === currentWord) && !isHint);
  if (isRightAnswer) {
    const isNew = isNewUserWord(id);
    const method = isNew ? 'POST' : 'PUT';
    if (isNew) setStatistic('newWordsCount');
    userWord(id, method);
    setStatistic('card');
    setAnswers('right');
  }
  if (!isRightAnswer) setAnswers('wrong');

  return isRightAnswer;
};
