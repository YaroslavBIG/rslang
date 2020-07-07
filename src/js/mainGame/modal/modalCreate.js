import { statisticPage } from '../statistic/statisticPage';

export const modalCreate = (end) => {
  const modalBlock = document.querySelector('#modal');
  const modalWindow = document.querySelector('.game_main__modal');

  const gameEnd = `
<h2>Ура! На сегодня все.</h2>
<p>Есть еще новые карточки, но дневной лимит исчерпан.</p>
<p>Вы можете увеличить лимит в настройках, но, пожалуйста,
имейте в виду, что чем больше новых карточек вы посмотрите, тем больше вам надо будет повторять в ближайшее время.</p>
`;
  const statistic = statisticPage();

  modalWindow.style.display = 'unset';
  if (end) {
    modalBlock.innerHTML = `${gameEnd}${statistic}`;
    return;
  }

  modalBlock.innerHTML = statistic;
};