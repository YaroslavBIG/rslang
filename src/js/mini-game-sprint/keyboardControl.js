export const keyboardControl = () => {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
      console.log('wrong');
    }
    if (event.code === 'ArrowRight') {
      console.log('right');
    }
  });
};
