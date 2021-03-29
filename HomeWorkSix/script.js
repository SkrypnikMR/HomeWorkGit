/* 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
Правила:
-Яйца варить 5 минут
-Вместительность емкости не более 5 яиц одновременно */

function getCookingTime(eggsAmount) {
  var eggsContainer = 5;
  return Math.ceil(eggsAmount / eggsContainer) * eggsContainer;
}

/* 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти. */

function getNumber(array) {
  var arrayOdd = []; // нечетные
  var arrayEven = []; // четные

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayEven.push(array[i]);
    } else arrayOdd.push(array[i]);
  }
  return arrayOdd.length < arrayEven.length ? arrayOdd[0] : arrayEven[0];
}

/* 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с
 разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр,
  и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве 
  второго параметра (без учета регистра). */

function findTitle(array, string) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty("title")) {
      if (array[i].title.toLowerCase().indexOf(string, 0) !== -1) {
        result.push(array[i].title);
      }
    }
  }
  return result;
}

/* 4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке */
function countCharacters(string) {
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    if (
      (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) ||
      string[i].toUpperCase() !== string[i].toLowerCase()
    ) {
      obj[string[i]] = obj[string[i]] ? obj[string[i]] + 1 : 1;
    }
  }
  return obj;
}
/* 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
Палиндром - это слово, фраза, число или другая последовательность символов, которая читается так же, как вперед и назад, например, «мадам». */

function getNextPalindrome(number) {
  number = number + 1; // Чтобы не возвращало number, если он сам полиндром
  while (checkOnPalindrome(number)) {  // цикл, пока функция чек полиндром не вернет false
    number++;
  }
  return number;
}

function checkOnPalindrome(n) {
  
  n = n.toString();
  var m = "";
  if (n.length === 1) {
    return true;
  }
  for (var i = n.length - 1; i >= 0; i--) {
    m += n[i];
  }
  return m !== n; // функция вернет false, если наш аргумент равен реверсированной версии себя.
}
