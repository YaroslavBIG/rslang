/**
  * в switch каждый забирает свой кейс, чтобы не пушить пустые болванки.
  * в нем пишет те функции, которые вызываются у него на странице.
  * список кейсов:
  * case '/main': {}
  * case '/main/settings': {}
  * case '/main/word-repeat': {}
  * case '/main/english-puzzle': {}
  * case '/main/speak-it': {}
  * case '/main/audition': {}
  * case '/main/savannah': {}
  * case '/main/word-puzzle': {}
  * case '/vocabulary': {}
  * case '/statistic': {}
  * case '/about-us': {}
  */

import { controlForm, submitForm, chooseIcon } from '../form';
import { startSprintGame } from '../mini-game-sprint/launchSprintGameMethods';
import { startMainGame } from '../mainGame';

export const callsNecessaryMethods = (path) => {
  switch (path) {
    case '/': {
      break;
    }
    case '/auth': {
      controlForm();
      submitForm();
      chooseIcon();
      break;
    }
    case '/main/word-learning': {
      startMainGame();
      break;
    }
    case '/main/sprint': {
      startSprintGame();
      break;
    }
    default: {
      return 'default';
    }
  }
};
