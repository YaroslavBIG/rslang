import '../../assets/img/noavatar.png';
import '../../assets/img/settings.png';
import { nav } from './nav';
import { logo } from './logo';

export const header = (...children) => `<header class="header">
  ${logo()} ${nav()} ${children.join('')}</header>`;
