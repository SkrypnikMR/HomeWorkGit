//Условные операторы

//1. Если а  - четное посчитать а*б, иначе а+б

function getProductOrSumm(a, b) {
  if (a % 2 === 0) {
    return a * b;
  } else return a + b;
}

//2. Определить какой четверти принадлежит точка с координатами (x,y)

function getPointPosition(x, y) {
  if (x > 0 && y > 0) {
    return "point in I quarter";
  }
  if (x < 0 && y > 0) {
    return "point in II quarter";
  }
  if (x < 0 && y < 0) {
    return "point in III quarter";
  }
  if (x > 0 && y < 0) {
    return "point in IV quarter";
  }
  if (x === 0 && y === 0) {
    return "point at origin";
  }
  if (x === 0 && y !== 0) {
    return "point on the x-axis";
  }
  if (x !== 0 && y === 0) {
    return "point on the y-axis";
  }
}

// 3. Найти суммы только положительных из трех чисел

function calculateSummOnlyPositive(a, b, c) {
  var summ = 0;

  if (a > 0) {
    summ += a;
  }
  if (b > 0) {
    summ += b;
  }
  if (c > 0) {
    summ += c;
  }
  return summ;
}

// 4. Посчитать выражение (макс(а*б*с , а+б+с))+ 3

function calculateMaxPlus3(a, b, c) {
  var product = a * b * c;
  var summ = a + b + c;

  return product > summ ? product + 3 : summ + 3; // это вернет summ + 3 даже если product === summ , но так как они равны - разницы что возвращать нет.
}

// 5. Написать определения оценки студента по его рейтингу, на основе следующих правил

function getGrade(rating) {
  if (rating === 0 || rating < 20) {
    return "F";
  }
  if (rating === 20 || rating < 40) {
    return "E";
  }
  if (rating === 40 || rating < 60) {
    return "D";
  }
  if (rating === 60 || rating < 75) {
    return "C";
  }
  if (rating === 75 || rating < 90) {
    return "B";
  }
  if (rating === 90 || rating <= 100) {
    return "A";
  } else return "out of range";
}

//Циклы

// 1. Найти сумму четных чисел и их количество в диапозоне от 1 до 99

function calculateSummofEvenNumbersFrom1to99() {
  var summ = 0;
  var count = 0;
  for (var i = 1; i <= 99; i++) {
    if (i % 2 === 0) {
      summ += i;
      count++;
    }
  }
  return [summ, count];
}

// 2. Проверить простое ли число

