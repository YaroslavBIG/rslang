import { createMainCard } from './createMainCard';
import { renderCards } from './renderCards';
import { playAudio } from './playAudio';

export const renderData = (wordsForGame, index = 0) => {
  if (wordsForGame.length) {
    const contentContainer = document.querySelector('.audio-call-content');
    const currentWords = [];
    const indexForGame = index;
    const mainWord = wordsForGame[indexForGame];
    currentWords.push(mainWord);
    const mainCard = createMainCard(mainWord);
    contentContainer.innerHTML = '';
    contentContainer.append(mainCard);
    const randomWords = wordsForGame.slice(indexForGame + 1, indexForGame + 5);
    const allWords = currentWords.concat(randomWords);
    allWords.sort(() => Math.random() - 0.5);
    const cards = renderCards(allWords);
    contentContainer.append(cards);
    setTimeout(playAudio(mainWord.audio), 1000);
  }
};
