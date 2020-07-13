import { DATA } from './data';

export const renderStat = () => {
  const contentContainer = document.querySelector('.audio-call-content');
  const button = document.querySelector('.audio-call-buttons__button');
  button.classList.add('again');
  button.innerHTML = 'Ещё раз';
  contentContainer.innerHTML = '';
  const container = document.createElement('div');
  container.innerHTML = `
    <h2>Ваш результат: ${DATA.points}</h2>
    <p>Процент правильных ответов: ${Math.floor((DATA.rightAnswer / DATA.wrongAnswer) * 100)}%</p>
    <p>Правильных ответов: ${DATA.rightAnswer}</p>
    <p>Неправильных ответов: ${DATA.wrongAnswer}</p>`;
  contentContainer.append(container);
};
