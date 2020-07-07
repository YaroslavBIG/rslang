import { checkInput } from './checkInput';

export const clickStart = async () => {
  document.querySelector('#start-speak').addEventListener('click', () => {
    document.querySelectorAll('.answers__item').forEach((el) => {
      el.style = 'pointer-events: none';
      el.classList.remove('item_active');
    });
    document.querySelector('.hints-translation').classList.add('hidden');
    document.querySelector('.hints-input').classList.remove('hidden');
    checkInput();
  });
};
