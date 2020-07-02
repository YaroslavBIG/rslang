import { createSocialBlock } from './createSocialBlock';

export const createLeftCard = (avatar, git, mail, name, text) => `
        <div class="team-cards__membership-card">
            <div class="membership-card__view-block">
                <div class="view-block__avatar student avatar-${avatar}"></div>
                ${createSocialBlock(git, mail)}
            </div>
            <div class="membership-card__description-block left">
                <h2 class="description-block__name">${name}</h2>
                <p class="description-block__text">${text}</p>
            </div>
        </div>
`;
