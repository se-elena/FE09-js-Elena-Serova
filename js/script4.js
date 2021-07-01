/* Ещё задача для самостоятельной работы
   Массив уникальных случайных цифр.
   Создадим массив для семи элементов;  
   Заполним его случайными цифрами от 0 до 10;  
   Цифры в массиве не должны повторяться;  
   Вывести этот массив в консоль;  
   Упорядочить массив;  
   Еще раз вывести его в консоль. */

function createArray() {
  let arr = [];
  while (arr.length < 7) {
    // num = Math.floor(min + Math.random() * (max + 1 - min));
    num = Math.floor(Math.random() * 11); // min 0, max 10

    if (arr.indexOf(num) == -1) {
      arr.push(num);
    }
  }
  console.log(arr);

  arr.sort((a, b) => a - b);

  console.log(arr);
}

createArray();
