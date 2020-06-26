import { startSprintGame } from './launchSprintGameMethods';
import { createSprintGamePage } from '../pages/createSprintGamePage';

export const repeatButtonHandler = () => {
  const repeatBtn = document.getElementById('repeat-btn');
  repeatBtn.onclick = () => {
    const root = document.getElementById('root'); // Поставил для проверки не ругайте плиз!)))
    root.innerHTML = createSprintGamePage(); // здесь надо вставить в иннер того блока, который будет основным при отрисовке
    startSprintGame();
  }
};
