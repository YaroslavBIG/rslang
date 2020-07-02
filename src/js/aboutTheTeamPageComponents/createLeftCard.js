export const createLeftCard = (avatar, git, mail, name, text) => `
        <div class="team-cards__membership-card">
            <div class="membership-card__view-block">
                <div class="view-block__avatar student avatar-${avatar}"></div>
                <div class="view-block__social">
                  <a class="social-link" href=${git}>
                    <i class="fa fa-github"></i>
                  </a>
                  <a class="social-link" href="mailto:${mail}">
                    <i class="fa fa-envelope"></i>
                  </a>
                </div>
            </div>
            <div class="membership-card__description-block left">
                <h2 class="description-block__name">${name}</h2>
                <p class="description-block__text">${text}</p>
            </div>
        </div>
`;
