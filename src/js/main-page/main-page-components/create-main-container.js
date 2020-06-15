import appendGameButton from './append-game';

const createMainContainer = (parent) => {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-page__main-container');

  appendGameButton(
    'div',
    'main-container__first-game',
    'FIRST GAME',
    'main-game-first',
    mainContainer,
  );

  appendGameButton(
    'div',
    'main-container__second-game',
    'SECOND GAME',
    'main-game-second',
    mainContainer,
  );

  parent.append(mainContainer);
};

export default createMainContainer;
