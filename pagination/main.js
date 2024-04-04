let first = document.querySelector(".first");
let last = document.querySelector(".last");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let numbers = document.querySelectorAll(".num");

let currentStep = 0;

numbers.forEach((number, i) => {
  number.addEventListener("click", () => {
    currentStep = i;
    document.querySelector(".active").classList.remove("active");
    number.classList.add("active");
    if (numbers[0].classList.contains("active")) {
      first.classList.add("hide");
      prev.classList.add("hide");
    } else if (currentStep == numbers.length - 1) {
      last.classList.add("hide");
      next.classList.add("hide");
    } else {
      first.classList.remove("hide");
      prev.classList.remove("hide");
      last.classList.remove("hide");
      next.classList.remove("hide");
    }
  });
});
prev.addEventListener("click", () => {
  numbers[currentStep].classList.remove("active");
  numbers[(currentStep -= 1)].classList.add("active");
  currentStep - 1;
});
next.addEventListener("click", () => {
  numbers[currentStep].classList.remove("active");
  numbers[(currentStep += 1)].classList.add("active");
  currentStep + 1;
});
first.addEventListener("click", () => {
  numbers[currentStep].classList.remove("active");
  numbers[0].classList.add("active");
  currentStep = 0;
});
last.addEventListener("click", () => {
  numbers[currentStep].classList.remove("active");
  numbers[numbers.length - 1].classList.add("active");
  currentStep = numbers.length - 1;
});
