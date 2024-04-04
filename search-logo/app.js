
const doc = document
const input = document.querySelector('form>input')
const close = document.querySelector('form>.close');
const button = document.querySelector('form>button')
const plus = document.querySelector('.plus');
const overlay = document.querySelector('.overlay');
const overlayInput = document.querySelector('.tab>input');
const overlayBtn = document.querySelector(".tab>button");
const icons = document.querySelector('.icons');
const img = document.querySelector('.logo>img');
const logo = document.querySelector(".icons>.logo");
const icon = document.querySelectorAll('.logo>.icon');
const cross = document.querySelectorAll(".icon>.cross");
doc.addEventListener('dblclick', () => {
    icon.forEach((item) => {
      item.classList.toggle("active");
    });
})
close.addEventListener('click', () => {
    input.value = ''
})
plus.addEventListener('click', () => {
    overlay.classList.add('active')
})
doc.addEventListener('keydown', () => {
    if (overlay.classList.contains('active')) {
        overlayInput.focus()
    }
})
overlayInput.addEventListener('input', () => {
    img.src = `https://www.google.com/s2/favicons?sz=256&domain_url=${overlayInput.value}`
})
overlayBtn.addEventListener('click', () => {
    icons.innerHTML += `<div class="logo">
            <div class="icon">
                <div class="cross"><i class="fi fi-br-cross"></i></div>
                <div class="pencil"><i class="fi fi-rr-pencil"></i></div>
            </div>
            <a href="https://">
            <img src="https://www.google.com/s2/favicons?sz=256&domain_url=${overlayInput.value}" alt="">
            </a>
        </div>`;
    overlay.classList.remove("active");
    overlayInput.value = ''
})
// cross.addEventListener('click', (e) => {
//     console.log(e.target);
// })