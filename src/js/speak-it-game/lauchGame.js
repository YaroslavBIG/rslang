import { startSpeakGame } from './startSpeakGame';
import { changeLevel } from './utils/changeLevel';
import { clickRestart } from './buttons/clickRestart';
import { clickResult } from './buttons/clickResult';
import { clickStart } from './buttons/clickStart';

export const launchGame = () => {
  startSpeakGame(0, 0, false);
  changeLevel();
  clickRestart();
  clickResult();
  clickStart();
};
