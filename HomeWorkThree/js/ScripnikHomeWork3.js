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
var $gameTryAgain = document.querySelector(".gameTryAgain");
var $gameInput = document.querySelector(".input_input");

var easy = true; //флаг выбран легкий уровень (от 1 до 100) или задают сами (false)
var resultArray = []; //глобальный массив, где 0 элемент - начало диапозона, 1 - конец, 2 - количество попыток
var resultNumber = 0; // номер, который нужно угадывать, дальше он загенерится рандомно

$easyButton.addEventListener("click", easyChoice);
$hardButton.addEventListener("click", hardChoice);
$gameOver.addEventListener("click", gameOver);
$myRulesButton.addEventListener("click", myRules);
$gameStart.addEventListener("click", gameStart);
$gameTryAgain.addEventListener("click", game);

function easyChoice(event) {
  // если выбрали легкую игру
  $info.classList.add("hide");
  $game.classList.remove("hide");
  var fromToAtempt = [1, 100, 5];
  $gameDifficulty.innerHTML =
    "<h3>Угадываем от " +
    fromToAtempt[0] +
    " до " +
    fromToAtempt[1] +
    "</h3> \n <p>Осталось попыток: " +
    fromToAtempt[2] +
    "</p>";
  return fromToAtempt;
}

function hardChoice() {
  // если выбрали сложную игру
  $info.classList.add("hide");
  $myRules.classList.remove("hide");
}

function myRules() {
  // задаем правила пользователем, пока без верификации
  var maxLimit = Number($maxLimit.value);
  var maxAttempt = Number($maxAttempt.value);
  easy = false;
  $myRules.classList.add("hide");
  $game.classList.remove("hide");
  fromToAtempt = [1, maxLimit, maxAttempt];
  $gameDifficulty.innerHTML =
    "<h3>Угадываем от " +
    fromToAtempt[0] +
    " до " +
    fromToAtempt[1] +
    "</h3> \n <p>Осталось попыток: " +
    fromToAtempt[2] +
    "</p>";
  return fromToAtempt;
}

function gameStart() {
  // начинаем игру
  var fromToAtempt = [];
  easy === true ? (fromToAtempt = easyChoice()) : (fromToAtempt = myRules());
  var number = getRandomNumber(fromToAtempt[0], fromToAtempt[1]);
  $gameDifficulty.innerHTML =
    "<h3>Угадываем от " +
    fromToAtempt[0] +
    " до " +
    fromToAtempt[1] +
    "</h3> \n <p>Осталось попыток: " +
    fromToAtempt[2] +
    "</p>";
  $gameStart.classList.add("hide");
  $gameTryAgain.classList.remove("hide");
  resultArray = fromToAtempt;
  resultNumber = number;
  console.log(resultNumber, resultArray);
  $gameInput.classList.remove("hide");
}

function game() { 
    //
  if (Number($gameInput.value) === resultNumber) {
    $game.innerHTML = "WIN";
  } else {
    resultArray[2] = resultArray[2] - 1;
    if (resultArray[2] === 0) {
      $game.innerHTML = "YOU LOSE";
    }
    $gameDifficulty.innerHTML =
      "<h3>Угадываем от " +
      resultArray[0] +
      " до " +
      resultArray[1] +
      "</h3> \n <p>Осталось попыток: " +
      resultArray[2] +
      "</p>";
    $gameInput.value = "";
  }
}

function gameOver() { // если нажать кнопку over
  $game.classList.add("hide");
  $info.classList.remove("hide");
}

function getRandomNumber(min, max) {   // рандомайзер числа
  return Math.trunc(Math.random() * (min + max));
}
