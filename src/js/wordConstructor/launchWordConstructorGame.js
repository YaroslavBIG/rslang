import { continuee } from './continue';
import { choiceDifficulty } from './choiceDifficulty';
import { constantsData } from './constants';
import { saveSettings } from '../form';
import { exitInGame } from './exitInGame';
import { exitInStatistic } from './exitInStatistic';
import { getAllUserWords } from '../api/words/getAllUserWords';
import { autoProponuciation } from './autoPronunciation';

export function launchWordConstructorGame() {
  autoProponuciation();
  if (constantsData.checked == true) {
    document.getElementById('checkbox').checked = constantsData.checked;
  }
  continuee();
  choiceDifficulty();
  exitInGame();
  exitInStatistic();
}
