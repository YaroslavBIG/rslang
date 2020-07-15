import { continuee } from './continue';
import { choiceDifficulty } from './choiceDifficulty';
import { constantsData } from './constants';
import { saveSettings } from '../form';
import { exitInGame } from './exitInGame';
import { exitInStatistic } from './exitInStatistic';
import { getAllUserWords } from '../api/words/getAllUserWords';
import { autoProponuciation } from './autoPronunciation';
import { userWords } from './userWords';
import { getNewWords } from '../api/words/getNewWords';
import { getUserSettings } from '../api';

export async function launchWordConstructorGame() {
  autoProponuciation();
  if (constantsData.checked == true) {
    document.getElementById('checkbox').checked = constantsData.checked;
  }
  continuee();
  choiceDifficulty();
  exitInGame();
  exitInStatistic();
  var arrUserWords = await userWords();
  var settings = await getUserSettings();
  if (settings.optional.onlyNewWords) {
    if (arrUserWords.length % 10 != 0) {
      let resp = await getNewWords(10 - (arrUserWords.length % 10));
      var resultArr = arrUserWords.concat(resp[0].paginatedResults);
      var userWordsArr = resultArr;
      constantsData.end = userWordsArr.length;
      const size = 10;
      var res = userWordsArr.reduce(
        (p, c) => {
          if (p[p.length - 1].length === size) {
            p.push([]);
          }
          p[p.length - 1].push(c);
          return p;
        },
        [[]]
      );
      console.log(res);
    }
    sessionStorage.setItem('userWords', JSON.stringify(res));
  } else {
    if (arrUserWords.length % 10 != 0) {
      let resp = await getNewWords();
      var resultArr = resp[0].paginatedResults;
      var userWordsArr = resultArr;
      constantsData.end = userWordsArr;
      const size = 10;
      var res = userWordsArr.reduce(
        (p, c) => {
          if (p[p.length - 1].length === size) {
            p.push([]);
          }
          p[p.length - 1].push(c);
          return p;
        },
        [[]]
      );
      console.log(res);
    }
    sessionStorage.setItem('userWords', JSON.stringify(res));
  }
}
