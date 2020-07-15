import { constantsData } from './constants';

export function autoProponuciation() {
  document
    .getElementsByClassName('wrapper-block__checkbox')[0]
    .addEventListener('click', function () {
      constantsData.checked = document.getElementsByClassName(
        'wrapper-block__checkbox'
      )[0].checked;
    });
}
