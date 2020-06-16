import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';

const avatarPath = 'noavatar.png';
const Header = (showNav, showUser) => {
  const headerNode = document.createElement('header');
  headerNode.classList.add('header');
  const logo = Logo();
  logo.classList.add('header__logo');
  headerNode.append(logo);
  if (showNav) {
    const nav = Nav();
    nav.classList.add('header__nav');
    headerNode.append(nav);
  }
  if (showUser) {
    const userAvatar = document.createElement('img');
    userAvatar.classList.add('header__avatar');
    userAvatar.src = avatarPath;
    const singOut = document.createElement('button');
    singOut.innerHTML = 'Выход';
    singOut.classList.add('header__singout');
    headerNode.append(userAvatar, singOut);
  }
  return headerNode;
};
export default Header;
