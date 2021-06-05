/* Напишите функцию getDays, которая принимает год и месяц, а возвращает количество дней в месяце
getDays( 2021 , 4)  //30
getDays( 2021 , ‘April’)  //30

Через прототип расширьте встроенный объект Number методом isOdd(), который возвращает true, если число нечетное. 

Написать функцию every, которая будет принимать первым аргументом массив, а вторым функцию колбэк(которая будет принимать 
    каждый элемент массива и возвращать true либо false). Результатом функции должно быть логическое выражение true/false 
     в зависимости от того, выполняется ли условие для каждого из элементов.
Example:
every([8, 2, 4], function (num){
	return  num%2===0
})  // true

Все созданные функции должны быть покрыты тестами! */

//1

function getDays(year, month) {
  if (!year && !month) return `I don't work without  arguments`;
  if (typeof year !== "number") return "year must be a number";
  if ((typeof month === "number" && month < 1) || month > 12)
    return "we have only 12 month in year , pls enter a number from 1 to 12, or use sting name of month";
  if (!month) return "I work only with two arguments";
  if (typeof month === "string") {
    switch (month) {
      case "January":
        month = 1;
        break;
      case "February":
        month = 2;
        break;
      case "March":
        month = 3;
        break;
      case "April":
        month = 4;
        break;
      case "May":
        month = 5;
        break;
      case "June":
        month = 6;
        break;
      case "July":
        month = 7;
        break;
      case "August":
        month = 8;
        break;
      case "September":
        month = 9;
        break;
      case "October":
        month = 10;
        break;
      case "November":
        month = 11;
        break;
      case "December":
        month = 12;
        break;
      default:
        return "Please write right month on English and first latter must be Capital";
    }
  }
  return new Date(year, month, 0).getDate();
}

Number.prototype.isOdd = function (n) {
  if (typeof n !== "number" || Number.isNaN(n)) return NaN;
  if (n % 2 !== 0) return true;
  return false;
};

Number.prototype.isOddLookOnThis = function () {
   if (typeof this.valueOf() !== "number" || Number.isNaN(this.valueOf())) return NaN;
  if (this.valueOf() % 2 !== 0) return true;
  return false;
};


function every(array, callback) {
  if (!array && !callback) {
    return `I don't work without arguments`;
  }
  if (!Array.isArray(array)) {
    return "not a array in first argument";
  }
  if (!array.length) {
    return "array is empty";
  }
  if (typeof callback !== "function") {
    return "not a function in second argument";
  }

  for (var i = 0; i < array.length; i++) {
    var result = callback(array[i]);
    if (!result) {
      return false;
    }
  }
  return true;
}

module.exports = {
  getDays,
  every,
  isOdd: Number.prototype.isOdd,
  isOddLookOnThis: Number.prototype.isOddLookOnThis
};
