
/* А эту будем решать на занятии
Замена элементов массива.
Создадим массив с десятью случайными элементами от 0 до 100;  
Напишем инструкцию, которая будет заменять все “0” на строку “zero”;  
Выводим полученный массив в консоль.  
прим. [12, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1]; */


const arr = [0, 1, 2, 202, 10];
for (let i = 0; i < arr.length; i++) {
  const indexZero = arr.indexOf(0);
  arr[indexZero] = 'zero';
  console.log(arr);
}

console.log(arr[3]).toString().split('');


function zeroSwapper() {
  const arr = [];
  while (arr.length < 10) {
    const pushed = Math.floor(Math.random() * 101);
    if (pushed % 10 !== 0) {
      arr.push(pushed);
    } else {
      const pushedArr = pushed.toString().split("");
      pushedArr.forEach((int, index, arr) => {
        if (int == "0") {
          arr[index] = "zero";
        }
      });
      arr.push(pushedArr.join(""));
    }
  }
  console.log(arr);
  return arr;
}

zeroSwapper();
