import { footer } from '../footer';
import {
  main, card, cardBoard, container,
} from '../main';
import { header, settings, user } from '../header';

export const createMainPage = () => {
  const cardWordLearning = card(
    'Изучение слов',
    '#/main/word-learning',
    'word-learning',
    'card_main',
  );
  const cardWordRepeat = card(
    'Интервальное повторение слов',
    '#/main/word-repeat',
    'word-repeat',
    'card_main',
  );
  const cardSpeakIt = card('SpeakIt', '#/main/speak-it', 'speak-it');
  const cardEngPuz = card(
    'English Puzzle',
    '#/main/english-puzzle',
    'english-puzzle',
  );
  const cardSavannah = card('Саванна', '#/main/savannah', 'savannah');
  const cardAudition = card('Аудирование', '#/main/audition', 'audition');
  const cardSprint = card('Спринт', '#/main/sprint', 'sprint');
  const cardWordPuz = card('Коструктор', '#/main/word-puzzle', 'word-puzzle');
  const cardBoard1 = cardBoard(cardWordLearning, cardWordRepeat);
  const cardBoard2 = cardBoard(cardSpeakIt, cardEngPuz, cardSavannah);
  const cardBoard3 = cardBoard(cardAudition, cardSprint, cardWordPuz);
  const mainContainer = container(cardBoard1, cardBoard2, cardBoard3);
  const pageComponents = header(settings(), user()) + main(mainContainer) + footer();
  return `<section class="main-page">${pageComponents}</section>`;
};
