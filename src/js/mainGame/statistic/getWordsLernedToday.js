import { getAllUserWords } from '../../api';
import { getDayOfYear } from '../../utils';

export const getWordsLernedToday = async () => {
  const allUserWords = await getAllUserWords();
  const today = (allUserWords.filter((el) => el.optional.day === getDayOfYear()))
    .length || 0;
  localStorage.setItem('wordsLearnToday', today);
  return today;
};
