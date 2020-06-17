import PageStructure from './components/page-structure';
import PointsBlockCreator from './components/points-block-creator';
import HintsBlockCreator from './components/hints-block-creator';

const MiniGameSprint = () => {
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game-container');
  PageStructure(gameContainer);

  document.body.append(gameContainer);
  PointsBlockCreator();
  HintsBlockCreator();
};

export default MiniGameSprint;
