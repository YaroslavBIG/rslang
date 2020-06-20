import { controllerHandler } from './controllerHandler';

export const taskRendering = (word, translate, wordId, translateID) => {
  const wordBlock = document.getElementById('question');
  const translateBlock = document.getElementById('answer');
  wordBlock.innerHTML = word;
  translateBlock.innerHTML = translate;

  controllerHandler(wordId, translateID);
};
