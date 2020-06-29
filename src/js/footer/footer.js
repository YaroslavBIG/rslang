export const footer = () => {
  const copyrightContent = '© The Rolling Scopes School';
  const aboutContent = 'Сайт создан в рамках обучающей программы RSS';
  return `<footer class="footer">
    <div class="footer__copyright">${copyrightContent}</div>
    <div class="footer__about">${aboutContent}</div>
  </footer>`;
};
