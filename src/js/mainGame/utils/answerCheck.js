import { userWord } from '../../api/words/userWord';
import { isNewUserWord } from './isNewUserWord';
import { setStatistic, setAnswers } from '../statistic/setStatistic';
import { isHint } from './isHint';

export const answerCheck = (intervals) => {
  const wordBlock = document.querySelector('.sentence--target-word');

  const word = sessionStorage.getItem('word').toLowerCase();
  const currentWord = wordBlock.innerText.toLowerCase();
  const { id } = sessionStorage;

  const isRightAnswer = ((word === currentWord) && !isHint());

  if (isRightAnswer) {
    if (!intervals) {
      const isNew = isNewUserWord(id);
      const method = isNew ? 'POST' : 'PUT';
      if (isNew) setStatistic('newWordsCount');
      userWord(id, method);
    }
    setAnswers('right');
  }
  if (!isRightAnswer) setAnswers('wrong');

  return isRightAnswer;
};
