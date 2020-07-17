import { cutWord } from './cutWord';
import { dontKnowButton } from './dontKnowButton';
import { volume } from './volume';
import { constantsData } from './constants';
import { answerHandler } from './answerHandler';

export const userWordHandler = async () => {
  const res = JSON.parse(sessionStorage.getItem('userWords'));
  const { raundsCounter, counter } = constantsData;
  const { word, audio, image } = res[raundsCounter][counter];
  const text = res[raundsCounter][counter].textExample;
  const translate = res[raundsCounter][counter].wordTranslate;
  cutWord(word, translate);
  dontKnowButton(word, translate, audio, text, image);
  volume(audio);
  const buttons = document.querySelectorAll('.game-block__body-cell-answer');
  buttons.forEach((button) =>
    button.addEventListener('click', (ev) =>
      answerHandler(ev, word, image, text, translate, audio)
    )
  );
  constantsData.counter += 1;
  if (constantsData.counter === constantsData.raunds) {
    constantsData.raundsCounter += 1;
    constantsData.counter = 0;
  }
};
