import '../../assets/img/logo.png';

const Logo = () => {
  const logoTitle = 'RS Lang';
  const iconPath = 'assets/img/logo.png';
  const icon = `<img class="logo__icon" src="${iconPath}" alt="logo">`;
  const title = `<h1 class="logo__name">${logoTitle}</h1>`;
  return `<div class="logo header__logo">${icon + title}</div>`;
};
export default Logo;