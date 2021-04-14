var calculatorNode = document.querySelector(".calculator__body");
var calculatorScreen = document.querySelector(".calculator__screen-result");
var operations = [];

calculatorNode.addEventListener("click", calculator);

function resultFunc(array) {
  if (array[0] === "") {
    array.splice(0, 1);
    array[0] = "-" + array[0];
  }
  var result;
  switch (array[1]) {
    case "+":
      result = getSumm(array[0], array[2]);
      break;
    case "-":
      result = getDifference(array[0], array[2]);
      break;
    case "*":
      result = getMultiplication(array[0], array[2]);
      break;
    case "/":
      result = getDivisionResult(array[0], array[2]);
      break;
  }
  return result;
}

function getSumm(a, b) {
  return Number(a) + Number(b);
}
function getDifference(a, b) {
  return Number(a) - Number(b);
}

function getPersent(x) {
  return Number(x) / 100;
}
function getMultiplication(a, b) {
  return Number(a) * Number(b);
}
function getDivisionResult(a, b) {
  return Number(a) / Number(b);
}

function renderIngenerCalc() {
    // перерисовуем наш калькулятор
    console.log('next')
}

function calculator(event) {
  switch (event.target.getAttribute("data")) {
    case "ingenerVersion":
      renderIngenerCalc();
      calculatorNode.removeEventListener("click", calculator);
    case "clear":
      calculatorScreen.textContent = "0";
      operations.length = 0;
      break;
    case "+/-":
      calculatorScreen.textContent =
        calculatorScreen.textContent.charAt(0) === "-"
          ? (calculatorScreen.textContent = calculatorScreen.textContent.substr(
              1,
              calculatorScreen.textContent.length
            ))
          : (calculatorScreen.textContent = "-" + calculatorScreen.textContent);
      break;
    case "%":
      calculatorScreen.textContent = getPersent(calculatorScreen.textContent);
      break;
    case "+":
      operations = calculatorScreen.textContent.split("+");
      operations.push("+");
      calculatorScreen.textContent = "";
      break;
    case "*":
      operations = calculatorScreen.textContent.split("*");
      operations.push("*");
      calculatorScreen.textContent = "";
      break;
    case "/":
      operations = calculatorScreen.textContent.split("/");
      operations.push("/");
      calculatorScreen.textContent = "";
      break;
    case "-":
      operations = calculatorScreen.textContent.split("-");
      operations.push("-");
      calculatorScreen.textContent = "";
      break;
    case "=":
      operations.push(calculatorScreen.textContent);
      var result = resultFunc(operations);
      calculatorScreen.textContent =
        result === Math.round(result) ? result : result.toFixed(5);
      break;
    case `${event.target.getAttribute("data")}`:
      calculatorScreen.textContent === "0"
        ? (calculatorScreen.textContent = event.target.getAttribute("data"))
        : (calculatorScreen.textContent += event.target.getAttribute("data"));
      break;
  }
}
