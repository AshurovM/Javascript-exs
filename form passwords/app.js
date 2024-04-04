let firstName = document.querySelector('.first-name')
let pass = document.querySelector(".pass");
let pass_2 = document.querySelector(".pass_2");
let button = document.querySelector('button')
button.addEventListener('click', (e) => {
    e.preventDefault();
    if (pass.value == pass_2.value) {
      alert("Xush kelibsiz");
    } else {
        alert('Parol xato')
    }
    pass.value = "";
    pass_2.value = "";
})