import { createSocialBlock } from './createSocialBlock';

export const createRightCard = (name, text, avatar, git, mail) => `
        <div class="team-cards__membership-card right-card">
            <div class="membership-card__description-block right">
                <h2 class="description-block__name">${name}</h2>
                <p class="description-block__text">${text}</p>
            </div>
            <div class="membership-card__view-block">
                <div class="view-block__avatar student avatar-${avatar}"></div>
                ${createSocialBlock(git, mail)}
            </div>
        </div>
`;
