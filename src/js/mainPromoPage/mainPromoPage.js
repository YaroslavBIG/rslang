export const mainPromoPage = () => `
<div id="myModal" class="modal">
<div class="modal-content">
  <div class="modal-header">
    <span class="modal-header__greet">Добро пожаловать на RSlang сайт по изучению английского языка</span>
    <p class="modal-header__appeal">Дорогой пользователей, этот сервис предоставляет полный курс для изучения английского языка.</p>
  </div>
  <div class="modal-body">
    <span class="modal-body__mini-games">Увлекательнейшее разнообразие мини-игр</span>
    <div class="modal-body__first-gifs">
    <img src="./assets/site-functional.gif">
    <img src="./assets/site-functional1.gif">
    <img src="./assets/site-functional2.gif">
    </div>
    <div class="modal-body__second-gifs">
    <img src="./assets/site-functional3.gif">
    <img src="./assets/site-functional4.gif">
    <img src="./assets/site-functional5.gif">
    </div>
  </div>
  <div class="modal-footer">
  <span class="modal-footer__interface">Легкий в понимании интерфейс</span>
  <!-- Slider main container -->
  <div class="swiper-container">
	  <!-- Additional required wrapper -->
	  <div class="swiper-wrapper">
		  <!-- Slides -->
		  <div class="swiper-slide">Slide 1</div>
		  <div class="swiper-slide">Slide 2</div>
		  <div class="swiper-slide">Slide 3</div>
		  ...
	  </div>
	  <!-- If we need pagination -->
	  <div class="swiper-pagination"></div>
  
	  <!-- If we need navigation buttons -->
	  <div class="swiper-button-prev"></div>
	  <div class="swiper-button-next"></div>
  
	  <!-- If we need scrollbar -->
	  <div class="swiper-scrollbar"></div>
  </div>
  <span class="modal-footer__familiarize">Ознакомительное видео</span>
  <iframe src="https://www.youtube.com/embed/f4ioMGDQblI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal-footer__video"></iframe>
  <span class="modal-footer__go">Вперёд! К новым начинаниям!</span>
  <button class="modal-footer__button-start" ><a href="#/auth" class="modal-footer__button-name">Вперёд!</a></button>
  </div>
</div>
</div>
`;
