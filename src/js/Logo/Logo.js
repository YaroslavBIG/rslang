const Logo = () => {
  const logoTitle = 'RS Lang';
  const iconPath = 'logo.png';
  const logoNode = document.createElement('div');
  logoNode.classList.add('logo');
  const icon = document.createElement('img');
  icon.classList.add('logo__icon');
  icon.src = iconPath;
  const title = document.createElement('h1');
  title.classList.add('logo__name');
  title.innerHTML = logoTitle;
  logoNode.append(icon, title);
  return logoNode;
};
export default Logo;
