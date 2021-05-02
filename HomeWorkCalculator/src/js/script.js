import "../css/style.css";

const init = () => {
  //main
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
  // ingeeneer calc
  const ln = document.querySelector("#ln");
  const minusOne = document.querySelector("#minusOne");
  ln.addEventListener("click", (event) => takeLn(display));
  minusOne.addEventListener("click", (event) =>
    reversePositivityOrNegativity(display)
  );
  const pi = document.querySelector("#pi");
  pi.addEventListener("click", () => takePI(display));
  const oneDeleteX = document.querySelector("#oneDeleteX");
  oneDeleteX.addEventListener("click", () => takeOneDeleteX(display));
  const module = document.querySelector("#module");
  module.addEventListener("click", () => takeModule(display));
  const squared = document.querySelector("#squared");
  squared.addEventListener("click", () => takeSquared(display, 2));
  const mod = document.querySelector("#mod");
  mod.addEventListener("click", (event) => sendToDisplay(event, display)) ;
  const e = document.querySelector("#e");
  e.addEventListener("click", (event) => takeE(display));
};

init();

const sendToDisplay = (event, display) => {
  const accept = ["+", "-", "/", "*"];
  for (let i = 0; i < accept.length; i++) {
    if (
      event.target.textContent === "Mod" &&
      display.value.substr(display.value.length - 1) === accept[i]
    ) {
      return -1;
    }
  }
  const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (let j = 0; j < number.length; j++) {
    if (
      display.value !== "0" &&
      display.value.substr(display.value.length - 1) === number[j] &&
      event.target.textContent === "("
    ) {
      display.value += "*(";
      return -1;
    }
  }
  const numberRegular = new RegExp("[0-9]", "i");
  if (event.target.textContent === ")" && display.value.includes("(")) {
    const lastIndexOfLeftBracket = display.value.lastIndexOf("(");
    const inBracket = display.value.substr(
      lastIndexOfLeftBracket + 1,
      display.value.length
    );
    let newInBracket;
    if (inBracket.includes("Mod")) {
      newInBracket = inBracket.replace("Mod", "%");
    } else {
      newInBracket = inBracket;
    }
    const res = eval(newInBracket);
    const result = parseInt(res) === res ? res : res.toFixed(5);
    if (lastIndexOfLeftBracket !== 0) {
      display.value =
        display.value.substr(0, lastIndexOfLeftBracket) +
        parseFloat(result.toString());
      return -1;
    }
    display.value = result;
    return -1;
  }
  const optionBkt1 =
    display.value.substr(display.value.length - 1) === "/" &&
    event.target.textContent === "(";
  const optionBkt2 =
    display.value.substr(display.value.length - 1) === "*" &&
    event.target.textContent === "(";
  const optionBkt3 =
    display.value.substr(display.value.length - 1) === "+" &&
    event.target.textContent === "(";
  const optionBkt4 =
    display.value.substr(display.value.length - 1) === "-" &&
    event.target.textContent === "(";
  const option5 = display.value === "0" && event.target.textContent === ".";
  if (optionBkt1 || optionBkt2 || optionBkt3 || optionBkt4 || option5) {
    display.value += event.target.textContent;
    return -1;
  }
  if (display.value.substr(display.value.length - 1) === ")") {
    display.value += event.target.textContent;
    return -1;
  }
  if (display.value === "0" && event.target.textContent === "(") {
    display.value = event.target.textContent;
    return -1;
  }

  if (display.value === "0" && !event.target.textContent.match(numberRegular)) {
    display.value === "0";
    return -1;
  }

  if (display.value === "0") {
    display.value = event.target.textContent;
    return -1;
  }
  if (
    !display.value.substr(display.value.length - 1, 1).match(numberRegular) &&
    !event.target.textContent.match(numberRegular)
  ) {
    return -1;
  }
  display.value += event.target.textContent;
};

const clearDisplay = (display) => {
  display.value = 0;
};

const useBackspaceOnDisplay = (display) => {
  display.value.length === 1
    ? (display.value = 0)
    : (display.value = display.value.substr(0, display.value.length - 1));
};

