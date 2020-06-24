/**
* каждый компонент возращает вашу template строку, чтобы отрисовывать страницу
* вместо __''__ вы пишите свой метод.
* если у вас мини-игра(не основная и не метод интервального повторения),
* то у вас еще отрисовывается промо
* и конструкция возврата получается return promo() + pageGame(), где
* promo() - промо-страница игры, этот метод от Константина
* pageGame() - название функции, которая отдает вашу начальную верстку для игры.
*/

import { createErrorPage, createSignInUpPage } from '../pages';

export const HomeComponent = {
  render: () => '<a href="#/auth">click</a>',
};
export const AuthComponent = {
  render: () => createSignInUpPage(),
};
export const MainComponent = {
  render: () => '',
};
export const SettingsComponent = {
  render: () => '',
};
export const LearningComponent = {
  render: () => '',
};
export const MethodIntervalComponent = {
  render: () => '',
};
export const EnglishPuzzleComponent = {
  render: () => '',
};
export const SpeakItComponent = {
  render: () => '',
};
export const ListeningComponent = {
  render: () => '',
};
export const SavannahComponent = {
  render: () => '',
};
export const ConstructorComponent = {
  render: () => '',
};
export const VocabularyComponent = {
  render: () => '',
};
export const StatisticComponent = {
  render: () => '',
};
export const AboutUsComponent = {
  render: () => '',
};
export const ErrorComponent = {
  render: () => createErrorPage(),
};
