export const addError = () => {
  document.querySelector('.error-block-up').innerHTML = 'Возможно, такой пользователь уже существует';
  document.querySelector('.error-block-up').style = 'font-size: 13px';
  document.querySelector('.start-enter__inner').style = 'height: 520px';
};
