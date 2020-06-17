import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Card from '../Card/Card';
import CardBoard from '../Card/CardBoard';
import Header from '../Header/Header';
import Container from '../Main/Container';

const mainPage = () => {
  const root = document.querySelector('#root');
  const cardWordLearning = Card('Изучение слов', 'word-learning', 'card_main');
  const cardWordRepeat = Card(
    'Интервальное повторение слов',
    'word-repeat',
    'card_main',
  );
  const cardSpeakIt = Card('SpeakIt', 'speak-it');
  const cardEngPuz = Card('English Puzzle', 'english-puzzle');
  const cardSavannah = Card('Саванна', 'savannah');
  const cardAudition = Card('Аудирование', 'audition');
  const cardSprint = Card('Спринт', 'sprint');
  const cardWordPuz = Card('Коструктор', 'word-puzzle');
  const cardBoard1 = CardBoard(cardWordLearning, cardWordRepeat);
  const cardBoard2 = CardBoard(cardSpeakIt, cardEngPuz, cardSavannah);
  const cardBoard3 = CardBoard(cardAudition, cardSprint, cardWordPuz);
  const container = Container(cardBoard1, cardBoard2, cardBoard3);
  root.innerHTML = Header(true, true, true) + Main(container) + Footer();
};
export default mainPage;
