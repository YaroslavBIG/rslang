import { footer } from '../footer/footer';
import { main } from '../main/main';
import { card } from '../main/card/card';
import { cardBoard } from '../main/card/cardBoard';
import { header } from '../header/header';
import { container } from '../main/container';

export const mainPage = () => {
  const cardWordLearning = card('Изучение слов', 'word-learning', 'card_main');
  const cardWordRepeat = card(
    'Интервальное повторение слов',
    'word-repeat',
    'card_main'
  );
  const cardSpeakIt = card('SpeakIt', 'speak-it');
  const cardEngPuz = card('English Puzzle', 'english-puzzle');
  const cardSavannah = card('Саванна', 'savannah');
  const cardAudition = card('Аудирование', 'audition');
  const cardSprint = card('Спринт', 'sprint');
  const cardWordPuz = card('Коструктор', 'word-puzzle');
  const cardBoard1 = cardBoard(cardWordLearning, cardWordRepeat);
  const cardBoard2 = cardBoard(cardSpeakIt, cardEngPuz, cardSavannah);
  const cardBoard3 = cardBoard(cardAudition, cardSprint, cardWordPuz);
  const mainContainer = container(cardBoard1, cardBoard2, cardBoard3);
  const pageComponents =
    header(true, true, true) + main(mainContainer) + footer();
  return `<section class="main-page">${pageComponents}</section>`;
};
