let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});



// header scrool

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    header.style.backgroundColor = "black";
  } else {
    header.style.backgroundColor = "";
  }
});

//  slider

var swiper = new Swiper(".mySwiper", {
  effect: "slide",
  grabCursor: false,
  centeredSlides: false,
  slidesPerView: "auto",
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

  // home video

  document.addEventListener("DOMContentLoaded", function() {
 
    var video = document.getElementById("video-bg");
    

    video.play();
  });