import { cutWord } from './cutWord';
import { dontKnowButton } from './dontKnowButton';
import { volume } from './volume';
import { constantsData } from './constants';

export const userWordHandler = async () => {
  var res = JSON.parse(sessionStorage.getItem('userWords'));
  var word = res[constantsData.raundsCounter][constantsData.counter].word;
  var image = res[constantsData.raundsCounter][constantsData.counter].image;
  var text =
    res[constantsData.raundsCounter][constantsData.counter].textExample;
  var audio = res[constantsData.raundsCounter][constantsData.counter].audio;
  var translate =
    res[constantsData.raundsCounter][constantsData.counter].wordTranslate;
  cutWord(word, image, text, translate, audio);
  dontKnowButton(word, translate, audio, text, image);
  volume(audio);
  constantsData.counter += 1;
  if (constantsData.counter == constantsData.raunds) {
    constantsData.raundsCounter += 1;
    constantsData.counter = 0;
  }
};
