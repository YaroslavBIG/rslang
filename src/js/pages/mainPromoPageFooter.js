export const mainPromoPageHeader = () => `
<div class="modal-footer">
<span class="modal-footer__interface">Легкий в понимании интерфейс</span>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  <div class="swiper-scrollbar"></div>
</div>
<span class="modal-footer__familiarize">Краткий обзор приложения</span>
<iframe src="https://www.youtube.com/embed/f4ioMGDQblI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal-footer__video"></iframe>
<div class="modal-footer__go-block">
  <span class="modal-footer__go">Вперёд! К новым начинаниям!</span>
</div>
<button class="modal-footer__button-start" ><a href="#/auth" class="modal-footer__button-name">Вперёд!</a></button>
</div>
`;
