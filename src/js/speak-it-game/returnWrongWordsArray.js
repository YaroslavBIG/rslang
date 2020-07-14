export const returnWrongWordsArray = () => {
  const items = document.querySelectorAll('.answers__item');
  const wrongArr = [];
  items.forEach((item) => {
    if (!item.classList.contains('item_active')) {
      wrongArr.push(item);
    }
  });
  return wrongArr;
};
