export const deleteAnswer = () => {
  const wordBlock = document.querySelector('.sentence--target-word');
  wordBlock.classList.remove('target-word--incorrect');
  wordBlock.innerHTML = '';
};
