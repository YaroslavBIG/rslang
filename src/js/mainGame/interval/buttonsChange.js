export const buttonsChange = (hide) => {
  const controlsButton = document.querySelector('.controls__button');
  const wordDiffButtons = document.querySelector('#wordDiff');
  if (hide) {
    wordDiffButtons.classList.add('transform--scale');
    controlsButton.classList.add('transform--scale--hide');
  }
};
