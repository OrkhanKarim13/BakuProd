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
  effect: "drag",
  grabCursor: false,
  centeredSlides: false,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
  },
});

  // home video

  document.addEventListener("DOMContentLoaded", function() {
 
    var video = document.getElementById("video-bg");
    

    video.play();
  });






  // categories


  document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.querySelector(".menu-toggle");
    var menuContent = document.querySelector(".menu-content");
  
    toggleButton.addEventListener("click", function() {
      menuContent.classList.toggle("active");
    });

    document.addEventListener("click", function(event) {
      if (!menuContent.contains(event.target) && event.target !== toggleButton) {
        menuContent.classList.remove("active");
      }
    });
    document.addEventListener("click", function(event) {
      var closeButton = document.querySelector(".closeButton");

      if (   event.target === closeButton ) {
        menuContent.classList.remove("active");
      }
    });


    document.addEventListener("click", function(event) {
      var closeSpan = document.querySelector(".closespan");
      if (   event.target === closeSpan ) {
        menuContent.classList.remove("active");
      }
    });
  });
  

  // document.addEventListener("click", function(event) {
  //   var closeButton = document.querySelector(".closeButton");
  
  //   if (event.target === closeButton ) {
  //     menuContent.classList.remove("active");
  //   }
  // });