const printResult = (display) => {
  if (display.value.includes("Mod")) {
    display.value = display.value.replace("Mod", "%");
  }
  const result = eval(display.value);

  if (result.toString().length > 12) {
    display.value = parseFloat(result.toFixed(5).toString());
    return;
  }

  display.value = result;
};

const showIngeneerCalc = (event, content, displayWrapper, hided, zero) => {
  content.classList.add("vibro");
  content.classList.add("disappear");
  const timeOut = setTimeout(() => {
    content.classList.remove("vibro");
    content.classList.remove("disappear");
    content.classList.add("content__big");
    displayWrapper.classList.add("tablo__big");
    zero.classList.add("zero__big");
    event.target.textContent = "Standart Version🐵🐵🐵🐵🐵\n";
    event.target.classList.add("ingeneer__big");
    for (let i = 0; i < hided.length; i++) {
      hided[i].classList.remove("hide");
    }
    clearTimeout(timeOut);
  }, 0);
};

const takeLn = (display) => {
  if (display.value === "0") {
    return -1;
  }
  const accept = ["+", "-", "/", "*", "(", "d"];
  for (let i = 0; i < accept.length; i++) {
    if (display.value.substr(display.value.length - 1, 1) === accept[i]) {
      return -1;
    }
  }

  if (display.value.includes("+")) {
    const lastIndexOfPlus = display.value.lastIndexOf("+");
    const result = Math.log(
      eval(display.value.substr(lastIndexOfPlus + 1, display.value.length))
    );
    display.value = display.value.substr(0, lastIndexOfPlus + 1) + result;
    return -1;
  }
  if (display.value.includes("-")) {
    const lastIndexOfMinus = display.value.lastIndexOf("-");
    const result = Math.log(
      eval(display.value.substr(lastIndexOfMinus + 1, display.value.length))
    );
    display.value = display.value.substr(0, lastIndexOfMinus + 1) + result;
    return -1;
  }
  if (display.value.includes("/")) {
    const lastIndexOfDelete = display.value.lastIndexOf("/");
    const result = Math.log(
      eval(display.value.substr(lastIndexOfDelete + 1, display.value.length))
    );
    display.value = display.value.substr(0, lastIndexOfDelete + 1) + result;
    return -1;
  }
  if (display.value.includes("*")) {
    const lastIndexOfMult = display.value.lastIndexOf("*");
    const result = Math.log(
      eval(display.value.substr(lastIndexOfMult + 1, display.value.length))
    );
    display.value = display.value.substr(0, lastIndexOfMult + 1) + result;
    return -1;
  }
  display.value = Math.log(eval(display.value));
};
const reversePositivityOrNegativity = (display) => {
  if (display.value === "0") {
    return -1;
  }
  const accept = ["+", "-", "/", "*", "(", "d"];
  for (let i = 0; i < accept.length; i++) {
    if (display.value.substr(display.value.length - 1, 1) === accept[i]) {
      return -1;
    }
  }
  if (display.value.includes("+")) {
    const lastIndexOfPlus = display.value.lastIndexOf("+");
    const result =
      display.value.substr(lastIndexOfPlus + 1, display.value.length) * -1;
    display.value = display.value.substr(0, lastIndexOfPlus + 1) + result;
    return -1;
  }
  /*   if (display.value.includes("-")) {
    const lastIndexOfMinus = display.value.lastIndexOf("-");
    const result =
      display.value.substr(lastIndexOfMinus + 1, display.value.length) * -1;
    display.value = display.value.substr(0, lastIndexOfMinus + 1) + result;
    return -1;
  } */
  if (display.value.includes("/")) {
    const lastIndexOfDelete = display.value.lastIndexOf("/");
    const result =
      display.value.substr(lastIndexOfDelete + 1, display.value.length) * -1;
    display.value = display.value.substr(0, lastIndexOfDelete + 1) + result;
    return -1;
  }
  if (display.value.includes("*")) {
    const lastIndexOfMult = display.value.lastIndexOf("*");
    const result =
      display.value.substr(lastIndexOfMult + 1, display.value.length) * -1;
    display.value = display.value.substr(0, lastIndexOfMult + 1) + result;
    return -1;
  }
  display.value = eval(display.value) * -1;
};
const takePI = (display) => {
  if (display.value === "0") {
    display.value = Math.PI;
    return -1;
  }
  const accept = ["+", "-", "/", "*", "(", "d"];
  for (let i = 0; i < accept.length; i++) {
    if (display.value.substr(display.value.length - 1, 1) === accept[i]) {
      display.value += Math.PI;
      return -1;
    }
  }
};

