let btn = document.querySelector('.btn')
let card = document.querySelector('.card')
let overlay = document.querySelector('.overlay')
let close = document.querySelector('.close')
btn.addEventListener('click', () => {
    overlay.classList.add("active");
    btn.style.display = "none"
})
close.addEventListener(('click'), () => {
    overlay.classList.remove("active");
    btn.style.display = "block"
})
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  btn.style.display = "block";
});