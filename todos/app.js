// let ism = prompt("ismingizni kiriting")
// let abc = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase()
// alert(`sizning ismingiz ${abc}.😊😂❤`) // (windows + . = smaylkchala)

// let ism = prompt("Kim Kerak ❗️❗️❗️");
// let arr = ['Axror', 'Sardor', 'Doniyor']

// if (arr.includes(ism)){
//     alert(`${ism} ismi mavjud😊😊😊`);
// } else {
//     alert(`"${ism} ismi mavjud emas"😢😢😢`);
// }

// let arr = ["Axror", "Sardor", "Doniyor"];
// arr.forEach((item) => {
//     let bek = item + 'bek'
//     console.log(bek);
// })

// let viloyat = prompt('Viloyat nomini kiriting')
// switch (viloyat) {
//   case "Toshkent":
//     alert(`${viloyat} viloyatida 1.500 million odam bor`);
//     break;
//   case "Andijon":
//     alert(`${viloyat} viloyatida 1.200 million odam bor`);
//     break;
//   case "Buxoro":
//     alert(`${viloyat} viloyatida 720 mingta odam bor`);
//     break;
//   case "Sirdaryo":
//     alert(`${viloyat} viloyatida 650 mingta odam bor`);
//     break;
//   case "Jizzax":
//     alert(`${viloyat} viloyatida 832 mingta odam bor`);
//     break;
//   case "Navoiy":
//     alert(`${viloyat} viloyatida 310 mingta odam bor`);
//     break;
//   case "Qashqadaryo":
//     alert(`${viloyat} viloyatida 457 mingta odam bor`);
//     break;
//   case "Surxondaryo":
//     alert(`${viloyat} viloyatida 582 mingta odam bor`);
//     break;
//   case "Samarqand":
//     alert(`${viloyat} viloyatida 910 mingta odam bor`);
//     break;
//   case "Qoraqalpogiston":
//     alert(`${viloyat} viloyatida 3 million odam bor`);
//     break;
//   case "Xorazm":
//     alert(`${viloyat} viloyatida 340 mingta odam bor`);
//     break;
//   case "Farg'ona":
//     alert(`${viloyat} viloyatida 460 mingta odam bor`);
//     break;
//   case "Namangan":
//     alert(`${viloyat} viloyatida 590 mingta odam bor`);
//     break;
//   default:
//     alert(`Bunday viloyat mavjud emas`);
//     break;
// }

// let belgi = prompt('Belgi kiriting');
// if (belgi.length < 20) {
//     alert(`siz yana ${20 - belgi.length} ta belgi kiritishingiz mumkin`);
// } else if (belgi.length == 20) {
//     alert('yetarlicha belgi kiritdingiz');
// } else if (belgi.length > 20) {
//     alert('siz 20tadan ko\'p belgi kiritdingiz');
// } else {
//     alert('qaytadan urinib k\'ing');
// }

/* ------------------------------to do list------------------------------ */
const button = document.querySelector("button");
let ul = document.querySelector('ul')
let li = document.querySelectorAll('li')
li.forEach((item) => {
    item.addEventListener('click', () => {
        item.remove();
    })
})
button.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = "Something new text 😂";
    ul.append(li);
})
ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})

/* ------------------------------filter metodi------------------------------ */
// const movies = [
//     {name: 'Avatar 3D', year: 2008, rating: 9},
//     {name: 'Titanik 4D', year: 1997, rating: 7},
//     {name: 'Forsaj 9 3D', year: 2020, rating: 4},
//     {name: 'Avengers', year: 2012, rating: 6},
// ]
// const newMovies = []
// movies.forEach((item) => {
//     if (item.year > 2010) {
//         newMovies.push(item)
//     }
// })
// console.log(newMovies)

// let filterMovie = movies.filter((item) => {
//     return item.year > 2010
// })
// console.log(filterMovie);
/* ----------------------------------map metodi----------------------------- */
// let mapMovies = movies.map(item =>  item.rating + 1)
// console.log(mapMovies);