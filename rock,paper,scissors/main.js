let pupil = document.querySelector(".pupil");
let bot = document.querySelector(".bot");
let h2 = document.querySelector("h2");
let items = document.querySelectorAll(".item");
let imgs = document.querySelectorAll(".item>img");

items.forEach((item, i) => {
  item.addEventListener("click", () => {
    pupil.src = imgs[i].src;
    let random = Math.floor(Math.random() * 3 + 1);
    bot.src = `img/${random}.jpg`;
  });
});
