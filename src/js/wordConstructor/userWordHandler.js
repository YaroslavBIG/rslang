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
  var word = result[n].word;
  var image = result[n].image;
  var text = result[n].textExample;
  var audio = result[n].audio;
  var translate = result[n].wordTranslate;
  cutWord(word, image, text, audio, translate, result);
  n++;
};
