const Card = (title, ...classes) => {
  const titleNode = `<h4 class="card__title">${title}</h4>`;
  return `<div class="${['card', ...classes].join(' ')}">${titleNode}</div>`;
};
export default Card;
