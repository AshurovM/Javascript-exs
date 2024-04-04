let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let score0 = document.querySelector("#score--0");
let img = document.querySelector(".dice");
let roll = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold");
let current0 = document.querySelector("#current--0");
let current1 = document.querySelector("#current--1");

let currentScore = 0;
roll.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 6 + 1);
  currentScore += random;
  img.src = `dice-${random}.png`;
  current0.textContent = currentScore;
});
let currentScore1 = currentScore;
hold.addEventListener("click", () => {
  score0.textContent = currentScore1 += currentScore;
  currentScore = 0;
  current0.textContent = 0;
  showPlayer1();
});
function showPlayer0() {
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
}
function showPlayer1() {
  player0.classList.remove("player--active");
  player1.classList.add("player--active");
}
