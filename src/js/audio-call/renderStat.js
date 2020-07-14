import { DATA } from './data';
import { putGameStatistics } from '../api/statistics/putGameStatistics';

export const renderStat = () => {
  const contentContainer = document.querySelector('.audio-call-content');
  const button = document.querySelector('.audio-call-buttons__button');
  button.classList.add('again');
  button.innerHTML = 'Ещё раз';
  contentContainer.innerHTML = '';
  const container = document.createElement('div');
  container.classList.add('audio-call-stat');
  container.innerHTML = `
    <h2>Ваш результат: ${DATA.points} из 100</h2>
    <p>Процент правильных ответов: ${Math.floor((DATA.rightAnswer / (DATA.wrongAnswer + DATA.rightAnswer)) * 100)}%</p>
    <p>Правильных ответов: ${DATA.rightAnswer}</p>
    <p>Неправильных ответов: ${DATA.wrongAnswer}</p>`;
  contentContainer.append(container);
  const statObj = {
    total: DATA.points,
    right: DATA.rightAnswer,
    wrong: DATA.wrongAnswer,
  };
  putGameStatistics('audition', statObj);
};
