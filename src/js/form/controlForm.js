import controlButton from './controlButton';
import checkStateButton from './checkStateButton';

const controlForm = () => {
  checkStateButton();
  document.querySelector('.control-in').addEventListener('click', () => {
    controlButton();
  });
  document.querySelector('.control-up').addEventListener('click', () => {
    controlButton();
  });
};

export default controlForm;
