import gameIndex from '../mainGame/gameIndex';
import gameContent from '../mainGame/gameContent';
import getWords from '../api/getWords';

async function startMainGame() {
  gameIndex();
  const gameData = await getWords();
  gameContent(gameData);
}

export default startMainGame;
