import gameIndex from '../mainGame/gameIndex';
import gameContent from '../mainGame/gameContent';
import getWords from '../api/getWords';
import progressBar from '../mainGame/progressBar';

async function startMainGame() {
  gameIndex();
  const gameData = await getWords();
  gameContent(gameData);
  progressBar(10, 50);
  document.querySelector('.sentence--target-word').focus();
}

export default startMainGame;
