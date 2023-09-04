const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    effect: "fade",
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Autoplay
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});