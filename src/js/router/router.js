// startButtons
import startButtons from './startButtons/startButtons.js';
startButtons();

// Components
import speakit from './speakitRouter.js';
import englishPuzzle from './englishPuzzleRouter.js';
import savannah from './savannahRouter.js';
import listening from './listeningRouter.js';
import sprint from './sprintRouter.js';
import constructor from './constructorRouter.js';

const mainPage = {
  render: () => {
    return ``;
  },
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
