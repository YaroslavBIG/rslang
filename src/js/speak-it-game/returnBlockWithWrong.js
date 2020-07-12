export const returnBlockWithWrong = (obj) => {
  const { wrong } = obj;
  const arr = Array.prototype.slice.call(wrong);
  const resArr = arr.map((el) => el.cloneNode(true));
  const fragment = document.createDocumentFragment();

  resArr.forEach((element) => {
    element.style = `
      flex-direction: unset;
      justify-content: space-evenly;
      min-height: 0px;
      padding: 5px 10px 5px 40px;`;
    element.children[0].style = 'top: 4px';
    element.children[3].classList.remove('item-translate');
    fragment.append(element);
  });

  return fragment;
};
