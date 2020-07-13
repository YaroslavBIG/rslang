import { createMainCard } from './createMainCard';
import { renderCards } from './renderCards';
import { playAudio } from './playAudio';

export const renderData = (wordsForGame, index = 0) => {
  const contentContainer = document.querySelector('.audio-call-content');
  contentContainer.innerHTML = '';
  const currentWords = [];
  const indexForGame = index;
  const mainWord = wordsForGame[indexForGame];
  currentWords.push(mainWord);
  const mainCard = createMainCard(mainWord);
  contentContainer.append(mainCard);
  const randomWords = wordsForGame.slice(indexForGame + 1, indexForGame + 4);
  const allWords = currentWords.concat(randomWords);
  allWords.sort(() => Math.random() - 0.5);
  const cards = renderCards(allWords);
  contentContainer.append(cards);
  setTimeout(playAudio(mainWord.audio), 1000);
};
