import '../../assets/img/noavatar.png';
import '../../assets/img/settings.png';
import { nav, invisibleLinkToAuth, logo } from '../header';

export const header = (...children) => `<header class="header">
  ${logo()} ${nav()} ${children.join('')} ${invisibleLinkToAuth()}</header>`;
