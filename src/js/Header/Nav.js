const Nav = () => {
  const navLinkNames = ['Словарь', 'О команде'];
  const items = navLinkNames.reduce(
    (acc, el) => `${acc}<li class="nav__item">${el}</li>`,
    '',
  );
  const list = `<ul class="nav__list">${items}</ul>`;
  return `<nav class="nav header__nav">${list}</nav>`;
};
export default Nav;
