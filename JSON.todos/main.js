// let arr = document.querySelector('.arr')
let card = document.querySelector('.arr')
let input = document.querySelector('form>.input')
let add = document.querySelector("form>.add");
let all = document.querySelector("form>.all-add");
const request = new XMLHttpRequest()
request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200){
        let respose = JSON.parse(request.responseText);
        all.addEventListener('click', (e) => {
            e.preventDefault()
            respose.forEach((item, i) => {
                card.innerHTML += `<div class="object">
            <div class="user_id">userId:${respose[i].userId}</div>
            <div class="id">id: ${respose[i].id}</div>
            <div class="title">title: ${respose[i].title}</div>
            <div class="completed">completed: ${respose[i].completed}</div>
            </div>`;
            })
            all.textContent = 'Olib tashlash'
        })
        add.addEventListener('click', (e) => {
            e.preventDefault()
        for (let i = 0; i < input.value; i++) {
            card.innerHTML += `<div class="object">
            <div class="user_id">userId:${respose[i].userId}</div>
            <div class="id">id: ${respose[i].id}</div>
            <div class="title">title: ${respose[i].title}</div>
            <div class="completed">completed: ${respose[i].completed}</div>
            </div>`;
        }
        input.value = ''
        })
    }
})
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send()