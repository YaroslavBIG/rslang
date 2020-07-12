import { statisticPage } from '../statistic/statisticPage';
import { getGameWords } from '../getGameWords';
import { gameContent } from '../gameContent';
import { setLocStats } from '../utils/setLocStats';

export const modalCreate = async (end) => {
  const modalBlock = document.querySelector('#modal');
  const modalWindow = document.querySelector('.game_main__modal');

  const gameEnd = `
    <h2>Ура! На сегодня все.</h2>
    <p>Есть еще новые карточки, но дневной лимит исчерпан.</p>
    <p>Вы можете увеличить лимит в настройках, но, пожалуйста,
    имейте в виду, что чем больше новых карточек вы посмотрите,
    тем больше вам надо будет повторять в ближайшее время.</p>
    `;
  const statistic = await statisticPage();

  modalWindow.style.display = 'unset';
  if (end) {
    modalBlock.innerHTML = `${gameEnd}${statistic}`;
    return;
  }

  const modalContinue = document.querySelector('#continue');
  modalContinue.addEventListener('click', async (event) => {
    event.preventDefault();
    const gameData = await getGameWords();
    sessionStorage.setItem('wordNum', 0);
    modalWindow.style.display = 'none';
    setLocStats('newWordsCount');
    gameContent(gameData);
  });

  modalBlock.innerHTML = statistic;
};
