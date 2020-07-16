import { continuee } from './continue';
import { choiceDifficulty } from './choiceDifficulty';
import { constantsData } from './constants';
import { exitInGame } from './exitInGame';
import { exitInStatistic } from './exitInStatistic';
import { autoProponuciation } from './autoPronunciation';
import { userWords } from './userWords';
import { getNewWords } from '../api/words/getNewWords';
import { getUserSettings } from '../api';
import { spinnerControl } from '../mainGame/utils/spinnerControl';

export async function launchWordConstructorGame() {
  spinnerControl('on');
  autoProponuciation();
  if (constantsData.checked) {
    document.getElementById('checkbox').checked = constantsData.checked;
  }
  continuee();
  choiceDifficulty();
  exitInGame();
  exitInStatistic();
  const arrUserWords = await userWords();
  const settings = await getUserSettings();
  if (settings.optional.onlyNewWords) {
    if (arrUserWords.length % 10 !== 0) {
      const resp = await getNewWords(10 - (arrUserWords.length % 10));
      spinnerControl('off');
      const resultArr = arrUserWords.concat(resp[0].paginatedResults);
      const userWordsArr = resultArr;
      constantsData.end = userWordsArr.length;
      const size = 10;
      const res = userWordsArr.reduce(
        (p, c) => {
          if (p[p.length - 1].length === size) {
            p.push([]);
          }
          p[p.length - 1].push(c);
          return p;
        },
        [[]],
      );
      sessionStorage.setItem('userWords', JSON.stringify(res));
    }
  } else if (arrUserWords.length % 10 !== 0) {
    const resp = await getNewWords();
    const resultArr = resp[0].paginatedResults;
    const userWordsArr = resultArr;
    constantsData.end = userWordsArr;
    const size = 10;
    const res = userWordsArr.reduce(
      (p, c) => {
        if (p[p.length - 1].length === size) {
          p.push([]);
        }
        p[p.length - 1].push(c);
        return p;
      },
      [[]],
    );
    sessionStorage.setItem('userWords', JSON.stringify(res));
  }
}
