export const correctionBlock = (userAnswer, word) => {
  const userAnswerArr = userAnswer.split('');
  const wordArr = word.split('');
  const result = [];
  wordArr.forEach((symb, idx) => {
    const char = symb === userAnswerArr[idx] ? symb : `<span class="anwser">${symb}</span>`;
    result.push(char);
  });
  return result.join('');
};
