import {
  getFactorial,
  clearDisplay,
  useBackspaceOnDisplay,
  sendToDisplay,
  printResult,
  showIngeneerCalc,
  showStandartCalc,
  takeLn,
  reversePositivityOrNegativity,
  takePI,
  takeOneDeleteX,
  takeModule,
  takePower,
  takeE,
  takeRND,
  takeFactorial,
  takeSqrt,
} from "./script";
export const init = () => {
  //main nodes
  const displayWrapper = document.querySelector(".content__item-tablo");
  const content = document.querySelector(".content");
  const hided = document.querySelectorAll(".hided");
  const display = document.querySelector("#tablo");
  const clear = document.querySelector("#clear");
  const backspace = document.querySelector("#backspace");
  const ingeneer = document.querySelector("#ingeneer");
  const leftBkt = document.querySelector("#leftBkt");
  const rightBkt = document.querySelector("#rightBkt");
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

  //main listeners
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
  leftBkt.addEventListener("click", (event) => sendToDisplay(event, display));
  rightBkt.addEventListener("click", (event) => sendToDisplay(event, display));
  ingeneer.addEventListener("click", (event) =>
    showIngeneerCalc(event, content, displayWrapper, hided, zero)
  );

  // ingeneer nodes
  const ln = document.querySelector("#ln");
  const minusOne = document.querySelector("#minusOne");
  const pi = document.querySelector("#pi");
  const oneDeleteX = document.querySelector("#oneDeleteX");
  const module = document.querySelector("#module");
  const squared = document.querySelector("#squared");
  const sqrt = document.querySelector("#sqrt");
  const mod = document.querySelector("#mod");
  const e = document.querySelector("#e");
  const exp = document.querySelector("#exp");
  const log = document.querySelector("#log");
  const random = document.querySelector("#random");
  const factorial = document.querySelector("#factorial");
  const tenPower = document.querySelector("#tenPower");
  const xPowerY = document.querySelector("#xPowerY");
  const stanadart = document.querySelector("#standart");

  //ingeneers listeners
  ln.addEventListener("click", (event) => takeLn(display));
  minusOne.addEventListener("click", (event) =>
    reversePositivityOrNegativity(display)
  );
  pi.addEventListener("click", () => takePI(display));
  oneDeleteX.addEventListener("click", () => takeOneDeleteX(display));
  module.addEventListener("click", () => takeModule(display));
  squared.addEventListener("click", () => takePower(display, 2));
  sqrt.addEventListener("click", () => takeSqrt(display));
  mod.addEventListener("click", (event) => sendToDisplay(event, display));
  e.addEventListener("click", () => takeE(display));
  exp.addEventListener("click", (event) => sendToDisplay(event, display));
  log.addEventListener("click", (event) => sendToDisplay(event, display));
  random.addEventListener("click", () => takeRND(display));
  factorial.addEventListener("click", () =>
    takeFactorial(display, getFactorial)
  );
  tenPower.addEventListener("click", () => takePower(display, 10));
  xPowerY.addEventListener("click", (event) => sendToDisplay(event, display));
  stanadart.addEventListener("click", (event) =>
    showStandartCalc(event, content, displayWrapper, hided, zero, ingeneer)
  );
};
