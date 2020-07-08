export const checkInput = () => {
  const input = document.querySelector('.hints-input');

  input.addEventListener('input', () => {
    const valueInput = input.value;
    document.querySelectorAll('.item-word').forEach((elem) => {
      if (elem.textContent === valueInput) {
        elem.closest('.answers__item').classList.add('item_active');
      }
    });
  });
};
