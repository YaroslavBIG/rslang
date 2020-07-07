export const clickButtonIntervalRepeatContinue = () => {
  document
    .getElementById('modal-footer__continue')
    .addEventListener('click', () => {
      document.getElementById('myModal').style.display = 'none';
    });
};
