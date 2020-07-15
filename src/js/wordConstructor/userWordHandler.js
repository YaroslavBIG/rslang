import { cutWord } from './cutWord';
import { dontKnowButton } from './dontKnowButton';
import { volume } from './volume';
import { constantsData } from './constants';

var r = 0;
export const userWordHandler = async () => {
  var res = JSON.parse(sessionStorage.getItem('userWords'));
  var word = res[r][constantsData.counter].word;
  var image = res[r][constantsData.counter].image;
  var text = res[r][constantsData.counter].textExample;
  var audio = res[r][constantsData.counter].audio;
  var translate = res[r][constantsData.counter].wordTranslate;
  cutWord(word, image, text, translate, audio);
  dontKnowButton(word, translate, audio, text, image);
  volume(audio);
  constantsData.counter += 1;
  if (constantsData.counter == 10) {
    r++;
    constantsData.counter = 0;
  }
};
