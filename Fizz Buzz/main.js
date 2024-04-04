const son = prompt("Son kiriting");
if (son % 3 == 0 && son % 5 == 0) {
  document.write("FizzBuzz");
} else if (son % 3 == 0) {
  document.write("Fizz");
} else if (son % 5 == 0) {
  document.write("Buzz");
} else {
  document.write(`3ga yoki 5ga bo'linadigan son kiriting`);
}
