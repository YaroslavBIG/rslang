import { controllerHandler } from './controllerHandler';

export const taskRendering = (word, translate, wordId, translateID) => {
  const wordBlock = document.getElementById('question');
  const translateBlock = document.getElementById('answer');
  if (word) {
    wordBlock.innerHTML = word;
  }
  if (translate) {
    translateBlock.innerHTML = translate;
  }

  controllerHandler(wordId, translateID);
};
