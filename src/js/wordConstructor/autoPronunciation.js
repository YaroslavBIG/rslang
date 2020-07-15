import { constantsData } from './constants';

export function autoProponuciation() {
  document
    .getElementsByClassName('wrapper-block__checkbox')[0]
    .addEventListener('click', () => {
      constantsData.checked = document.getElementsByClassName(
        'wrapper-block__checkbox',
      )[0].checked;
    });
}
