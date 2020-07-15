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
} from '../pages';

export const HomeComponent = {
  render: () => '<a href="#/auth">click</a><a href="#/main" class="click-enter"></a>',
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
  render: () => intervalGameRender(),
};
export const EnglishPuzzleComponent = {
  render: () => '',
};
export const SpeakItComponent = {
  render: () => createSpeakItPage(),
};
export const AuditionComponent = {
  render: () => '',
};
export const SavannahComponent = {
  render: () => '',
};
export const SprintComponent = {
  render: () => createSprintGamePage(),
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
