import { fetchUserWords } from './fetchUserWords';
import { constantsData } from './constants';

export const dictionaryCheck = async () => {
  const userWords = await fetchUserWords();
  sessionStorage.setItem('userWords', JSON.stringify(userWords));
  const userWordsLength = userWords.length;
  constantsData.dictionaryCheck = true;
  (userWordsLength > constantsData.enoughWords)
    ? constantsData.enough = true
    : constantsData.enough = false;
};
