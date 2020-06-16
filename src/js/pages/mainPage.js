import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Card from '../Card/Card';
import CardBoard from '../Card/CardBoard';
import Header from '../Header/Header';

const mainPage = () => {
  const root = document.querySelector('#root');
  const cardSpeakIt = Card('SpeakIt', 'speak-it');
  const cardEngPuz = Card('English Puzzle', 'english-puzzle');
  const cardSavannah = Card('Саванна', 'savannah');
  const cardAudition = Card('Аудирование', 'audition');
  const cardSprint = Card('Спринт', 'sprint');
  const cardWordPuz = Card('Коструктор', 'word-puzzle');
  const cardBoard1 = CardBoard(cardSpeakIt, cardEngPuz, cardSavannah);
  const cardBoard2 = CardBoard(cardAudition, cardSprint, cardWordPuz);
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('cards-wrapper');
  cardWrapper.append(cardBoard1, cardBoard2);
  root.append(Header(true, true));
  root.append(Main(cardWrapper));
  root.append(Footer());
};
export default mainPage;
