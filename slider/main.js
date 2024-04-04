let items = document.querySelectorAll(".box .item");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let itemId = 1;

function showItem(id) {
  if (id > items.length) {
    itemId = 1;
  }
  if (id < 1) {
    itemId = items.length;
  }
  items.forEach((item) => (item.style.display = "none"));
  items[itemId - 1].style.display = "block";
}

next.addEventListener("click", () => {
  showItem((itemId += 1));
});
prev.addEventListener("click", () => {
  showItem((itemId -= 1));
});
