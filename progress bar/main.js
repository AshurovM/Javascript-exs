let buttons = document.querySelectorAll(".btns button");
let items = document.querySelectorAll(".item");
let btnIndex = 1;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    btnIndex = button.classList.contains("next") ? ++btnIndex : --btnIndex;
    items.forEach((item, i) => {
      item.classList[i < btnIndex ? "add" : "remove"]("active");
    });
    if (btnIndex == items.length) {
      buttons[1].classList.add("disabled");
    } else if (btnIndex == 1) {
      buttons[0].classList.add("disabled");
    } else {
      buttons[0].classList.remove("disabled");
      buttons[1].classList.remove("disabled");
    }
  });
});
