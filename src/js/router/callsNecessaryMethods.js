/**
 * в switch каждый забирает свой кейс, чтобы не пушить пустые болванки.
 * в нем пишет те функции, которые вызываются у него на странице.
 * список кейсов:
 * case '/main': {}
 * case '/main/settings': {}
 * case '/main/word-learning': {}
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
import { launchStatisticsMethods } from '../statistics/launchStatisticsMethods';
import { handlerSettingsPage, handlerMainPage } from '../pages';
import { startMainGame } from '../mainGame/startGame';
import { renderWordsData } from '../dictionary-page/renderWordsData';
import { addEventListnersDictionary } from '../dictionary-page/addEventListnersDictionary';

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
    case '/main/word-repeat':
      startMainGame('intervals');
      break;
    case '/main': {
      handlerMainPage();
      break;
    }
    case '/main/sprint': {
      startSprintGame();
      break;
    }
    case '/statistic': {
      launchStatisticsMethods();
      break;
    }
    case '/main/settings': {
      handlerSettingsPage();
      break;
    }
    case '/vocabulary': {
      renderWordsData();
      addEventListnersDictionary();
      break;
    }
    default: {
      return 'default';
    }
  }
};
