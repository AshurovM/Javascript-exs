// let itemParent = document.querySelector(".tab-item");
// let head = document.querySelectorAll('head');
// let items = document.querySelectorAll("item");
// itemParent.forEach((item, i) => {
//   item[i].style.display = "none";
// });
let head = document.querySelectorAll(".head");
let items = document.querySelectorAll(".item");
head.forEach((item, i) => {
    item.addEventListener("click", () => {
        item.classList.add("active");
        items[i].classList.add("active");
        head.forEach(item2 => {
            if (item !== item2) {
                item2.classList.remove("active");
            }
        })
        items.forEach(item3 => {
            if (items[i] !== item3) {
                item3.classList.remove("active");
            }
        })
    })
});