import { div } from "prelude-ls";
import "../css/style.css";

const init = () => {
  const display = document.querySelector("#tablo");
  const clear = document.querySelector("#clear");
  const backspace = document.querySelector("#backspace");
  const ingeneer = document.querySelector("#ingeneer");
  const negPos = document.querySelector("#NegPos");
  const percent = document.querySelector("#percent");
  const division = document.querySelector("#division");
  const multiplication = document.querySelector("#multiplication");
  const minus = document.querySelector("#minus");
  const plus = document.querySelector("#plus");
  const result = document.querySelector("#result");
  const coma = document.querySelector("#coma");
  const zero = document.querySelector("#zero");
  const one = document.querySelector("#one");
  const two = document.querySelector("#two");
  const three = document.querySelector("#three");
  const four = document.querySelector("#four");
  const five = document.querySelector("#five");
  const six = document.querySelector("#six");
  const seven = document.querySelector("#seven");
  const eight = document.querySelector("#eight");
  const nine = document.querySelector("#nine");

  zero.addEventListener("click", (event) => sendToDisplay(event, display));
  one.addEventListener("click", (event) => sendToDisplay(event, display));
  two.addEventListener("click", (event) => sendToDisplay(event, display));
  three.addEventListener("click", (event) => sendToDisplay(event, display));
  four.addEventListener("click", (event) => sendToDisplay(event, display));
  five.addEventListener("click", (event) => sendToDisplay(event, display));
  six.addEventListener("click", (event) => sendToDisplay(event, display));
  seven.addEventListener("click", (event) => sendToDisplay(event, display));
  eight.addEventListener("click", (event) => sendToDisplay(event, display));
  nine.addEventListener("click", (event) => sendToDisplay(event, display));
  minus.addEventListener("click", (event) => sendToDisplay(event, display));
  plus.addEventListener("click", (event) => sendToDisplay(event, display));
  division.addEventListener("click", (event) => sendToDisplay(event, display));
  coma.addEventListener("click", (event) => sendToDisplay(event, display));
  multiplication.addEventListener("click", (event) =>
    sendToDisplay(event, display)
  );
  clear.addEventListener("click", (event) => clearDisplay(display));
  backspace.addEventListener("click", (event) =>
    useBackspaceOnDisplay(display)
  );
  result.addEventListener("click", (event) => printResult(display));
  percent.addEventListener("click", (event) => sendToDisplay(event, display));
};

init();

const sendToDisplay = (event, display) => {
  const regular = new RegExp("[0-9]", "i");
  if (display.value === "0" && !event.target.textContent.match(regular)) {
    display.value === "0";
    return -1;
  }
  if (display.value === "0") {
    display.value = event.target.textContent;
    return -1;
  }
  if (
    !display.value.substr(display.value.length - 1, 1).match(regular) &&
    !event.target.textContent.match(regular)
  ) {
    return -1;
  }
  display.value += event.target.textContent;
};

const clearDisplay = (display) => (display.value = 0);

const useBackspaceOnDisplay = (display) => {
  display.value.length === 1
    ? (display.value = 0)
    : (display.value = display.value.substr(0, display.value.length - 1));
};

const printResult = (display) => {
  const result = eval(display.value);
  if (result.toString().length > 12) {
    display.value = result.toString().substr(0, 12);
    return;
  }
  display.value = result;
};
