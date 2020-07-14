export const wordBlockData = (el, data, num) => {
  el.innerHTML = data[num].word;
  el.dataset.id = data[num].id;
};
