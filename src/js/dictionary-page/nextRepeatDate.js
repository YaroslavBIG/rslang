export const nextRepeatDate = (word) => {
  const fullDay = 1000 * 60 * 60 * 24;
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const date = new Date(word.userWord.optional.day * fullDay + start.getTime());
  const options = { month: '2-digit', day: '2-digit' };
  const getTime = new Date(date).getTime();
  if (word.userWord.difficulty === 'again') {
    const nextRepeat = new Date(getTime + fullDay).toLocaleDateString('ru', options);
    return `до ${nextRepeat}`;
  } if (word.userWord.difficulty === 'hard') {
    const nextRepeat = new Date(getTime + 2 * fullDay).toLocaleDateString('ru', options);
    return `до ${nextRepeat}`;
  } if (word.userWord.difficulty === 'good') {
    const nextRepeat = new Date(getTime + 4 * fullDay).toLocaleDateString('ru', options);
    return `до ${nextRepeat}`;
  } if (word.userWord.difficulty === 'weak') {
    const nextRepeat = new Date(getTime + 4 * fullDay).toLocaleDateString('ru', options);
    return `до ${nextRepeat}`;
  }
};
