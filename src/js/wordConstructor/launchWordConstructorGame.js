import { continuee } from './continue';
import { choiceDifficulty } from './choiceDifficulty';
import { constantsData } from './constants';

export function launchWordConstructorGame() {
  if (constantsData.checked == true) {
    document.getElementById('checkbox').checked = constantsData.checked;
  }
  continuee();
  choiceDifficulty();
}
