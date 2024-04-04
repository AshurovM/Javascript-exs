let btn = document.querySelector("button");
let colors = document.querySelectorAll(".colors");
let color = document.querySelectorAll(".color");
let p = document.querySelectorAll("p");

let col = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
function name() {
  let random = "#";
  for (let i = 0; i < 6; i++) {
    let randomColor = Math.floor(Math.random() * col.length);
    random += col[randomColor];
  }
  return random;
}

btn.addEventListener("click", () => {
  color.forEach((item, i) => {
    item.style.backgroundColor = name();
    p[i].innerText = name();
  });
});
