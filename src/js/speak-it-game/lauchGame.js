import { startSpeakGame } from './startSpeakGame';
import { changeLevel } from './changeLevel';
import { clickRestart } from './clickRestart';
import { clickResult } from './clickResult';
import { clickStart } from './clickStart';

export const launchGame = () => {
  startSpeakGame(0, 0, false);
  changeLevel();
  clickRestart();
  clickResult();
  clickStart();
};
