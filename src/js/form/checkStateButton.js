export const checkStateButton = (button) => {
  if (button.classList.contains('inactive')) {
    button.classList.remove('inactive');
    button.classList.add('active');
  } else {
    button.classList.remove('active');
    button.classList.add('inactive');
  }
};
