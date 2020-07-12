import Swiper from '../../../node_modules/swiper/swiper-bundle';
import '../../../node_modules/swiper/swiper-bundle.css';

export function addSwiper() {
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
  return swiper;
}
