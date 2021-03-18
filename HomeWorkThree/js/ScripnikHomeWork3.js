/* 
Что ещё хочу сделать:

зарефачить ещё больше.
Добавить верификацию


 */






var $easyButton = document.querySelector(".choise_Easy");
var $hardButton = document.querySelector(".choise_Hard");
var $info = document.querySelector(".info");
var $game = document.querySelector(".game");
var $gameOver = document.querySelector(".gameOver");
var $myRules = document.querySelector(".myRules");
var $maxLimit = document.querySelector("#maxLimit");
var $maxAttempt = document.querySelector("#maxAttempt");
var $myRulesButton = document.querySelector(".myRulesButton");
var $gameDifficulty = document.querySelector(".gameDifficulty");
var $gameStart = document.querySelector(".gameStart");
var $gameTry = document.querySelector(".gameTry");
var $gameInput = document.querySelector(".input_input");

var resultArray = []; //глобальный массив, где 0 элемент - начало диапозона, 1 - конец, 2 - количество попыток
var resultNumber = 0; // номер, который нужно угадывать, дальше он загенерится рандомно

$easyButton.addEventListener("click", tryEasyChoice);
$hardButton.addEventListener("click", tryHardChoice);
$myRulesButton.addEventListener("click", tryUserRules);
$gameStart.addEventListener("click", gameStart);
$gameOver.addEventListener("click", gameOver);
$gameTry.addEventListener("click", game);

function tryEasyChoice() {
  // если выбрали легкую игру
  $info.classList.add("hide");
  $game.classList.remove("hide");
  resultArray = [1, 100, 5];
  renderGameDifficulty();
}

function tryHardChoice() {
  // если выбрали сложную игру
  $info.classList.add("hide");
  $myRules.classList.remove("hide");
}

function tryUserRules() {
  // задаем правила пользователем, пока без верификации
  var maxLimit = Number($maxLimit.value);
  var maxAttempt = Number($maxAttempt.value);
  resultArray = [1, maxLimit, maxAttempt];
  $myRules.classList.add("hide");
  $game.classList.remove("hide");
  renderGameDifficulty();
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
  if (Number($gameInput.value) === resultNumber) {
    $game.innerHTML = "WIN";
  } else {
    resultArray[2] = resultArray[2] - 1;
    if (resultArray[2] === 0) {
      $game.innerHTML = "YOU LOSE";
    }
    renderGameDifficulty();
    $gameInput.value = "";
  }
}

function gameOver() {
  // если нажать кнопку over
  $game.classList.add("hide");
  $info.classList.remove("hide");
}

function getRandomNumber(min, max) {
  // рандомайзер числа
  return Math.trunc(Math.random() * (min + max));
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
