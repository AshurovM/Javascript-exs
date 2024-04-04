// function largeNum(num1, num2) {
//     if (num1 < num2) {
//         console.log('2chi son katta');
//     } else if (num1 > num2) {
//         console.log('1chi son katta');
//     } else {
//         console.log('ikkala son ham teng');
//     }
// }
// largeNum(4, 3)

// function isLandscape(width, height) {
//     return (width > height)
// }
// console.log(isLandscape(16, 19));

// function fizzBuzz(input) {
//     if (input % 3 === 0 && input % 5 === 0) console.log('fizzBuzz')
//     else if (input % 3 === 0) console.log('fizz');
//     else if (input % 5 === 0) console.log('buzz')
//     else if (typeof input !== "number") console.log("Son emas");
//     else console.log(input);
// }
// fizzBuzz(15)

// const SPEED_LIMIT = 70
// function checkSpeed(speed) {
//     if (speed <= SPEED_LIMIT) {
//       return "Yo'l ochiq";
//     } else if (speed > SPEED_LIMIT) {
//       let points = Math.floor((speed - 70) / 5);
//       if (points > 12) return "Guvohnoma olib qo'yiladi";
//       return points;
//     }
// }
// console.log(checkSpeed(170));

// function sum(limit) {
//     let sum1 = 0;

//     for (let i = 0; i <= limit; i++) {
//         if ((i % 3 === 0) || (i % 5 === 0)) {
//             sum1 += i
//         }
//     }

//     return sum1;
// }
// console.log(sum(10));

// let car = {
//     model: 'Toyota',
//     make: 'Estiam',
//     year: 2016,
//     price: 50000
// }
// function showProporties(obj) {
//     for (i in obj) {
//         if (typeof obj[i] === 'string') {
//             console.log(i, obj[i]);
//         }
//     }
// }
// showProporties(car)

// const marks = [81, 74, 86, 59, 77]
// console.log(calculateGrade(marks));
// function calculateGrade(marks) {
//     let zero = 0;
//     marks.forEach((mark) => {
//         zero += mark;
//     });

//     let avrg = zero / marks.length;
//     if (avrg < 50) return "F";
//     else if (avrg < 60) return "D";
//     else if (avrg < 70) return "C";
//     else if (avrg < 80) return "B";
//     return 'A'
// }

// showPrimeNumbers(20)
// function showPrimeNumbers(limit) {
//     for (let i = 2; i <= limit; i++) {
//         let isPrime = true
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(i);
//     }
// }


// Sammi--------------------------
let numberOfSeries = prompt('Nechta serial ko\'rdingiz')
let seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false
}
let lastSeries = prompt('Oxirgi ko\'rgan serialingiz')
let seriesStink = prompt('Nechi baho berasiz')
let a = prompt("Oxirgi ko'rgan serialingiz");
let b = prompt("Nechi baho berasiz");
seriesDB.series[lastSeries] = seriesStink;
seriesDB.series[a] = b
console.log(seriesDB);