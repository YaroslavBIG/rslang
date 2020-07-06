import { controlButton } from './controlButton';

export const controlForm = () => {
  document.querySelector('.control-in').addEventListener('click', () => {
    controlButton();
  });
  document.querySelector('.control-up').addEventListener('click', () => {
    controlButton();
  });
};
