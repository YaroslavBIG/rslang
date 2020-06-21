export const correctionBlock = (userAnswer, word) => {
  const userAnswerArr = userAnswer.split('');
  const wordArr = word.split('');
  const result = [];
  wordArr.forEach((symb, idx) => {
    const char = symb === userAnswerArr[idx] ? `<span class="anwser--wright">${symb}</span>` : `<span class="anwser">${symb}</span>`;
    result.push(char);
  });
  return result.join('');
};
