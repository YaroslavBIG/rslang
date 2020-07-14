import { spinner } from '../../spinner/spinner';

export const spinnerControl = (sw) => {
  const root = document.querySelector('#root');
  const spinnerBlock = document.querySelector('.spinner-overlay');

  sw === 'on' ? root.prepend(spinner()) : spinnerBlock.style.display = 'none';
};
