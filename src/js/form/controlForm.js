import controlButton from './controlButton';

const controlForm = () => {
  document.querySelector('.control-in').addEventListener('click', () => {
    controlButton();
  });
  document.querySelector('.control-up').addEventListener('click', () => {
    controlButton();
  });
};

export default controlForm;
