import { mainPromoPageHeader } from './mainPromoPageHeader';
import { mainPromoPageBody } from './mainPromoPageBody';
import { mainPromoPageFooter } from './mainPromoPageFooter';

export const mainPromoPage = () => `
<div id="myModal" class="modal">
<div class="modal-content">
${mainPromoPageHeader()}
${mainPromoPageBody()}
${mainPromoPageFooter()}
</div>
</div>
`;
