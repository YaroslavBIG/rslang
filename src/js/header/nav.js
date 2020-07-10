import { dropdown } from './dropdown';

export const nav = () => {
  const navLinkNames = [
    { name: 'Словарь', link: '#/vocabulary' },
    { name: 'О команде', link: '#/about-us' },
  ];
  const input = '<input id="nav__toggle" class="nav__toggle" type="checkbox">';
  const label = '<label class="nav__btn" for="nav__toggle"><span></span></label>';
  const items = navLinkNames.reduce(
    (acc, el) => `${acc}<li class="nav__item"><a href="${el.link}">${el.name}</a></li>`,
    '',
  );
  const dropDownLinks = `
  <a href="#/main/word-learning">Изучение слов</a>
  <a href="#/main/word-repeat">Интервальное повторение слов</a>
  <a href="#/main/speak-it">SpeakIt</a>
  <a href="#/main/english-puzzle">English Puzzle</a>
  <a href="#/main/savannah">Саванна</a>
  <a href="#/main/audition">Аудирование</a>
  <a href="#/main/sprint">Спринт</a>
  <a href="#/main/word-puzzle">Конструктор</a>
  `;
  const list = `<ul class="nav__list">${items} ${dropdown(
    'Игры',
    dropDownLinks,
  )}</ul>`;
  return `<nav class="nav header__nav">${input} ${label} ${list}</nav>`;
};
