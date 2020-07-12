import { checkStart } from './checkStart';

export const clickRestart = () => {
  document.querySelector('#restart-speak').onclick = () => {
    document.querySelector('.hints-input').value = '';
    const text = 'Закончить говорить';
    checkStart('none', true, text);
  };
};
