import {
  globalUser,
  actionAuth,
  loadUser,
  loadAuth,
  defaultSettings,
  setStorageFromObject,
  saveAuth,
} from '../utils';
import { pushUserSettings, getUserSettings } from '../api';

const renderSettings = (object) => {
  Object.entries(object).map((arr) => {
    if (typeof arr[1] !== 'object') {
      const el = document.getElementById(arr[0]);
      if (el) {
        if (el.type === 'checkbox') {
          [, el.checked] = arr;
        }
        if (el.type === 'number') {
          [, el.value] = arr;
        }
      }
      return;
    }
    return renderSettings(arr[1]);
  });
};
const settingsValid = (settings) => {
  const { cardInfo } = settings.optional;
  const checked = cardInfo.translation || cardInfo.meaning || cardInfo.example;
  if (!checked) {
    alert(`Доллжен быть выбран хотя бы один пунк:
  - перевод слова
  - предложение с объяснением значения слова
  - предложение с примером использования изучаемого слова
  `);
  }
  const { wordsPerDay } = settings;
  if (!wordsPerDay > 0) {
    alert('Количество слов в день должно быть больше нуля');
  }
  return checked && wordsPerDay > 0;
};
const collectSettings = (object) => {
  Object.entries(object).map((arr) => {
    if (typeof arr[1] !== 'object') {
      const el = document.getElementById(arr[0]);
      if (el) {
        if (el.type === 'checkbox') {
          object[el.id] = el.checked;
        }
        if (el.type === 'number') {
          object[el.id] = el.value;
        }
      }
      return;
    }
    return collectSettings(arr[1]);
  });
};
const goToAuthPage = () => {
  document.querySelector('.link-to-auth').click();
};
export const handlerSettingsPage = async () => {
  loadAuth();
  if (!actionAuth.getAuth() || actionAuth.getAuth() === 'false') {
    goToAuthPage();
  }
  const user = loadUser();
  globalUser.set('id', user.id);
  globalUser.set('token', user.token);
  const currentSettings = await getUserSettings();
  renderSettings(currentSettings);
  const newSettings = Object.assign(defaultSettings);
  document
    .querySelector('.settings-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      collectSettings(newSettings);
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
};
