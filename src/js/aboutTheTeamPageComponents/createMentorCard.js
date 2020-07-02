import { aboutTheTeamText } from './constants';
import { createSocialBlock } from './createSocialBlock';

export const createMentorCard = () => `
<div class="about-team__mentor-card">
    <div class="mentor-card__view-block">
        <div class="view-block__avatar mentor avatar-Ivan"></div>
        ${createSocialBlock(
    'https://github.com/ikisialiou',
    'ivan_kiselev1990@mail.ru',
  )}
    </div>
    <div class="mentor-card__description-block center">
        <h2 class="description-block__name">Киселев Иван</h2>
        <p class="description-block__role">Ментор / Наставник</p>
        <p class="description-block__text mentor-text">
          ${aboutTheTeamText.textIvan}
        </p>
    </div>
</div>
`;
