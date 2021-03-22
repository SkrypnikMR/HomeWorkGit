
//осталось добавить холодно жарко

var $easyButton = document.querySelector(".choise_Easy");
var $hardButton = document.querySelector(".choise_Hard");
var $info = document.querySelector(".info");
var $game = document.querySelector(".game");
var $gameOver = document.querySelector(".gameOver");
var $myRules = document.querySelector(".myRules");
var $maxLimit = document.querySelector(".maxLimit");
var $minLimit = document.querySelector(".minLimit");
var $maxAttempt = document.querySelector(".maxAttempt");
var $myRulesButton = document.querySelector(".myRulesButton");
var $gameDifficulty = document.querySelector(".gameDifficulty");
var $gameStart = document.querySelector(".gameStart");
var $gameTry = document.querySelector(".gameTry");
var $gameInput = document.querySelector(".input_input");
var $myRulesText = document.querySelector(".myRules_text");

var resultArray = []; //глобальный массив, где 0 элемент - начало диапозона, 1 - конец, 2 - количество попыток
var resultNumber; // номер, который нужно угадывать, дальше он загенерится рандомно

$easyButton.addEventListener("click", tryEasyChoice);
$hardButton.addEventListener("click", tryHardChoice);
$myRulesButton.addEventListener("click", tryUserRules);
$gameStart.addEventListener("click", gameStart);
$gameOver.addEventListener("click", gameOver);
$gameTry.addEventListener("click", game);

function tryEasyChoice() {
  // если выбрали легкую игру
  resultArray = [1, 100, 5];
  renderGameDifficulty();
  renderGame(0);
}

function tryHardChoice() {
  // если выбрали сложную игру
  $info.classList.add("hide");
  $myRules.classList.remove("hide");
}
function verificationALert() {
  $myRulesText.innerHTML = "НЕТ";
}

function tryUserRules() {
  // задаем правила пользователем, пока без верификации
  var minLimit = Number($minLimit.value);
  var maxLimit = Number($maxLimit.value);
  var maxAttempt = Number($maxAttempt.value);
  var validation = true;
  // валидации
  if ($minLimit.value === "") {
    renderError("От какого числа", "Поле пустое");
    validation = false;
    return 0;
  }
  if ($maxLimit.value === "") {
    renderError("До какого числа", "Поле пустое");
    validation = false;
    return 0;
  }
  if ($maxAttempt.value === "") {
    renderError("Количество попыток", "Поле пустое");
    validation = false;
    return 0;
  }
  if (isNaN(minLimit)) {
    renderError("От какого числа", "Вы ввели не число");
    validation = false;
    return 0;
  }
  if (isNaN(maxLimit)) {
    renderError("До какого числа", "Вы ввели не число");
    validation = false;
    return 0;
  }
  if (isNaN(maxAttempt)) {
    renderError("Количество попыток", "Вы ввели не число");
    validation = false;
    return 0;
  }
  if (minLimit < 0) {
    renderError(
      "От какого числа",
      "Число от которого начинается предел должно быть не отрицательным"
    );
    validation = false;
    return 0;
  }
  if (maxLimit < 0) {
    renderError(
      "До какого числа",
      "Число до которого предел не должно быть отрицательным"
    );
    validation = false;
    return 0;
  }
  if (maxAttempt === 0) {
    renderError("Количество попыток", "Должна быть хотя бы одна попытка");
    validation = false;
    return 0;
  }
  if (maxAttempt < 1) {
    renderError(
      "Количество попыток",
      "Не может быть отрицательное количество попыток"
    );
    validation = false;
    return 0;
  }
  if (maxAttempt > 15) {
    renderError("Количество попыток", "Максимальное количество попыток: 15");
    validation = false;
    return 0;
  }
  if (
    isNaN(minLimit) === false &&
    isNaN(maxLimit) === false &&
    minLimit === maxLimit
  ) {
    renderError(
      "От и До",
      "числа От и До не могут быть равны, ваше число всегда будет равно " +
        minLimit
    );
    validation = false;
    return 0;
  }
  if (validation) {
    resultArray = [minLimit, maxLimit, maxAttempt];
    renderGameDifficulty();
    renderGame(1);
    $maxLimit.value = "";
    $minLimit.value = "";
    $maxAttempt.value = "";
  }
}
function renderError(inputName, error) {
  return ($myRulesText.innerHTML =
    "<h3>Ошибка в поле: " + inputName + "</h3>" + "<p>" + error + "</p>");
}

function renderGame(choise) {
  // отрисовка нашей игры
  if (choise === 1) {
    $myRules.classList.add("hide");
    $game.classList.remove("hide");
  } else {
    $info.classList.add("hide");
    $game.classList.remove("hide");
  }
}

function gameStart() {
  // начинаем игру
  renderGameDifficulty();
  $gameStart.classList.add("hide");
  $gameTry.classList.remove("hide");
  $gameInput.classList.remove("hide");
  resultNumber = getRandomNumber(resultArray[0], resultArray[1]);
  console.log(resultNumber);
}

function game() {
  /*   если загаданная цифра равна введенной - вывыдет победу, если нет
   - будет уменьшать количество попыток, когда станет 0 - выведет проигрыш. */
  var validation = true;

  if (validation) {
    if (Number($gameInput.value) === resultNumber) {
      renderResultAndRestartButton(1);
    } else {
      resultArray[2] = resultArray[2] - 1;
      if (resultArray[2] === 0) {
        renderResultAndRestartButton(2);
      }
      renderGameDifficulty();
      $gameInput.value = "";
    }
  }
}
function renderResultAndRestartButton(result) {
  if (result === 1) {
    $game.innerHTML = `<h1>You Win</h2> <button class="btnStyle restart">restart</button>`;
    var $restartButton = document.querySelector(".restart");
    $restartButton.addEventListener("click", function () {
      gameOver();
      location.reload();
    });
  } else {
    $game.innerHTML = `<h1>You Lose</h2> <button class="btnStyle restart">restart</button>`;
    var $restartButton = document.querySelector(".restart");
    $restartButton.addEventListener("click", function () {
      gameOver();
      location.reload();
    });
  }
}
function gameOver() {
  // если нажать кнопку exit

  $game.classList.add("hide");
  $info.classList.remove("hide");
  $gameTry.classList.add("hide");
  $gameStart.classList.remove("hide");
  $gameInput.classList.add("hide");
}
function getRandomNumber(min, max) {
  // рандомайзер числа Math.trunc(Math.random() * (max-min + 1));
  return Math.floor(min + Math.random() * (max + 1 - min));
}
function renderGameDifficulty() {
  $gameDifficulty.innerHTML =
    "<h3>Угадываем от " +
    resultArray[0] +
    " до " +
    resultArray[1] +
    "</h3> \n <p>Осталось попыток: " +
    resultArray[2] +
    "</p>";
}
