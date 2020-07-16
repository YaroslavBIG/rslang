export const wordBlockData = (el, data, num) => {
  if (el) {
    el.innerHTML = data[num].word;
    el.dataset.id = data[num].id;
  }
};
