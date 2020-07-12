import { continuee } from './continue';
import { choiceDifficulty } from './choiceDifficulty';
import { constantsData } from './constants';
import { saveSettings } from '../form';
import { exitInGame } from './exitInGame';
import { exitInStatistic } from './exitInStatistic';
import { getAllUserWords } from '../api/words/getAllUserWords';

export function launchWordConstructorGame() {
  if (constantsData.checked == true) {
    document.getElementById('checkbox').checked = constantsData.checked;
  }
  var userWords = getAllUserWords();
  if (userWords.length == 0) {
    var confirirmed = confirm(
      'У вас нету изученных слов. Предлагаем изучить слова в основной игре или играть со случайными словами.'
    );
    if (confirirmed) {
      document.getElementById('confirmed').click();
    } else {
      document.getElementById('cancellation').click();
    }
  } else {
  }
  exitInGame();
  exitInStatistic();
  continuee();
  choiceDifficulty();
}
