export const settingsNumber = (id, text) => `<div class="settings-number-wrapper">
<label for="${id}">${text}</label>
<input class="settings-number" type="number" id="${id}" min="1" max="999">
</div>`;
