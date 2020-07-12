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
import { handlerSettingsPage, handlerMainPage } from '../pages';
import { launchWordConstructorGame } from '../wordConstructor/launchWordConstructorGame';
import {
  clickButtonConstructorGame,
  clickButtonSprintGame,
  clickButtonSpeakIt,
  clickButtonIntervalRepeatContinue,
} from '../promo-pages/clickButtons/clickButtons';
import { addSwiper } from '../swiper/swiper';

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
    case '/main': {
      handlerMainPage();
      break;
    }
    case '/main/sprint': {
      clickButtonSprintGame();
      startSprintGame();
      break;
    }
    case '/main/settings': {
      handlerSettingsPage();
      break;
    }
    case '/main/word-puzzle': {
      clickButtonConstructorGame();
      launchWordConstructorGame();
      break;
    }
    case '/main/speak-it': {
      clickButtonSpeakIt();
    }
    case '/main/word-repeat': {
      clickButtonIntervalRepeatContinue();
    }
    default: {
      return 'default';
    }
  }
};
