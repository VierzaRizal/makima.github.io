// intro start

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo-title");
// intro end

// scrollbar start

let progressSection = document.querySelector(".progress-section");
let progressBar = document.querySelector(".progress-bar");
let progressNum = document.querySelector(".progress-num");

let x, y;

// scrollbar end
let menuTog = document.querySelector(".menu-toggle");
let menuListTog = document.querySelector(".nav-wrapper-block");
let menuu = document.querySelector(".menu");

// // slider
// let images = [...document.querySelectorAll('.card')];
// let slider = document.querySelector('.card-wrapper');
// let sliderWidth;
// let imageWidth;
// let current = 0;
// let target = 0;
// let ease = .05

// function lerp(start, end, t){
//   return start * (1-t) + end * t;
// }

// function setTransform(el, transform){
//   el.style.transform = transform;
// }

// function innit(){
//   sliderWidth = slider.getBoundingClientRect().width
//   imageWidth = sliderWidth / images.length;
// }

// innit();

// intro
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});
// intro end

// progress Bar

window.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
});

function updateProgressBar() {
  progressSection.style.transform = `translate(${x}px, ${y}px)`;
  progressBar.style.height = `${getScrollPercentage()}%`;
  progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`;
  requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage() {
  return (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
}

updateProgressBar();

// toggle

menuTog.addEventListener("click", () => {
  menuTog.classList.toggle("active");
  menuListTog.classList.toggle("active");
});

/*menuTog.addEventListener("click", function () {
  menuTog.classList.toggle("active");
  menuTogWrap.classList.toggle("active");
});*/

console.log("hello");
