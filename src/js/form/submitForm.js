import { signIn } from './signIn/signIn';
import { signUp } from './signUp/signUp';

export const submitForm = () => {
  document.querySelector('[data-up]').addEventListener('submit', (event) => {
    event.preventDefault();
    signUp();
  });
  document.querySelector('[data-in]').addEventListener('submit', (event) => {
    event.preventDefault();
    signIn();
  });
};
