// 2.Составить программу для решения квадратного уравнения a∗x∗x+b∗x+c=0.

/* let findSolution = (a, b, c) => {
  const d = b * b - 4 * a * c;
  let arr = [];
  console.log(d);
  if (d > 0) {
    arr.push(((-b + Math.sqrt(d)) / 2) * a);
    arr.push(((-b - Math.sqrt(d)) / 2) * a);
  } else if (d == 0) {
    arr.push(((-b + Math.sqrt(d)) / 2) * a);
  } else {
    return false;
  }
  console.log(arr);
  return arr;
};

findSolution(1, 12, 36); */

// 3.Составить программу поиска суммы минимального и макси- мального из трех введенных чисел.

/* function findSumMinMax(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  let result = min + max;
  console.log(result);
  return result;
}

findSumMinMax(2, -1, 15);
 */

// 5.Если среди трех чисел А,В,С имеется хотя бы одно четное вычислить максимальное, иначе - минимальное

/* function findMaxMin(a, b, c) {
  let result = 0;
  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    result = Math.max(a, b, c);
  } else {
    result = Math.min(a, b, c);
  }
  console.log(result);
  return result;
}

findMaxMin(13, -1, 15); */

// 7.Ввести два числа. Меньшее заменить их полусуммой, а большее - удвоенным произведением.

/* let x = +prompt("Введите первое число");
let y = +prompt("Введите первое число");
let x2 = 0;
let y2 = 0;

if (x < y) {
  x2 = (x + y) / 2;
  y2 = x * y * 2;
} else {
  y2 = (x + y) / 2;
  x2 = x * y * 2;
}
x = x2;
y = y2;

console.log(x);
console.log(y); */

// 8.Ввести три числа А,В,С. Удвоить каждое из них, если А>=В>=С, иначе поменять значения А и В.

/* let a = +prompt("Введите первое число");
let b = +prompt("Введите первое число");
let c = +prompt("Введите первое число");

if (a > b && b > c) {
  a *= 2;
  b *= 2;
  c *= 2;
} else {
  x = a;
  a = b;
  b = x;
}
console.log(a, b, c); */

// 3.Составить программу, которая бы по названию месяца вы- давала бы количество дней в месяце.

let month;
do {
  month = prompt("Введите месяц");
} while (month == null || month == "");

switch (month) {
  case "Декабрь":
    alert("31");
    break;
  case "Январь":
    alert("30");
    break;
  default:
    alert("Нет таких значений");
}
