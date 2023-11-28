 // header

import throttle from "https://cdn.skypack.dev/lodash@4/throttle";

function onScroll() {
  if (window.pageYOffset) {
    $$header.classList.add("is-active");
  } else {
    $$header.classList.remove("is-active");
  }
}

const $$header = document.querySelector(".js-header");

window.addEventListener("scroll", throttle(onScroll, 300));


 // swiper

  var swiper = new Swiper('.swiper-container', {
   
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


 // carrusel de productos


    // Configuración del carrusel
    $(document).ready(function(){
        $('.carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    });
