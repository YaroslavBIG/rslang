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
import { launchStatisticsMethods } from '../statistics/launchStatisticsMethods';
import { handlerSettingsPage, handlerMainPage } from '../pages';
import { startMainGame } from '../mainGame/startGame';
import { renderWordsData } from '../dictionary-page/renderWordsData';
import { addEventListnersDictionary } from '../dictionary-page/addEventListnersDictionary';
import { addSwiper } from '../swiper/swiper';
import {
  clickButtonSprintGame,
  clickButtonSpeakIt,
  clickButtonIntervalRepeatContinue,
  clickButtonSavannahGame,
} from '../promo-pages/clickButtons/clickButtons';

export const callsNecessaryMethods = (path) => {
  switch (path) {
    case '/': {
      addSwiper();
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
    case '/main/word-repeat': {
      clickButtonIntervalRepeatContinue();
      break;
    }
    case '/main': {
      handlerMainPage();
      break;
    }
    case '/main/sprint': {
      clickButtonSprintGame();
      break;
    }
    case '/statistic': {
      launchStatisticsMethods();
      break;
    }
    case '/main/savannah': {
      clickButtonSavannahGame();
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
    case '/main/speak-it': {
      clickButtonSpeakIt();
      break;
    }
    default: {
      return 'default';
    }
  }
};
