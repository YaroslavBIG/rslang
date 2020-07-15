export const clickReturn = () => {
  document.getElementById('return').addEventListener('click', () => {
    document.getElementById('speak-modal').style.display = 'none';
    document.getElementById('speak-items').innerHTML = '';
  });
};
