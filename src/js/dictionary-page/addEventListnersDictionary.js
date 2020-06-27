import { handelDictionaryNav } from './handelDictioaryNav';
import { handelDictioaryCard } from './handelDictionaryCard';

export const addEventListnersDictionary = () => {
  const navBlock = document.querySelector('.nav-dictionary');
  navBlock.addEventListener('click', (e) => { handelDictionaryNav(e); });

  const wordsWrapper = document.querySelector('.words-wrapper');
  wordsWrapper.addEventListener('click', (e) => { handelDictioaryCard(e); });
};
