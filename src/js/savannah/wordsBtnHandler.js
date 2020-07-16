import { choice } from './choice';

export const wordsBtnHandler = () => {
  const wordsContainer = document.getElementById('words-container');
  if (wordsContainer) {
    const question = document.getElementById('question');
    if (question) {
      const questionId = question.dataset.id;
      wordsContainer
        .querySelectorAll('.words-container__word')
        .forEach((el) => {
          el.onclick = () => choice(questionId, el.dataset.id);
        });
    }
  }
};
