{
  const swiper1 = new Swiper(".swiper-1", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 32,
    slidesPerView: "auto",
    freeMode: {
      enabled: true,
      momentumBounce: false,
    },
    autoplay: {
      delay: 1,
    },
    speed: 5000,
    grabCursor: true,
    observer: true,
    observeParents: true,
  });

  const swiper2 = new Swiper(".swiper-2", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 32,
    slidesPerView: "auto",
    freeMode: {
      enabled: true,
      momentumBounce: false,
    },
    autoplay: {
      delay: 1,
      reverseDirection: true,
    },
    speed: 5000,
    grabCursor: true,
    observer: true,
    observeParents: true,
  });

  const carousel = new Swiper(".carousel", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    observer: true,
    observeParents: true,
  });

  swiper1.on("observerUpdate", () => {
    swiper1.autoplay.start();
  });
  swiper2.on("observerUpdate", () => {
    swiper2.autoplay.start();
  });
  carousel.on("observerUpdate", () => {
    carousel.autoplay.start();
  });
}
