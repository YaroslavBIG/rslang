import { correctionBlock } from '../utils/correctionBlock';

export const buttonAnswer = () => {
  const wordBlock = document.querySelector('.sentence--target-word');
  const deleteAnswer = () => {
    wordBlock.classList.remove('target-word--incorrect');
    wordBlock.innerHTML = '';
  };
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
};
