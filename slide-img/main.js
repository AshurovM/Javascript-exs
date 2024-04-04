const slide = document.querySelectorAll(".slider>.slide");
slide.forEach((item) => {
  item.addEventListener("click", () => {
    slide.forEach((slide) => {
      slide.classList.remove("active");
    });
    item.classList.add("active");
  });
});
