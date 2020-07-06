import { getUserSettings } from '../api';

export const getAvatar = async () => {
  const settings = await getUserSettings();
  if (!!settings.optional.icon && settings.optional.icon !== 'none') {
    document.querySelector('.header__avatar').src = settings.optional.icon;
  }
};
