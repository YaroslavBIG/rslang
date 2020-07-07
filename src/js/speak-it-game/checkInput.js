export const checkInput = () => {
  document.querySelector('.hints-input').addEventListener('input', () => {
    const valueInput = document.querySelector('.hints-input').value;
    document.querySelectorAll('.item-word').forEach((elem) => {
      if (elem.textContent === valueInput) {
        elem.classList.add('item_active');
      }
    });
  });
};
