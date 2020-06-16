const Nav = () => {
  const navLinkNames = ['Словарь', 'О команде'];
  const navNode = document.createElement('nav');
  navNode.classList.add('nav');
  const list = document.createElement('ul');
  list.classList.add('nav__list');
  const items = navLinkNames.map((item) => {
    const navItem = document.createElement('li');
    navItem.classList.add('nav__item');
    navItem.innerHTML = item;
    return navItem;
  });
  list.append(...items);
  navNode.append(list);
  return navNode;
};
export default Nav;
