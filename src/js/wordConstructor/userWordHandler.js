import { cutWord } from './cutWord';
import { userWords } from './userWords';
import { fetchConstructorGameData } from './fetchWordConstructorGameData';
import { choiceDifficulty } from './choiceDifficulty';
import { getNewWords } from '../api/words/getNewWords';
import { getWords } from '../api';
import { randomInteger } from '../utils/index';
import { dontKnowButton } from './dontKnowButton';
import { volume } from './volume';
import { constantsData } from './constants';
import { saveSettings } from '../form';

var n = -1;
var r = 0;
export const userWordHandler = async () => {
  var res = JSON.parse(sessionStorage.getItem('userWords'));
  console.log(res);
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
