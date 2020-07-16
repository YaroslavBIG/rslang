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
import { handlerSettingsPage, handlerMainPage } from '../pages';
import {
  clickButtonConstructorGame,
  clickButtonSprintGame,
  clickButtonSpeakIt,
  clickButtonIntervalRepeatContinue,
  clickButtonListeningGame,
} from '../promo-pages/clickButtons/clickButtons';
import { launchStatisticsMethods } from '../statistics/launchStatisticsMethods';
import { startMainGame } from '../mainGame/startGame';
import { renderWordsData } from '../dictionary-page/renderWordsData';
import { addEventListnersDictionary } from '../dictionary-page/addEventListnersDictionary';
import { addSwiper } from '../swiper/swiper';
import { addEventListnerAudioGame } from '../audio-call/addEventListnerAudioGame';

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
    case '/main/settings': {
      handlerSettingsPage();
      break;
    }
    case '/main/word-puzzle': {
      clickButtonConstructorGame();
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
    case '/main/audition': {
      clickButtonListeningGame();
      addEventListnerAudioGame();
      break;
    }
    default: {
      return 'default';
    }
  }
};
