/* А эту будем решать на занятии
Замена элементов массива.
Создадим массив с десятью случайными элементами от 0 до 100;  
Напишем инструкцию, которая будет заменять все “0” на строку “zero”;  
Выводим полученный массив в консоль.  
прим. [12, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1]; */

function changeToZero() {
  const arr = new Array(10);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 101);
  }
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      arr[i] = arr[i].toString().replace(/0/g, "zero");
    }
  }
  console.log(arr);
}
changeToZero();
