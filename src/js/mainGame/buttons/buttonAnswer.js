import { correctionBlock } from '../utils/correctionBlock';
import { deleteAnswer } from '../utils';

export const buttonAnswer = () => {
  const wordBlock = document.querySelector('.sentence--target-word');
  const userAnswer = wordBlock.innerText;
  const word = sessionStorage.getItem('word');

  const answer = document.createElement('span');
  if (userAnswer === '') {
    answer.classList.add('anwser');
    answer.innerText = word;
  }
  deleteAnswer();
  answer.innerHTML = correctionBlock(userAnswer, word);
  answer.addEventListener('click', () => deleteAnswer());
  wordBlock.append(answer);
  const hint = document.querySelectorAll('.anwser');
  setTimeout(() => { hint.forEach((el) => { el.style.color = '#adadad'; }); }, 3000);
};
