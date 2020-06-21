export const buttonAnswer = () => {
  const wordBlock = document.querySelector('.sentence--target-word');
  const deleteAnswer = () => { wordBlock.innerHTML = ''; };
  const userAnswer = wordBlock.innerText;
  const word = sessionStorage.getItem('word');

  const answer = document.createElement('span');
  if (userAnswer === '') {
    answer.classList.add('anwser');
    answer.innerText = word;
    answer.addEventListener('click', () => deleteAnswer());
  }
  deleteAnswer();
  wordBlock.append(answer);
};
