import '../../assets/img/logo.png';

export const logo = () => {
  const logoTitle = 'RS Lang';
  const iconPath = 'assets/img/logo.png';
  const icon = `<img class="logo__icon" src="${iconPath}" alt="logo">`;
  const title = `<a href="#/main"><h1 class="logo__name">${logoTitle}</h1></a>`;
  return `<div class="logo header__logo">${icon + title}</div>`;
};
