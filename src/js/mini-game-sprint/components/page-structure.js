import ElementCreator from './element-creator';

const PageStructure = (parent) => {
  ElementCreator(
    'div',
    'game-container__points',
    'points',
    parent,
  );
  ElementCreator(
    'div',
    'game-container__main-content',
    'main-content',
    parent,
  );
  ElementCreator(
    'div',
    'game-container__hints',
    'hints',
    parent,
  );
  ElementCreator(
    'div',
    'game-container__timer',
    'timer',
    parent,
  );
};

export default PageStructure;
