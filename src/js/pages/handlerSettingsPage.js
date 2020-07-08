import {
  globalUser,
  actionAuth,
  loadUser,
  loadAuth,
  defaultSettings,
  setStorageFromObject,
  saveAuth,
} from '../utils';
import { goToAuthPage, getAvatar } from '../header';
import { pushUserSettings, getUserSettings } from '../api';
import {
  renderSettings,
  collectSettings,
  settingsValid,
} from '../form/settings';

export const handlerSettingsPage = async () => {
  loadAuth();
  if (!actionAuth.getAuth() || actionAuth.getAuth() === 'false') {
    goToAuthPage();
    return;
  }
  const user = loadUser();
  globalUser.set('id', user.id);
  globalUser.set('token', user.token);
  const currentSettings = await getUserSettings();
  renderSettings(currentSettings);
  const newSettings = Object.assign(defaultSettings);
  getAvatar();
  document
    .querySelector('.settings-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      collectSettings(newSettings);
      const avatarWrapper = document.querySelector('.settings-form__avatars');
      const chooseAgatar = avatarWrapper.querySelector('.active');
      if (chooseAgatar) {
        newSettings.optional.icon = new URL(chooseAgatar.src).pathname;
      }
      if (settingsValid(newSettings)) {
        pushUserSettings(newSettings).then(() => {
          setStorageFromObject(newSettings);
          alert('Настройки сохранены');
        });
      }
    });
  document.querySelector('.header__singout').addEventListener('click', () => {
    actionAuth.setAuth(false);
    saveAuth();
    goToAuthPage();
  });
  const avatarsWrapper = document.querySelector('.settings-form__avatars');
  avatarsWrapper.addEventListener('click', (event) => {
    const node = event.target;
    if (node.classList.contains('settings-form__avatar')) {
      const actives = [...avatarsWrapper.querySelectorAll('.active')];
      actives.forEach((item) => {
        item.classList.remove('active');
      });
      node.classList.add('active');
    }
  });
};