const takeOneDeleteX = (display) => {
  if (display.value === "0") {
    return -1;
  }
  if (display.value.includes("+")) {
    const lastIndexOfPlus = display.value.lastIndexOf("+");
    const result =
      1 / eval(display.value.substr(lastIndexOfPlus + 1, display.value.length));
    if (Number.isNaN(result)) return -1;
    display.value = display.value.substr(0, lastIndexOfPlus + 1) + result;
    return -1;
  }
  if (display.value.includes("-")) {
    const lastIndexOfMinus = display.value.lastIndexOf("-");
    const result =
      1 /
      eval(display.value.substr(lastIndexOfMinus + 1, display.value.length));
    if (Number.isNaN(result)) return -1;
    display.value = display.value.substr(0, lastIndexOfMinus + 1) + result;
    return -1;
  }
  if (display.value.includes("/")) {
    const lastIndexOfDelete = display.value.lastIndexOf("/");
    const result =
      1 /
      eval(display.value.substr(lastIndexOfDelete + 1, display.value.length));
    if (Number.isNaN(result)) return -1;
    display.value = display.value.substr(0, lastIndexOfDelete + 1) + result;
    return -1;
  }
  if (display.value.includes("*")) {
    const lastIndexOfMult = display.value.lastIndexOf("*");
    const result =
      1 / eval(display.value.substr(lastIndexOfMult + 1, display.value.length));
    if (Number.isNaN(result)) return -1;
    display.value = display.value.substr(0, lastIndexOfMult + 1) + result;
    return -1;
  }
  if (display.value.includes("(")) {
    const lastIndexOfLeftBracket = display.value.lastIndexOf("(");
    const result =
      1 /
      eval(
        display.value.substr(lastIndexOfLeftBracket + 1, display.value.length)
      );
    if (Number.isNaN(result)) return -1;
    display.value =
      display.value.substr(0, lastIndexOfLeftBracket + 1) + result;
    return -1;
  }
  display.value = 1 / eval(display.value);
};

