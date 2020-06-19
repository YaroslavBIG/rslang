import '../../assets/img/noavatar.png';
import '../../assets/img/settings.png';
import { nav } from './nav';
import { logo } from './logo';

const avatarPath = 'assets/img/noavatar.png';
const settingsIconPath = 'assets/img/settings.png';
export const header = (showNav, showUser, showSettings) => {
  const singoutContent = 'Выход';
  const headerLogo = logo();
  const headerNav = showNav ? nav() : '';
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
    headerLogo + headerNav + settingsIcon + userAvatar
  }</header>`;
};
