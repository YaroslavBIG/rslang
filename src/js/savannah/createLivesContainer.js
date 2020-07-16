export const createLivesContainer = () => {
  const livesContainer = document.getElementById('lives');
  livesContainer.innerHTML = `
    <div class="live">
        <i class="fa fa-heart"></i>
    </div>
    <div class="live">
        <i class="fa fa-heart"></i>
    </div>
    <div class="live">
        <i class="fa fa-heart"></i>
    </div>
    <div class="live">
        <i class="fa fa-heart"></i>
    </div>
    <div class="live">
        <i class="fa fa-heart"></i>
    </div>
  `;
};
