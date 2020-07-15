export const buttonsChange = (hide) => {
  const controlsButton = document.querySelector('#answer');
  const wordDiffButtons = document.querySelector('#wordDiff');
  if (hide) {
    wordDiffButtons.classList.add('transform--scale');
    controlsButton.classList.add('transform--scale--hide');
  } else {
    wordDiffButtons.classList.remove('transform--scale');
    controlsButton.classList.remove('transform--scale--hide');
  }
};