function isPrimeNumber(number) {
  var count = 0;
  for (var i = 2; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  if (count > 1) {
    return false;
  } else return true;
}

// 3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

// последовательный подбор
function getSqrt(number) {
  var sqrt = 0;
  for (var i = 0; i < number; i++) {
    if (i * i <= number) {
      sqrt = i;
    }
  }
  return sqrt;
}
function getBinarySqrt(number) {
  var low = 0;
  var mid = 0;
  var high = number;
  while (high - low > 1) {
    mid = Math.floor(high + low) / 2;
    if (mid * mid <= number) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return low;
}

// 4. Вычислить факториал числа n.

function getFactorial(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

// 5. Посчитать сумму цифр заданного числа

function calculateSummOfDigits(number) {
  var summ = 0;
  var digit;
  while (number > 0) {
    digit = number % 10;
    summ += digit;
    number = parseInt(number / 10);
  }
  return summ; //
}

// 6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа

function reverseNumber(number) {
  var digit = 0;
  var result = 0;

  while (number) {
    digit = number % 10;
    result = result * 10 + digit;
    number = parseInt(number / 10);
  }
  return result;
}

// Массивы

//1. Найти минимальны элемент массива
function getMinEl(array) {
  var min = array[0];
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

//2. Найти минимальны элемент массива

function getMaxEl(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

//3. Найти индекс минимального элемента массива

function getMinElIndex(array) {
  var minIndex = 0;
  var min = array[0];
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      minIndex = i;
    }
  }
  return minIndex;
}

//4. Найти индекс максимального элемента массива

function getMaxElIndex(array) {
  var maxIndex = 0;
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

//5. Посчитать сумму элементов массива с нечетными индексами

function calculateSummOfOddIndex(array) {
  var summ = 0;
  for (var i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      summ += array[i];
    }
  }
  return summ;
}

//6. Сделать реверс массива

function reverseArray(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

//7. Посчитать нечетное количество элементов

function getOddNumber(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}

//8. Поменять местами первую и вторую половину массива

function changeArrayParts(array) {
  var mid = array.length / 2;
  mid = array.length % 2 === 0 ? (mid = mid - 1) : parseInt(mid);
  var part1 =
    array.length % 2 === 0 ? array.slice(0, mid + 1) : array.slice(0, mid);
  var part2 = array.slice(mid + 1, array.length);
  return array.length % 2 === 0
    ? part2.concat(part1)
    : part2.concat(array[mid], part1);
}

//9. Отсортировать массив (пузырьком (Bubble) , выбором (Select), вставками(Insert))

function bubbleSort(array) {
  for (var n = 0; n < array.length; n++) {
    var flag = true;
    for (var i = 0; i < array.length - 1 - n; i++) {
      if (array[i] > array[i + 1]) {
        var a = array[i];
        array[i] = array[i + 1];
        array[i + 1] = a;
        flag = false;
      }
      if (flag = true;) {
        break;
      }
    }
  }
  return array;
}
console.log(bubbleSort([1, 3, 2]));
function selectSort(array) {
  for (var n = 0; n < array.length - 1; n++) {
    var max = -Infinity;
    var index = null;
    for (var i = 0; i < array.length - n; i++) {
      if (array[i] > max) {
        max = array[i];
        index = i;
      }
    }
    var a = array[array.length - 1 - n];
    array[array.length - 1 - n] = max;
    array[index] = a;
  }
  return array;
}

function insertSort(array) {
  for (var i = 1; i < array.length; i++) {
    var current = array[i];
    var afterCurrent = i - 1;
    while (afterCurrent >= 0 && array[afterCurrent] > current) {
      array[afterCurrent + 1] = array[afterCurrent];
      afterCurrent--;
    }
    array[afterCurrent + 1] = current;
  }
  return array;
}

// Функции

//1. Получить строковое название дня недели по номеру дня.

function getStringDayNumber(number) {
  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return week[number - 1];
}

//2. Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function getDistance(x1, y1, x2, y2) {
  if (
    typeof x1 !== "number" ||
    typeof x2 !== "number" ||
    typeof y1 !== "number" ||
    typeof y2 !== "number"
  ) {
    return "wrong input";
  } else return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

//3. Вводим число(0-999), получаем строку с прописью числа.

function convertToWords(number) {
  const NUMBERS = {
    nineHundered: 900,
    eightHundered: 800,
    sevenHundered: 700,
    sixHundered: 600,
    fiveHundered: 500,
    fourHundered: 400,
    threeHundered: 300,
    twoHundered: 200,
    oneHundered: 100,
    ninety: 90,
    eighty: 80,
    seventy: 70,
    sixty: 60,
    fifty: 50,
    forty: 40,
    thirty: 30,
    twenty: 20,
    nineteen: 19,
    eighteen: 18,
    seventeen: 17,
    sixteen: 16,
    fifteen: 15,
    fourteen: 14,
    thirteen: 13,
    twelve: 12,
    eleven: 11,
    ten: 10,
    nine: 9,
    eight: 8,
    seven: 7,
    six: 6,
    five: 5,
    four: 4,
    three: 3,
    two: 2,
    one: 1,
  };
  if (number === 0) {
    return "zero";
  } else {
    let result = "";
    while (number > 0) {
      for (a in NUMBERS) {
        if (NUMBERS[a] <= number) {
          result += "" + a + " ";
          number -= NUMBERS[a];
          break;
        }
      }
    }
    return result;
  }
}

//4. Вводим строку, которая содержит число, написанное прописью. Получить число.

function convertWordToNumber(word) {
  var wordArray = word.split(" ");
  var numbersArray = [];
  var result = 0;
  const WORDS = {
    hundred: 100,
    ninety: 90,
    eighty: 80,
    seventy: 70,
    sixty: 60,
    fifty: 50,
    forty: 40,
    thirty: 30,
    twenty: 20,
    nineteen: 19,
    eighteen: 18,
    seventeen: 17,
    sixteen: 16,
    fifteen: 15,
    fourteen: 14,
    thirteen: 13,
    twelve: 12,
    eleven: 11,
    ten: 10,
    nine: 9,
    eight: 8,
    seven: 7,
    six: 6,
    five: 5,
    four: 4,
    three: 3,
    two: 2,
    one: 1,
    zero: 0,
  };
  for (var i = 0; i <= wordArray.length; i++) {
    for (keys in WORDS) {
      if (WORDS.hasOwnProperty(wordArray[i])) {
        numbersArray.push(WORDS[wordArray[i]]);
        break;
      }
    }
  }
  if (numbersArray[1] === 100) {
    numbersArray[1] = numbersArray[0] * numbersArray[1];
    numbersArray = numbersArray.slice(1);
  }
  for (var i = 0; i < numbersArray.length; i++) {
    result += numbersArray[i];
  }
  return result;
}
