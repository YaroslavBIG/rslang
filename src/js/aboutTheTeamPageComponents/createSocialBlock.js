export const createSocialBlock = (git, mail) => `
        <div class="view-block__social">
          <a class="social-link" href=${git}>
            <i class="fa fa-github"></i>
          </a>
          <a class="social-link" href="mailto:${mail}">
            <i class="fa fa-envelope"></i>
          </a>
        </div>
`;
