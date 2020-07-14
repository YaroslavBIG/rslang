import { savannahData } from './constants';

export const createGameOverWindow = (counter) => {
  const totalWords = savannahData.falseQuestions + Number(counter);
  return `
    <h1>Игра окончена</h1>
    <p>Всего слов: ${totalWords}</p>
    <p>Правильно: ${counter}</p>
    <p>Неправильно: ${savannahData.falseQuestions}</p>
    <button id="refresh">Повторить</button>
  `;
};
