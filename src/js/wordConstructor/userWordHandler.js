import { cutWord } from './cutWord';
import { userWords } from './userWords';
import { fetchConstructorGameData } from './fetchWordConstructorGameData';
import { choiceDifficulty } from './choiceDifficulty';
import { getNewWords } from '../api/words/getNewWords';
import { getWords } from '../api';
import { randomInteger } from '../utils/index';
import { dontKnowButton } from './dontKnowButton';
import { volume } from './volume';

var n = 0;
export const userWordHandler = async () => {
  var arrUserWords = await userWords();
  if (n == 10 && arrUserWords.length <= 10) {
    n = 0;
  }
  if (arrUserWords.length > 10) {
    if (n == arrUserWords) {
      var end = n * 0.1;
      end = Math.ceil(end) * 10;
      var raunds = end - n;
      for (var index = 0; index < raunds; index++) {
        fetchConstructorGameData(randomInteger(0, 59), randomInteger(0, 5));
      }
      if (index < raunds) {
        n = 0;
        return;
      } else {
        userWordHandler();
      }
    }
  }
  if (n >= arrUserWords.length) {
    n++;
    fetchConstructorGameData(randomInteger(0, 59), randomInteger(0, 5));
    return;
  }
  var word = arrUserWords[n].word;
  var image = arrUserWords[n].image;
  var text = arrUserWords[n].textExample;
  var audio = arrUserWords[n].audio;
  var translate = arrUserWords[n].wordTranslate;
  cutWord(word, image, text, translate, audio);
  dontKnowButton(word, translate, audio, text, image);
  volume(audio);
  n++;
};
