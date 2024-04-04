const contents = document.querySelectorAll('.content')
const icons = document.querySelectorAll(".item>.icon");
contents.forEach((content, i) => {
    content.addEventListener('click', () => {
        content.classList.toggle('active')
            icons.forEach(icon => {
                icons[i].classList.toggle('active')
        })
    })
})
