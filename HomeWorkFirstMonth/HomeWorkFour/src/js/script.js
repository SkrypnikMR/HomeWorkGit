var $randomizerForm = document.forms.app__body; // нода формы рандомайзер
var $minValueText = document.querySelector("#pTextMinValue"); // нода текста над minValue input'ом
var $maxValueText = document.querySelector("#pTextMaxValue"); // нода текста над maxValue input'ом
var $resultP = document.querySelector("#resultP"); // нода текста, который будет выводом результата генерации рандомног числа
var $resultPOver = document.querySelector("#resultPOver"); // нода текста, который появится, если больше чисел нельзя будет вывести
var $minValueInMaxArea = document.querySelector("#minValueInMaxArea"); // нода текста, который появится, если пользователь введет min в max
var $generate = document.querySelector("#generate"); // нода  кнопки с #generate
var $reset = document.querySelector("#reset"); // кнопки с #reset
$generate.addEventListener("click", genRndNumber); // listener кнопки с #generate
$reset.addEventListener("click", resetRandomizer); // listenter кнопки с #reset
var genNumbers = [];
var intervalNumbers = [];

function genRndNumber(event) {
  event.preventDefault();
  var minValue = Number($randomizerForm.min.value);
  var maxValue = Number($randomizerForm.max.value);
  var flag = tryValid($randomizerForm.min.value, $randomizerForm.max.value);
  //валидация
  if (flag) {
    changeHTMLToMyText($minValueInMaxArea, "");
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
    if (genNumbers.includes(result)) {
      return genRndNumber(event);
    }
    if (!genNumbers.includes(result)) {
      genNumbers.push(result);
      printResult(result);
      var summGenNumbers = summAllArrayElements(genNumbers);
      var summIntervalNumbers = summAllArrayElements(intervalNumbers);
      if (summGenNumbers === summIntervalNumbers) {
        disableSomething($randomizerForm.generate);
        fadeOutEffect($randomizerForm.generate);
        printResult(result);
        printFinalResult(result);
      }
    }
  }
}

function resetRandomizer(event) {
  event.preventDefault();
  unDisableSomething($randomizerForm.generate);
  unDisableSomething($randomizerForm.min);
  unDisableSomething($randomizerForm.max);
  changeHTMLToMyText($minValueText, "Min");
  changeHTMLToMyText($maxValueText, "Max");
  clearInputs();
  printResult("restart");
  printFinalResult("restart");
  $randomizerForm.generate.style.opacity = 1;
  genNumbers = [];
  intervalNumbers = [];
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
  return (node.innerHTML = textWhatIneed);
}

function getRandomNumber(min, max) {
  // рандомайзер числа
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function printResult(result) {
  if (result === "restart") {
    return ($resultP.innerHTML = "");
  } else
    return ($resultP.innerHTML =
      "GENERATED NUMBER is: " + "<span>" + result + "</span> ");
}
function printFinalResult(result) {
  // функция вывода, выводится только, когда все числа из интервала были уже случайно выведены.
  if (result === "restart") {
    return ($resultPOver.innerHTML = "");
  }
  return ($resultPOver.innerHTML =
    " number " +
    "<span>" +
    result +
    "</span>" +
    " is the last number that can be obtained randomly from a given interval" +
    "\n Push Reset for new numbers ");
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
  element.style.color = "red";
  element.style.cursor = "default";
  return (element.disabled = true);
}
function unDisableSomething(element) {
  // элементарная функция, которая андизейблит нужный элемент
  return (element.disabled = false);
}

function tryValid(minValue, maxValue) {
  var NumberMinValue = Number(minValue);
  var NumberMaxValue = Number(maxValue);
  if (isNaN(NumberMinValue)) {
    //min value не число
    printError(1);
    minValue;
    return false;
  }
  if (isNaN(NumberMaxValue)) {
    //max value не число
    printError(2);
    maxValue;
    return false;
  }
  if (minValue === "") {
    //min value пустая строка
    printError(3);
    return false;
  }
  if (maxValue === "") {
    //min value пустая строка
    printError(4);
    return false;
  }
  if (NumberMinValue < 0) {
    printError(5);
    return false;
  }
  if (NumberMaxValue < 0) {
    printError(6);
    return false;
  }
  if (Number.isInteger(NumberMinValue) === false) {
    printError(7);
    return false;
  }
  if (Number.isInteger(NumberMaxValue) === false) {
    printError(8);
    return false;
  }
  if (NumberMinValue > NumberMaxValue) {
    printError(9);
    return false;
  } else return true;
}

function clearInputs() {
  $randomizerForm.min.value = "";
  $randomizerForm.max.value = "";
}

function fadeOutEffect(element) {
  var fadeTarget = element;
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 100);
}
