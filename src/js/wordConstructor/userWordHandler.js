import { cutWord } from './cutWord';
import { userWords } from './userWords';
import { fetchConstructorGameData } from './fetchWordConstructorGameData';
import { choiceDifficulty } from './choiceDifficulty';
import { getNewWords } from '../api/words/getNewWords';
import { getWords } from '../api';
import { randomInteger } from '../utils/index';
import { dontKnowButton } from './dontKnowButton';
import { volume } from './volume';

var n = -1;
var r = 0;
export const userWordHandler = async () => {
  var arrUserWords = await userWords();
  if (arrUserWords.length % 10 != 0) {
    let resp = await getNewWords(10 - (arrUserWords.length % 10));
    var resultArr = arrUserWords.concat(resp[0].paginatedResults);
    const userWordsArr = resultArr;
    const size = 10;
    var res = userWordsArr.reduce((p, c) => { if (p[p.length - 1].length === size) { p.push([]); } p[p.length - 1].push(c); return p; }, [[]]); console.log(res);
  }
  n++;
  var word = res[r][n].word;
  var image = res[r][n].image;
  var text = res[r][n].textExample;
  var audio = res[r][n].audio;
  var translate = res[r][n].wordTranslate;
  cutWord(word, image, text, translate, audio);
  dontKnowButton(word, translate, audio, text, image);
  volume(audio);
  if (n == 10) {
    r++;
  }
  if (n == res.length) {
    n = 0;
    r = 0;
    document
      .getElementsByClassName('statistic-block__restart')[0]
      .addEventListener('click', function () {
        var conf = confirm('У вас закончились слова, поиграйте в основную игру');
        if (conf) {
          document.getElementById('confirmed').click();
          const statisticObj = {
            total: constantsData.total,
            right: constantsData.longCorrectAnswersCounter,
            wrong: constantsData.longWrongAnswersCounter,
          };
          putGameStatistics('word-constructor', statisticObj);
        } else {
          document.getElementById('cancellation').click();
        }
      });
  }
};
