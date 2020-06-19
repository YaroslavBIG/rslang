export const Nav = () => {
  const navLinkNames = [
    { name: 'Словарь', link: '#wordbook' },
    { name: 'О команде', link: '#about-us' },
  ];
  const input = '<input id="nav__toggle" class="nav__toggle" type="checkbox">';
  const label = '<label class="nav__btn" for="nav__toggle"><span></span></label>';
  const items = navLinkNames.reduce(
    (acc, el) => `${acc}<li class="nav__item"><a href="${el.link}">${el.name}</a></li>`,
    '',
  );
  const list = `<ul class="nav__list">${items}</ul>`;
  return `<nav class="nav header__nav">${input + label + list}</nav>`;
};
