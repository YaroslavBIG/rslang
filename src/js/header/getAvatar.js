export const getAvatar = async () => {
  const iconNumb = localStorage.getItem('icon');
  if (!!iconNumb && iconNumb !== 'none') {
    document.querySelector(
      '.header__avatar'
    ).src = `assets/img/${iconNumb}.svg`;
  }
};
