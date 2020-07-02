import Swiper from 'swiper';
export function addSwiper() {
  const head = document.getElementsByTagName('head')[0];
  head.innerHTML += `
    <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css" />
    <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />

    <script src="https://unpkg.com/swiper/js/swiper.js"></script>
    <script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
  `;
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
