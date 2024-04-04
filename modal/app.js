let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let head = document.querySelectorAll('.head');
let form = document.querySelectorAll('form');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.close');
function add () {
    form[0].classList.add("active");
    head[0].classList.add("active");
}
function add2 () {
    form[1].classList.add("active");
    head[1].classList.add("active");
}
btn1.addEventListener('click', () => {
    overlay.classList.add('active');
    add()
});
close.addEventListener('click', () => {
    overlay.classList.remove('active');
    form[0].classList.remove('active');
    head[0].classList.remove('active');
});
btn2.addEventListener('click', () => {
    overlay.classList.add('active');
    add2()
})
head[0].addEventListener('click', () => {
    add()
})
head[1].addEventListener("click", () => {
    add2()
});