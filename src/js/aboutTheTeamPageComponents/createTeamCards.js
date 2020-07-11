import { createLeftCard } from './createLeftCard';
import { createRightCard } from './createRightCard';
import { aboutTheTeamText } from './constants';

export const createTeamCards = () => `
    <div class="about-team__team-cards">
        ${createLeftCard(
    'Yaroslav',
    'https://github.com/YaroslavBIG',
    'yaroslavbig@ya.ru',
    'Мос Ярослав',
    aboutTheTeamText.textYaroslav,
  )}
        ${createRightCard(
    'Ясновская Карина',
    aboutTheTeamText.textRina,
    'Rina',
    'https://github.com/RinaYasnovskaya',
    'rina.yasnovskaya@gmail.com',
  )}
        ${createLeftCard(
    'Natalia',
    'https://github.com/NataliaK96',
    'ng_komarova@mail.ru',
    'Комарова Наталья',
    aboutTheTeamText.textNata,
  )}
        ${createRightCard(
    'Константин Кравцов',
    aboutTheTeamText.textDoge,
    'Doge',
    'https://github.com/Yeeeeee1',
    'Yeeeeee1@yandex.ru',
  )}
        ${createLeftCard(
    'Vadim',
    'https://github.com/VadimRomanovski',
    'mr.vromanovski@gmail.com',
    'Романовский Вадим',
    aboutTheTeamText.textVadim,
  )}
        ${createRightCard(
    'Елфимов Артем',
    aboutTheTeamText.textArtem,
    'Elfimov',
    'https://github.com/ElfimovArtem',
    'elfimov021@yandex.ru',
  )}
    </div>
`;
