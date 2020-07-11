import { checkStateButton } from './checkStateButton';

export const controlButton = () => {
  const signUp = document.querySelector('.sign__up');
  const signIn = document.querySelector('.sign__in');

  document.querySelector('.form__sign-in').classList.toggle('sign-in_left');
  document.querySelector('.form__sign-up').classList.toggle('sign-up_left');

  checkStateButton(signUp);
  checkStateButton(signIn);
};
