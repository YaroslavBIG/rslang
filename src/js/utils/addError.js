export const addError = (text) => {
  document.querySelector('.error-block-up').innerHTML = text;
  document.querySelector('.error-block-up').style = 'font-size: 13px';
  document.querySelector('.start-enter__inner').style = 'height: 520px';
  document.getElementsByTagName('form')[1].reset();
  setTimeout(() => {
    document.querySelector('.error-block-up').innerHTML = '';
    document.querySelector('.start-enter__inner').style = 'height: 500px';
  }, 2000);
};
