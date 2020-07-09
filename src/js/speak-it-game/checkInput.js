export const checkInput = () => {
  const input = document.querySelector('.hints-input');
  let rightCount = 0;
  const allRight = 10;

  input.addEventListener('input', () => {
    const valueInput = input.value;
    document.querySelectorAll('.item-word').forEach((elem) => {
      if (elem.textContent === valueInput) {
        elem.closest('.answers__item').classList.add('item_active');
        rightCount += 1;
        if (rightCount === allRight) {
          console.log('yep');
        }
      }
    });
  });
};
