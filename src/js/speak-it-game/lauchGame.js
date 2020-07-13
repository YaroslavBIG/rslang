import { startSpeakGame } from './startSpeakGame';
import { changeLevel } from './utils/changeLevel';
import { clickRestart } from './buttons/clickRestart';
import { clickResult } from './buttons/clickResult';
import { clickStart } from './buttons/clickStart';
import { spinner } from '../spinner/spinner';

export const launchGame = () => {
  const loader = spinner();
  document.querySelector('.main').prepend(loader);
  startSpeakGame(0, 0, false);
  changeLevel();
  clickRestart();
  clickResult();
  clickStart();
};
