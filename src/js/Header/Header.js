import '../../assets/img/noavatar.png';
import '../../assets/img/settings.png';
import { Nav } from './Nav';
import { Logo } from './Logo';

const avatarPath = 'assets/img/noavatar.png';
const settingsIconPath = 'assets/img/settings.png';
export const Header = (showNav, showUser, showSettings) => {
  const singoutContent = 'Выход';
  const logo = Logo();
  const nav = showNav ? Nav() : '';
  const settingsIcon = showSettings
    ? `<img class="header__settings" src="${settingsIconPath}" alt="settings">`
    : '';
  const userAvatar = showUser
    ? `<img class="header__avatar" src="${avatarPath}" alt="avatar">
    <button class="header__singout">
    ${singoutContent}
    </button>`
    : '';
  return `<header class="header">${
    logo + nav + settingsIcon + userAvatar
  }</header>`;
};
