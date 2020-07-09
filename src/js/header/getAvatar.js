import { getUserSettings } from '../api';

export const getAvatar = async () => {
  const settings = await getUserSettings();
  const iconNumb = settings.optional ? settings.optional.icon : undefined;
  if (!!iconNumb && iconNumb !== 'none') {
    document.querySelector('.header__avatar').src = `assets/img/${iconNumb}.svg`;
  }
};
