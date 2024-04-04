let container = document.querySelector(".container");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

setInterval(() => {
  let date = new Date();
  let days = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  day.innerHTML = days + '/';
  let months = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
  month.innerHTML = months + 1
  let years = date.getFullYear();
  year.innerHTML = years;
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  hour.innerHTML = hours;
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  minute.innerHTML = minutes;
  let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  second.innerHTML = seconds
}, 1000);