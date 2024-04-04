let form = document.querySelector("form");
let inp = document.querySelector("form input");
let massage = document.querySelector(".massage span");
let random = Math.floor(Math.random() * 100 + 1);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let p = document.querySelector("p");
  if (inp.value >= 100 || 0 >= inp.value) {
    p.innerHTML = "Your number is invalid";
    p.style.color = "red";
  } else if (inp.value > random) {
    p.innerHTML = "You number is low";
    p.style.color = "black";
  } else if (inp.value < random) {
    p.innerHTML = "You number is high";
    p.style.color = "black";
  } else if (inp.value == random) {
    p.innerHTML = "Congratulations";
    p.style.color = "green";
  } else {
    p.innerHTML = "Your number is invalid";
    p.style.color = "red";
  }
  massage.textContent--;
  if (massage.textContent == 0) {
    p.innerHTML = "You lose the game";
    p.style.color = "red";
    massage.textContent++;
  }
});
