// Geting slids dom
let slids = document.querySelectorAll(".slide");
// create slide array
const slideArray = Array.from(slids);

// prev & next button
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Getting prev & next slide
function getPrevNext() {
  const activeSlide = document.querySelector(".slide.active");
  const currentIndex = slideArray.indexOf(activeSlide);

  let prev, next;
  if (currentIndex == 0) {
    prev = slideArray[slideArray.length - 1];
  } else {
    prev = slideArray[currentIndex - 1];
  }
  if (currentIndex == slideArray.length - 1) {
    next = slideArray[0];
  } else {
    next = slideArray[currentIndex + 1];
  }
  console.log(prev);
  console.log(currentIndex);
  console.log(next);
  return [next, prev];
}
getPrevNext();
// positioning slid's
function positioningSlide() {
  const activeSlide = document.querySelector(".slide.active");
  const currentIndex = slideArray.indexOf(activeSlide);
  console.log(currentIndex);
  let [next, prev] = getPrevNext();

  slideArray.map((slide, index) => {
    if (currentIndex == index) {
      slide.style.transform = `translateX(0)`;
    } else if (slide == prev) {
      slide.style.transform = `translateX(-100%)`;
    } else if (slide == next) {
      slide.style.transform = `translateX(100%)`;
    }
    slide.addEventListener("transitionend", () => {
      slide.classList.remove("smooth");
    });
  });
}
// Next buton addEventListener
next.addEventListener("click", () => {
  const activeSlide = document.querySelector(".slide.active");
  let [next, prev] = getPrevNext();

  activeSlide.classList.add("smooth");
  next.classList.add("smooth");
  activeSlide.classList.remove("active");
  activeSlide.style.transform = `translateX(-100%)`;
  next.classList.add("active");
  next.style.transform = `translateX(0)`;

  positioningSlide();
});

// Prev buton addEventListener
prev.addEventListener("click", () => {
  const activeSlide = document.querySelector(".slide.active");
  let [next, prev] = getPrevNext();

  activeSlide.classList.add("smooth");
  prev.classList.add("smooth");
  activeSlide.classList.remove("active");
  activeSlide.style.transform = `translateX(100%)`;
  prev.classList.add("active");
  prev.style.transform = `translateX(0)`;

  positioningSlide();
});