const takeModule = (display) => {
  if (
    display.value === "0" ||
    display.value.charAt(display.value.length - 1) == "("
  ) {
    return -1;
  }
  if (display.value.includes("+")) {
    const lastIndexOfPlus = display.value.lastIndexOf("+");
    const result = Math.abs(
      eval(display.value.substr(lastIndexOfPlus + 1, display.value.length))
    );
    display.value = display.value.substr(0, lastIndexOfPlus + 1) + result;
    return -1;
  }
  if (display.value.includes("/")) {
    const lastIndexOfDelete = display.value.lastIndexOf("/");
    const result = Math.abs(
      eval(display.value.substr(lastIndexOfDelete + 1, display.value.length))
    );
    display.value = display.value.substr(0, lastIndexOfDelete + 1) + result;
    return -1;
  }
  if (display.value.includes("*")) {
    const lastIndexOfMult = display.value.lastIndexOf("*");
    const result = Math.abs(
      eval(display.value.substr(lastIndexOfMult + 1, display.value.length))
    );
    display.value = display.value.substr(0, lastIndexOfMult + 1) + result;
    return -1;
  }
  display.value = Math.abs(display.value);
};
const takeSquared = (display) => {
  if (
    display.value === "0" ||
    display.value.charAt(display.value.length - 1) == "(" ||
    display.value.charAt(display.value.length - 1) == "+" ||
    display.value.charAt(display.value.length - 1) == "*" ||
    display.value.charAt(display.value.length - 1) == "/" ||
    display.value.charAt(display.value.length - 1) == "-"
  ) {
    return -1;
  }
  if (display.value.includes("+")) {
    const lastIndexOfPlus = display.value.lastIndexOf("+");
    const result = Math.pow(
      eval(display.value.substr(lastIndexOfPlus + 1, display.value.length)),
      mode
    );
    display.value = display.value.substr(0, lastIndexOfPlus + 1) + result;
    return -1;
  }
  if (display.value.includes("-")) {
    const lastIndexOfMinus = display.value.lastIndexOf("-");
    const result = Math.pow(
      eval(display.value.substr(lastIndexOfMinus + 1, display.value.length)),
      mode
    );
    display.value = display.value.substr(0, lastIndexOfMinus + 1) + result;
    return -1;
  }
  if (display.value.includes("/")) {
    const lastIndexOfDelete = display.value.lastIndexOf("/");
    const result = Math.pow(
      eval(display.value.substr(lastIndexOfDelete + 1, display.value.length)),
      mode
    );
    display.value = display.value.substr(0, lastIndexOfDelete + 1) + result;
    return -1;
  }
  if (display.value.includes("*")) {
    const lastIndexOfMult = display.value.lastIndexOf("*");
    const result = Math.pow(
      eval(display.value.substr(lastIndexOfMult + 1, display.value.length)),
      mode
    );
    display.value = display.value.substr(0, lastIndexOfMult + 1) + result;
    return -1;
  }
  if (display.value.includes("(")) {
    const lastIndexOfLeftBracket = display.value.lastIndexOf("(");
    const result = Math.pow(
      eval(
        display.value.substr(lastIndexOfLeftBracket + 1, display.value.length)
      ),
      mode
    );
    display.value =
      display.value.substr(0, lastIndexOfLeftBracket + 1) + result;
    return -1;
  }
  display.value = Math.pow(display.value, mode);
};
const takeE = (display) => {
  if (
    display.value === "0" ||
    display.value.charAt(display.value.length - 1) == "(" ||
    display.value.charAt(display.value.length - 1) == "+" ||
    display.value.charAt(display.value.length - 1) == "*" ||
    display.value.charAt(display.value.length - 1) == "/" ||
    display.value.charAt(display.value.length - 1) == "-"
  ) {
    return -1;
  }
  if (display.value.includes("+")) {
    const lastIndexOfPlus = display.value.lastIndexOf("+");
    const result = Math.exp(
      eval(display.value.substr(lastIndexOfPlus + 1, display.value.length))
    );
    display.value = display.value.substr(0, lastIndexOfPlus + 1) + result;
    return -1;
  }
  if (display.value.includes("-")) {
    const lastIndexOfMinus = display.value.lastIndexOf("-");
    const result = Math.exp(
      eval(display.value.substr(lastIndexOfMinus + 1, display.value.length))
    );
    display.value = display.value.substr(0, lastIndexOfMinus + 1) + result;
    return -1;
  }
  if (display.value.includes("/")) {
    const lastIndexOfDelete = display.value.lastIndexOf("/");
    const result = Math.exp(
      eval(display.value.substr(lastIndexOfDelete + 1, display.value.length))
    );
    display.value = display.value.substr(0, lastIndexOfDelete + 1) + result;
    return -1;
  }
  if (display.value.includes("*")) {
    const lastIndexOfMult = display.value.lastIndexOf("*");
    const result = Math.exp(
      eval(display.value.substr(lastIndexOfMult + 1, display.value.length))
    );
    display.value = display.value.substr(0, lastIndexOfMult + 1) + result;
    return -1;
  }
  if (display.value.includes("(")) {
    const lastIndexOfLeftBracket = display.value.lastIndexOf("(");
    const result = Math.exp(
      eval(
        display.value.substr(lastIndexOfLeftBracket + 1, display.value.length)
      )
    );
    display.value =
      display.value.substr(0, lastIndexOfLeftBracket + 1) + result;
    return -1;
  }
  display.value = Math.exp(display.value);
};
