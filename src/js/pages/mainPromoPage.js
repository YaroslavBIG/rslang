import {
  mainPromoPageHeader,
  mainPromoPageBody,
  mainPromoPageFooter,
} from '../pageElements';

export const mainPromoPage = () => `
<div id="myModal" class="wrapper">
  <div class="wrapper-content">
    ${mainPromoPageHeader()}
    ${mainPromoPageBody()}
    ${mainPromoPageFooter()}
  </div>
</div>
`;
