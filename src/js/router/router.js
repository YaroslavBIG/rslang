import speakitGame from './speakitRouter.js';
import englishPuzzleGame from './englishPuzzleRouter.js';
import savannahGame from './savannahRouter.js';
import listeningGame from './listeningRouter.js';
import sprintGame from './sprintRouter.js';
import constructorGame from './constructorRouter.js';

var speakitGame = document.getElementById('speakitGame');
var englishPuzzleGame = document.getElementById('englishPuzzleGame');
var savannahGame = document.getElementById('savannahGame');
var listeningGame = document.getElementById('listeningGame');
var sprintGame = document.getElementById('sprintGame');
var constructorGame = doxument.getElementById('constructorGame');

speakitGame.addEventListener('click', () => {
  alert();
});

englishPuzzleGame.addEventListener('click', () => {
  alert();
});

savannahGame.addEventListener('click', () => {
  alert();
});

listeningGame.addEventListener('click', () => {
  alert();
});

sprintGame.addEventListener('click', () => {
  alert();
});

constructorGame.addEventListener('click', () => {
  alert();
});

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
