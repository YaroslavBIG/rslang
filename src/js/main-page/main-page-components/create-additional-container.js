import appendGameButton from './append-game';

const createAdditionalContainer = (parent) => {
  const additionalContainer = document.createElement('div');
  additionalContainer.classList.add('main-page__additional-container');

  appendGameButton(
    'div',
    'additional-container__additional-game',
    'FIRST GAME',
    'additional-game-first',
    additionalContainer,
  );

  appendGameButton(
    'div',
    'additional-container__additional-game',
    'SECOND GAME',
    'additional-game-second',
    additionalContainer,
  );

  appendGameButton(
    'div',
    'additional-container__additional-game',
    'THIRD GAME',
    'additional-game-third',
    additionalContainer,
  );

  appendGameButton(
    'div',
    'additional-container__additional-game',
    'FOURTH GAME',
    'additional-game-fourth',
    additionalContainer,
  );

  parent.append(additionalContainer);
};

export default createAdditionalContainer;
