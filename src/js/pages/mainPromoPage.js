import { mainPromoPageHeader } from '../pageElements/mainPromoPageHeader';
import { mainPromoPageBody } from '../pageElements/mainPromoPageBody';
import { mainPromoPageFooter } from '../pageElements/mainPromoPageFooter';

export const mainPromoPage = () => `
<div id="myModal" class="modal">
<div class="modal-content">
${mainPromoPageHeader()}
${mainPromoPageBody()}
${mainPromoPageFooter()}
</div>
</div>
`;
