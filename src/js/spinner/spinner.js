export const spinner = () => {
    const spinnerOverlay = document.createElement('div');
    spinnerOverlay.classList.add('spinner-overlay');
    spinnerOverlay.innerHTML = `<div class="loader"></div>`;
    return spinnerOverlay;
};
