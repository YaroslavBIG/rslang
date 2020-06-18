import signIn from './signIn/signIn';
import signUp from './signUp/signUp';

const submitForm = () => {
  document.querySelector('[data-up]').addEventListener('submit', (event) => {
    event.preventDefault();
    signUp();
  });
  document.querySelector('[data-in]').addEventListener('submit', async (event) => {
    event.preventDefault();
    signIn();
  });
};

export default submitForm;
