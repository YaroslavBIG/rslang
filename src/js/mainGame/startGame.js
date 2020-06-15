import gameIndex from './gameIndex';
import gameContent from './gameContent';
import getWords from '../api/getWords';

async function startGame() {
  gameIndex();
  const gameData = await getWords();
  gameContent(gameData);
}

export default startGame;
