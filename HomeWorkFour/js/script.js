var $randomizerForm = document.forms.randomizerForm; // нода формы рандомайзер
var $minValueText = document.querySelector(".pTextMinValue"); // нода текста над minValue input'ом
var $maxValueText = document.querySelector(".pTextMaxValue"); // нода текста над maxValue input'ом
var $resultP = document.querySelector(".resultP"); // нода текста, который будет выводом результата генерации рандомног числа
var $resultPOver = document.querySelector(".resultPOver"); // нода текста, который появится, если больше чисел нельзя будет вывести
var $minValueInMaxArea = document.querySelector(".minValueInMaxArea"); // нода текста, который появится, если пользователь введет min в max

$randomizerForm.generate.addEventListener("click", genRndNumber);

var genNumbers = [];
var intervalNumbers = [];

function genRndNumber(event) {
  event.preventDefault();

  var minValue = Number($randomizerForm.min.value);
  var maxValue = Number($randomizerForm.max.value);
  var flag = true;
  //валидация
  if (isNaN(minValue)) {
    //min value не число
    printError(1);
    $randomizerForm.min.value = "";
    flag = false;
    return 0;
  }
  if (isNaN(maxValue)) {
    //max value не число
    printError(2);
    $randomizerForm.max.value = "";
    flag = false;
    return 0;
  }
  if ($randomizerForm.min.value === "") {
    //min value пустая строка
    printError(3);
    flag = false;
    return 0;
  }
  if ($randomizerForm.max.value === "") {
    //min value пустая строка
    printError(4);
    flag = false;
    return 0;
  }
  if (minValue < 0) {
    printError(5);
    flag = false;
    return 0;
  }
  if (minValue < 0) {
    printError(6);
    flag = false;
    return 0;
  }
  if (Number.isInteger(minValue) === false) {
    printError(7);
    flag = false;
    return 0;
  }
  if (Number.isInteger(maxValue) === false) {
    printError(8);
    flag = false;
    return 0;
  }
  if (minValue > maxValue) {
    printError(9);
    flag = false;
    return 0;
  }
  if (flag) {
    changeHTMLToMyText($minValueInMaxArea , '')
    disableSomething($randomizerForm.min);
    disableSomething($randomizerForm.max);
    changeHTMLToMyText($minValueText, "Min");
    changeHTMLToMyText($maxValueText, "Max");
    var result = getRandomNumber(minValue, maxValue);
    for (var i = minValue; i <= maxValue; i++) {
      if (!intervalNumbers.includes(i)) {
        intervalNumbers.push(i);
      }
    }
    for (var i = 0; i <= 10; i++) {
      if (!genNumbers.includes(result)) {
        genNumbers.push(result);
        printResult(result);
        var summGenNumbers = summAllArrayElements(genNumbers);
        var summIntervalNumbers = summAllArrayElements(intervalNumbers);
        if (summGenNumbers === summIntervalNumbers) {
          disableSomething($randomizerForm.generate);
          printResult(result);
          printFinalResult(result);
        }
        break;
      } else result = getRandomNumber(minValue, maxValue);
    }
  }
  console.log(result);
}

function printError(errorNumber) {
  // функция вывода ошибки некорректного ввода
  switch (errorNumber) {
    case 1:
      $minValueText.innerHTML =
        "Please enter <span>number</span> in Min value section";
      break;
    case 2:
      $maxValueText.innerHTML =
        "Please enter <span>number</span> in Max value section";
      break;
    case 3:
      $minValueText.innerHTML = "Min value is <span>empty</span>";
      break;
    case 4:
      $maxValueText.innerHTML = "Max value is <span>empty</span>";
      break;
    case 5:
      $minValueText.innerHTML =
        "Min value number is negative. We work only with <span>positive numbers</span> ";
      break;
    case 6:
      $maxValueText.innerHTML =
        "Max value number is negative. We work only with <span>positive numbers</span>";
      break;
    case 7:
      $minValueText.innerHTML =
        "Min value number number is not integer. We work only with <span>integer numbers</span>";
      break;
    case 8:
      $maxValueText.innerHTML =
        "Max value number number is not integer. We work only with <span>integer numbers</span>";
      break;
    case 9:
      $minValueInMaxArea.innerHTML =
        "You entered the interval backwards, please enter min value in <span>min entry field</span> and max value in <span>max entry field</span>";
      break;
  }
}

function changeHTMLToMyText(node, textWhatIneed) {
  // функция, меняет HTML ноды (аргумента 1) на аргумент 2
  node.innerHTML = textWhatIneed;
}

function getRandomNumber(min, max) {
  // рандомайзер числа
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function printResult(result) {
  $resultP.innerHTML = "GENERATED NUMBER is: " + result;
}
function printFinalResult(result) {
  $resultPOver.innerHTML =
    "number " +
    result +
    " is the last number that can be obtained randomly from a given interval";
}

function summAllArrayElements(array) {
    //функция сумирования всех елементов массива;
  var summ = 0;
  for (var i = 0; i < array.length; i++) {
    summ += array[i];
  }
  return summ;
}

function disableSomething(element) {
  return (element.disabled = true);
}
