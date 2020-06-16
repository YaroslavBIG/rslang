const Footer = () => {
  const copyrightContent = '© The Rolling Scopes School';
  const aboutContent = 'Сайт создан в рамках обучающей программы RSS';
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const copyright = document.createElement('div');
  copyright.classList.add('footer__copyright');
  copyright.textContent = copyrightContent;
  const about = document.createElement('div');
  about.classList.add('footer__about');
  about.textContent = aboutContent;
  footer.append(copyright, about);
  return footer;
};
export default Footer;
