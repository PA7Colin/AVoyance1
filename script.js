const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,   
      modifier: 1,
      slideShadows: false,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
    },
  });
const swiper1 = new Swiper('.swiper1', {
  effect: 'cards',
  perSlideOffset: 8,
  perSlideRotate: 2,
  rotate: true,
  slideShadows: true,
  grabCursor: true,
});
