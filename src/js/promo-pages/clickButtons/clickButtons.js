import { startSprintGame } from '../../mini-game-sprint/launchSprintGameMethods';
import { launchWordConstructorGame } from '../../wordConstructor/launchWordConstructorGame';
import { startMainGame } from '../../mainGame/startGame';
import { launchGame } from '../../speak-it-game';
import { startGame } from '../../audio-call/startGame';
import { launchSavannahMethods } from '../../savannah/launchSavannahMethods';
import { startGame } from '../../audio-call/startGame';

export const clickButtonIntervalRepeatContinue = () => {
  document
    .getElementById('modal-footer__continue')
    .addEventListener('click', () => {
      document.getElementById('myModal').style.display = 'none';
      startMainGame('intervals');
    });
};

export const clickButtonSpeakIt = () => {
  document.getElementById('speakitGame').addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'none';
    launchGame();
  });
};

export const clickButtonEnglishPuzzle = () => {
  document.getElementById('englishPuzzleGame').addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'none';
  });
};

export const clickButtonSavannahGame = () => {
  document.getElementById('savannahGame').addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'none';
    launchSavannahMethods();
  });
};

export const clickButtonListeningGame = () => {
  document.getElementById('listeningGame').addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'none';
    startGame();
  });
};

export const clickButtonSprintGame = () => {
  document.getElementById('sprintGame').addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'none';
    startSprintGame();
  });
};

export const clickButtonConstructorGame = () => {
  document.getElementById('constructorGame').addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'none';
    launchWordConstructorGame();
  });
};
