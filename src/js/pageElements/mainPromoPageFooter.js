export const mainPromoPageFooter = () => `
<div class="wrapper-footer">
  <span class="wrapper-footer__interface">Легкий в понимании интерфейс</span>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="./assets/main-game-for-swiper.png" style="width: 100%; height: 100%"></div>
      <div class="swiper-slide"><img src="./assets/main-page-for-swiper.png" style="width: 100%; height: 100%"></div>
      <div class="swiper-slide"><img src="./assets/sprint-game-for-swiper.png" style="width: 100%; height: 100%"></div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-scrollbar"></div>
  </div>
  <span class="wrapper-footer__familiarize">Краткий обзор приложения</span>
  <video class="wrapper-footer__video" src="./assets/view-of-app.mp4" controls width="100%"></video>
  <div class="wrapper-footer__go-block">
    <span class="wrapper-footer__go">Вперёд! К новым начинаниям!</span>
  </div>
  <button class="wrapper-footer__button-start">
    <a href="#/auth" class="click-enter">Вперёд!</a>
    <a href="#/main" class="click-enter-main"></a>
  </button>
</div>
`;
