import { userWordHandler } from './userWordHandler';

export const choiceDifficulty = () => {
  document.getElementById('choice').onclick = function choice() {
    const select = document.getElementById('select');
    const { value } = select;
    if (value !== '') {
      document.getElementsByClassName('game-block__header')[0].style.display = 'flex';
      document.getElementsByClassName('game-block__body')[0].style.display = 'flex';
      document.getElementsByClassName('game-block__footer')[0].style.display = 'block';
      document.getElementById('choice').style.display = 'none';
      document.getElementById('select').style.display = 'none';
      userWordHandler();
    } else {
      alert('Уровень не выбран!');
    }
  };
};
