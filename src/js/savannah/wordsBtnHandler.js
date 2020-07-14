export const wordsBtnHandler = () => {
  const wordsContainer = document.getElementById('words-container');
  const questionId = document.getElementById('question').dataset.id;
  wordsContainer
    .querySelectorAll('.words-container__word')
    . forEach((el) => {
      el.onclick = () => console.log((el.dataset.id === questionId));
    });
};
