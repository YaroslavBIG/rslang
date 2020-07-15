export const detailsWindowCloseBtnHandler = () => {
  const closeBtn = document.getElementById('details-close-btn');
  closeBtn.onclick = () => {
    const detailsWrapper = document.getElementById('details-wrapper');
    detailsWrapper.remove();
  };
};
