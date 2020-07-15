import { cutWord } from './cutWord';
import { dontKnowButton } from './dontKnowButton';
import { volume } from './volume';
import { constantsData } from './constants';

export const userWordHandler = async () => {
  const res = JSON.parse(sessionStorage.getItem('userWords'));
  const { word } = res[constantsData.raundsCounter][constantsData.counter];
  const { image } = res[constantsData.raundsCounter][constantsData.counter];
  const text = res[constantsData.raundsCounter][constantsData.counter].textExample;
  const { audio } = res[constantsData.raundsCounter][constantsData.counter];
  const translate = res[constantsData.raundsCounter][constantsData.counter].wordTranslate;
  cutWord(word, image, text, translate, audio);
  dontKnowButton(word, translate, audio, text, image);
  volume(audio);
  constantsData.counter += 1;
  if (constantsData.counter == constantsData.raunds) {
    constantsData.raundsCounter += 1;
    constantsData.counter = 0;
  }
};
