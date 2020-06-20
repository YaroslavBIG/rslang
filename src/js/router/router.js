import speakitGame from './speakitRouter.js';
import englishPuzzleGame from './englishPuzzleRouter.js';
import savannahGame from './savannahRouter.js';
import listeningGame from './listeningRouter.js';
import sprintGame from './sprintRouter.js';
import constructorGame from './constructorRouter.js';

const mainPage = () => {
  return ``;
};

// Routes
const routes = [
  { path: '/', component: mainPage },
  { path: '/speakit', component: speakitGame },
  { path: '/english-puzzle', component: englishPuzzleGame },
  { path: '/savannah', component: savannahGame },
  { path: '/listening', component: listeningGame },
  { path: '/sprint', component: sprintGame },
  { path: '/constructor', component: constructorGame },
];

const checkPath = (path) => {
  switch (path) {
    case '/': {
      return mainPage();
    }
    case '/speakit': {
      return speakitGame();
    }
    case '/english-puzzle': {
      return englishPuzzleGame();
    }
    case '/savannah': {
      return savannahGame();
    }
    case '/listening': {
      return listeningGame();
    }
    case '/sprint': {
      return sprintGame();
    }
    case '/constructor': {
      return constructorGame();
    }
  }
};
