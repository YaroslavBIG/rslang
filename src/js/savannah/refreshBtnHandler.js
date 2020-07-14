import { launchSavannahMethods } from './launchSavannahMethods';
import { createSavannahPage } from '../pages';

export const refreshBtnHandler = () => {
  const refresh = document.getElementById('refresh');
  refresh.onclick = () => {
    launchSavannahMethods();
    const mainBlock = document.querySelector('.main');
    mainBlock.innerHTML = createSavannahPage();
  };
};
