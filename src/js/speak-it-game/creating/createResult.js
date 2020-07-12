export const createResult = () => {
  const rightRes = document.querySelectorAll('.item_active').length;
  const items = document.querySelectorAll('.answers__item');
  const wrongArr = [];
  items.forEach((item) => {
    if (!item.classList.contains('item_active')) {
      wrongArr.push(item);
    }
  });

  return { right: rightRes, wrong: wrongArr };
};
