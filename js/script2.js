/* Найти последовательность Хэеса, для числа должно быть выдано сообщение, с самой последовательностью, количеством шагов,
  которое понадобилось для нахождения этой последовательности, и вершиной последовательности, это максимальное число из этой последовательности. Последовательность
  Хэеса считается так: если ввели число 9, то проверяем его, если оно чётное, делим на 2, если нечетное, умножаем на 3 и прибавляем 1, и так до тех пор пока число не
  будет равно 1. */


/* const arrSequence = [];
function showMessageHaes(num) {
  if (arrSequence.length === 0) {
    arrSequence.push(num);
  }
  if (num === 1) {
      const resultMessage =
      arrSequence +
        `; шагов: ${arrSequence.length - 1}; вершина: ${Math.max(...arrSequence)}`;
      return resultMessage;
    }
  if (num % 2 === 0) {
      num = num / 2;
      arrSequence.push(num);
      return showMessageHaes(num);
  } else {
      num = num * 3 + 1;
      arrSequence.push(num);
      return showMessageHaes(num);
    }
    return showMessageHaes(num);
  }

console.log(showMessageHaes(9)); 
 */



function showMessageHaes(num) {
  let arrSequence = [num];

  while (num != 1) {
    if (num % 2 === 0) {
      num = countEven(num);
      arrSequence.push(num);
    } else {
      num = countOdd(num);
      arrSequence.push(num);
    }
  }
  const resultMessage =
  arrSequence +
    `; шагов: ${arrSequence.length - 1}; вершина: ${Math.max(...arrSequence)}`;
  return resultMessage;
}
  
function countEven(num) {
  return num / 2;
}
function countOdd(num) {
  return num * 3 + 1;
}

console.log(showMessageHaes(9)); 
