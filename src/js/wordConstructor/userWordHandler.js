import { cutWord } from './cutWord';
import { userWords } from './userWords';
import { fetchConstructorGameData } from './fetchWordConstructorGameData';
import { choiceDifficulty } from './choiceDifficulty';
import { getNewWords } from '../api/words/getNewWords';
import { getWords } from '../api';
import { randomInteger } from '../utils/index';

var n = 0;
export const userWordHandler = async () => {
  var arrUserWords = await userWords();
  var word = arrUserWords[n].word;
  var image = arrUserWords[n].image;
  var text = arrUserWords[n].textExample;
  var audio = arrUserWords[n].audio;
  var translate = arrUserWords[n].wordTranslate;
  cutWord(word, image, text, audio, translate);
  n++;
};
