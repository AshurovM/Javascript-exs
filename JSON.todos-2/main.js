let form = document.querySelector("form");
let input = document.querySelector("input");
let button = document.querySelector("button");
let lists = document.querySelector(".lists")
let list = document.querySelectorAll(".list")

let api = new XMLHttpRequest()
api.addEventListener("readystatechange", () => {
    if (api.readyState === 4 && api.status === 200) {
        let json = JSON.parse(api.responseText)
            form.addEventListener("submit", (e) => {
                e.preventDefault()
                lists.innerHTML = ""
                json.forEach((element) => {
                    if (element.userId == input.value) {
                      lists.innerHTML += `<li class="list">${element.title}</li>`;
                    }
                });
        });
    }
})
api.open( "GET", "https://jsonplaceholder.typicode.com/todos");
api.send()
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => json.forEach(element => {
//         lists.innerHtml += `${json}`
//     }))