export const card = (title, href, ...classes) => {
  const titleNode = `<h4 class="card__title">${title}</h4>`;
  return `<a href="${href}" class="${['card', ...classes].join(
    ' ',
  )}">${titleNode}</a href={}>`;
};
