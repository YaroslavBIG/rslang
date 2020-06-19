import speakit from './speakitRouter.js';
import englishPuzzle from './englishPuzzleRouter.js';
import savannah from './savannahRouter.js';
import listening from './listeningRouter.js';
import sprint from './sprintRouter.js';
import constructor from './constructorRouter.js';

const mainPage = () => {
  return ``;
};

// Routes
const routes = [
  { path: '/', component: mainPage },
  { path: '/speakit', component: speakit },
  { path: '/english-puzzle', component: englishPuzzle },
  { path: '/savannah', component: savannah },
  { path: '/listening', component: listening },
  { path: '/sprint', component: sprint },
  { path: '/constructor', component: constructor },
];

const checkPath = (path) => {
  switch (path) {
    case '/': {
      return mainPage();
    }
    case '/speakit': {
      return speakit();
    }
    case '/english-puzzle': {
      return englishPuzzle();
    }
    case '/savannah': {
      return savannah();
    }
    case '/listening': {
      return listening();
    }
    case '/sprint': {
      return sprint();
    }
    case '/constructor': {
      return constructor();
    }
  }
};
