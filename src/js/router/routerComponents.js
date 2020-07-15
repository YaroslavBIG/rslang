/**
 * каждый компонент возращает вашу template строку, чтобы отрисовывать страницу
 * вместо __''__ вы пишите свой метод.
 * если у вас мини-игра(не основная и не метод интервального повторения),
 * то у вас еще отрисовывается промо
 * и конструкция возврата получается return promo() + pageGame(), где
 * promo() - промо-страница игры, этот метод от Константина
 * pageGame() - название функции, которая отдает вашу начальную верстку для игры.
 */

import {
  createErrorPage,
  createSignInUpPage,
  createMainPage,
  createSprintGamePage,
  createAboutTheTeamPage,
  mainGameRender,
  intervalGameRender,
  createStatisticsPage,
  createSettingsPage,
  createVocabularyPage,
  createSpeakItPage,
  mainPromoPage,
  createAuditionPage,
} from '../pages';
import {
  intervalRepeatPromoPage,
  englishPuzzleGame,
  listeningGame,
  savannahGame,
  speakitGame,
  sprintGame,
} from '../promo-pages';

export const HomeComponent = {
  render: () => mainPromoPage(),
};
export const AuthComponent = {
  render: () => createSignInUpPage(),
};
export const MainComponent = {
  render: () => createMainPage(),
};
export const SettingsComponent = {
  render: () => createSettingsPage(),
};
export const WordLearningComponent = {
  render: () => mainGameRender(),
};
export const WordRepeatComponent = {
  render: () => intervalRepeatPromoPage() + intervalGameRender(),
};
export const EnglishPuzzleComponent = {
  render: () => englishPuzzleGame(),
};
export const SpeakItComponent = {
  render: () => speakitGame() + createSpeakItPage(),
};
export const AuditionComponent = {
  render: () => listeningGame() + createAuditionPage(),
};
export const SavannahComponent = {
  render: () => savannahGame(),
};
export const SprintComponent = {
  render: () => sprintGame() + createSprintGamePage(),
};
export const WordPuzzleComponent = {
  render: () => '',
};
export const VocabularyComponent = {
  render: () => createVocabularyPage(),
};
export const StatisticComponent = {
  render: () => createStatisticsPage(),
};
export const AboutUsComponent = {
  render: () => createAboutTheTeamPage(),
};
export const ErrorComponent = {
  render: () => createErrorPage(),
};
