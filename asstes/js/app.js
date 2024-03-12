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

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("video-bg");

  video.play();
});

// categories

document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.querySelector(".menu-toggle");
  var menuContent = document.querySelector(".menu-content");

  toggleButton.addEventListener("click", function () {
    menuContent.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!menuContent.contains(event.target) && event.target !== toggleButton) {
      menuContent.classList.remove("active");
    }
  });
  document.addEventListener("click", function (event) {
    var closeButton = document.querySelector(".closeButton");

    if (event.target === closeButton) {
      menuContent.classList.remove("active");
    }
  });
});

document.addEventListener("click", function (event) {
  var closeButton = document.querySelector(".closeButton");

  if (event.target === closeButton) {
    menuContent.classList.remove("active");
  }
});

// language

document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.querySelector(".langBtn");
  const langList = document.querySelector(".langList");

  langBtn.addEventListener("click", function () {
    const isVisible = window.getComputedStyle(langList).display !== "none";

    if (isVisible) {
      langList.style.display = "none";
    } else {
      langList.style.display = "flex";
    }
  });
  const langListVisible = localStorage.getItem("langListVisible");
  if (langListVisible === "true") {
    langList.style.display = "flex";
  } else {
    langList.style.display = "none";
  }
});

// mobile menu

document.addEventListener("DOMContentLoaded", function() {
  const burgerMenu = document.querySelector(".burgerMenu");
  const mobileMenu = document.querySelector(".mobileMenu");

  burgerMenu.addEventListener("click", function() {
   
    if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
      mobileMenu.style.display = "flex";
    } else {
      mobileMenu.style.display = "none";
    }
  });
});


//  mobile menu list

document.addEventListener("DOMContentLoaded", function() {
  const mobileItem = document.querySelector(".mobileİtem");
  const arrowImg = mobileItem.querySelector(".arrowImg");
  const categoriesMobileList = document.querySelector(".categoriesMobileList");

  mobileItem.addEventListener("click", function() {
    // arrowImg'in dönme durumunu kontrol et
    const isRotated = arrowImg.style.transform === "rotate(180deg)";

    // Dönme durumuna göre img'in rotasyonunu değiştir
    if (isRotated) {
      arrowImg.style.transform = "rotate(0deg)";
      categoriesMobileList.style.display = "none";
    } else {
      arrowImg.style.transform = "rotate(180deg)";
      categoriesMobileList.style.display = "";
    }
  });
});