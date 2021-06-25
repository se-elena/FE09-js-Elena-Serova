// Задаем 2 числа, начало и конец диапазона. Программа выдаёт сумму всех нечетных чисел в этом диапазоне.

function sumOddNumbers(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++  ) {
    if (i % 2 != 0) {
      sum += i;
      console.log(sum);
    }
  }
  return sum;
}

console.log(sumOddNumbers(1, 7));
