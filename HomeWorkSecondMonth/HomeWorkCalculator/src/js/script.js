export const sendToDisplay = (event, display) => {
  if (event.target.textContent === "x^y") {
    event.target.textContent = "^";
  }
  const accept = ["+", "-", "/", "*"];
  for (let i = 0; i < accept.length; i++) {
    if (
      (event.target.textContent === "Mod" &&
        display.value.substr(display.value.length - 1) === accept[i]) ||
      (event.target.textContent === "exp" &&
        display.value.substr(display.value.length - 1) === accept[i]) ||
      (event.target.textContent === "^" &&
        display.value.substr(display.value.length - 1) === accept[i])
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
    }
    if (inBracket.includes("^")) {
      newInBracket = inBracket.replace("^", "**");
    } else if (inBracket.includes("exp")) {
      newInBracket = `Number(${inBracket.replace(
        "exp",
        ").toExponential(Number("
      )}))`;
    } else if (inBracket.includes("log")) {
      newInBracket = `${inBracket.replace("log", "*Math.log10(")})`;
    } else if (
      !inBracket.includes("Mod") &&
      !inBracket.includes("exp") &&
      !inBracket.includes("log")
    ) {
      newInBracket = inBracket;
    }
    const res = eval(newInBracket);

    if (lastIndexOfLeftBracket !== 0) {
      display.value = display.value.substr(0, lastIndexOfLeftBracket) + res;
      return -1;
    }
    display.value = res;
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

export const clearDisplay = (display) => {
  display.value = 0;
};
export const printResult = (display) => {
  const symbols = ["/", "+", "-", "*", "g", "d", "p", "^"];
  for (let i = 0; i < symbols.length; i++) {
    if (display.value.substr(display.value.length - 1) === symbols[i]) {
      return -1;
    }
  }
  if (display.value.includes("log")) {
    display.value = display.value.replace("log", "*Math.log10(");
    display.value += ")";
    const result = eval(display.value);
    if (result.toString().length > 12) {
      display.value = parseFloat(result.toFixed(5).toString());
      return -2;
    }
    display.value = result;
    return -1;
  }
  if (display.value.includes("Mod")) {
    display.value = display.value.replace("Mod", "%");
    const result = eval(display.value);
    if (result.toString().length > 12) {
      display.value = parseFloat(result.toFixed(5).toString());
      return -2;
    }
    display.value = result;
    return -1;
  }
  if (display.value.includes("^")) {
    display.value = display.value.replace("^", "**");
    const result = eval(display.value);
    if (result.toString().length > 12) {
      display.value = parseFloat(result.toFixed(5).toString());
      return -2;
    }
    display.value = result;
    return -1;
  }
  if (display.value.includes("exp")) {
    display.value = `Number(${display.value.replace(
      "exp",
      ").toExponential(Number("
    )}))`;
    const result = eval(display.value);
    if (result.toString().length > 12) {
      display.value = result;
      return -2;
    }
    display.value = result;
    return -1;
  }
  const result = eval(display.value);
  if (result.toString().length > 12) {
    display.value = parseFloat(result.toFixed(5).toString());
    return -2;
  }
  display.value = result;
};
export const useBackspaceOnDisplay = (display) => {
  display.value.length === 1
    ? (display.value = 0)
    : (display.value = display.value.substr(0, display.value.length - 1));
};
export const showIngeneerCalc = (
  event,
  content,
  displayWrapper,
  hided,
  zero
) => {
  content.classList.add("vibro");
  content.classList.add("disappear");
  const timeOut = setTimeout(() => {
    content.classList.remove("vibro");
    content.classList.remove("disappear");
    displayWrapper.classList.add("tablo__big");
    content.classList.add("content__big");
    zero.classList.add("zero__big");
    event.target.classList.add("hide");
    for (let i = 0; i < hided.length; i++) {
      hided[i].classList.remove("hide");
    }
    clearTimeout(timeOut);
  }, 3000);
};
export const showStandartCalc = (
  event,
  content,
  displayWrapper,
  hided,
  zero,
  ingeneer
) => {
  content.classList.add("vibro");
  content.classList.add("disappear");
  const timeOut = setTimeout(() => {
    content.classList.remove("vibro");
    content.classList.remove("disappear");
    content.classList.remove("content__big");
    displayWrapper.classList.remove("tablo__big");
    zero.classList.remove("zero__big");
    event.target.classList.add("hide");
    ingeneer.classList.remove("hide");
    for (let i = 0; i < hided.length; i++) {
      hided[i].classList.add("hide");
    }
    clearTimeout(timeOut);
  }, 3000);
};

export const takeLn = (display) => {
  if (display.value === "0") {
    return -1;
  }
  const accept = ["+", "-", "/", "*", "(", "d", "p", "g", "^"];
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
export const reversePositivityOrNegativity = (display) => {
  if (display.value === "0") {
    return -1;
  }
  const accept = ["+", "-", "/", "*", "(", "d", "p", "g", "^"];
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
export const takePI = (display) => {
  if (display.value === "0") {
    display.value = Math.PI;
    return -1;
  }
  const accept = ["+", "-", "/", "*", "(", "d", "p", "g", "^"];
  for (let i = 0; i < accept.length; i++) {
    if (display.value.substr(display.value.length - 1, 1) === accept[i]) {
      display.value += Math.PI;
      return -1;
    }
  }
};

export const takeOneDeleteX = (display) => {
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

export const takeModule = (display) => {
  if (
    display.value === "0" ||
    display.value.charAt(display.value.length - 1) === "("
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
export const takePower = (display, mode) => {
  if (
    display.value === "0" ||
    display.value.charAt(display.value.length - 1) === "(" ||
    display.value.charAt(display.value.length - 1) === "+" ||
    display.value.charAt(display.value.length - 1) === "*" ||
    display.value.charAt(display.value.length - 1) === "/" ||
    display.value.charAt(display.value.length - 1) === "-" ||
    display.value.charAt(display.value.length - 1) === "d" ||
    display.value.charAt(display.value.length - 1) === "g" ||
    display.value.charAt(display.value.length - 1) === "p" ||
    display.value.charAt(display.value.length - 1) === "^"
  ) {
    return -1;
  }
  if (display.value.includes("+")) {
    const lastIndexOfPlus = display.value.lastIndexOf("+");
    let result = Math.pow(
      eval(display.value.substr(lastIndexOfPlus + 1, display.value.length)),
      mode
    );
    if (mode === 10) {
      result = Math.pow(
        10,
        eval(display.value.substr(lastIndexOfPlus + 1, display.value.length))
      );
    }
    display.value = display.value.substr(0, lastIndexOfPlus + 1) + result;
    return -1;
  }
  if (display.value.includes("-")) {
    const lastIndexOfMinus = display.value.lastIndexOf("-");
    let result = Math.pow(
      eval(display.value.substr(lastIndexOfMinus + 1, display.value.length)),
      mode
    );
    if (mode === 10) {
      result = Math.pow(
        10,
        eval(display.value.substr(lastIndexOfMinus + 1, display.value.length))
      );
    }
    display.value = display.value.substr(0, lastIndexOfMinus + 1) + result;
    return -1;
  }
  if (display.value.includes("/")) {
    const lastIndexOfDelete = display.value.lastIndexOf("/");
    let result = Math.pow(
      eval(display.value.substr(lastIndexOfDelete + 1, display.value.length)),
      mode
    );
    if (mode === 10) {
      result = Math.pow(
        10,
        eval(display.value.substr(lastIndexOfDelete + 1, display.value.length))
      );
    }
    display.value = display.value.substr(0, lastIndexOfDelete + 1) + result;
    return -1;
  }
  if (display.value.includes("*")) {
    const lastIndexOfMult = display.value.lastIndexOf("*");
    let result = Math.pow(
      eval(display.value.substr(lastIndexOfMult + 1, display.value.length)),
      mode
    );
    display.value = display.value.substr(0, lastIndexOfMult + 1) + result;
    return -1;
  }
  if (mode === 10) {
    display.value = Math.pow(10, display.value);
    return -1;
  }
  display.value = Math.pow(display.value, mode);
};
export const takeE = (display) => {
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
  display.value = Math.exp(display.value);
};

export const takeRND = (display) => {
  if (display.value === "0") {
    display.value = Math.random() * 10;
    return -1;
  }
  const accept = ["+", "-", "/", "*", "(", "d", "p", "^", "g"];
  for (let i = 0; i < accept.length; i++) {
    if (display.value.substr(display.value.length - 1, 1) === accept[i]) {
      display.value += Math.random() * 10;
      return -1;
    }
  }
};
export const takeFactorial = (display, callback) => {
  if (
    display.value === "0" ||
    display.value.charAt(display.value.length - 1) === "(" ||
    display.value.charAt(display.value.length - 1) === "+" ||
    display.value.charAt(display.value.length - 1) === "-" ||
    display.value.charAt(display.value.length - 1) === "/" ||
    display.value.charAt(display.value.length - 1) === "*" ||
    display.value.charAt(display.value.length - 1) === "d" ||
    display.value.charAt(display.value.length - 1) === "g" ||
    display.value.charAt(display.value.length - 1) === "p" ||
    display.value.charAt(display.value.length - 1) === "^"
  ) {
    return -1;
  }
  if (display.value.includes("+")) {
    const lastIndexOfPlus = display.value.lastIndexOf("+");
    const result = callback(
      display.value.substr(lastIndexOfPlus + 1, display.value.length)
    );
    display.value = display.value.substr(0, lastIndexOfPlus + 1) + result;
    return -1;
  }
  if (display.value.includes("/")) {
    const lastIndexOfDelete = display.value.lastIndexOf("/");
    const result = callback(
      display.value.substr(lastIndexOfDelete + 1, display.value.length)
    );
    display.value = display.value.substr(0, lastIndexOfDelete + 1) + result;
    return -1;
  }
  if (display.value.includes("*")) {
    const lastIndexOfMult = display.value.lastIndexOf("*");
    const result = callback(
      display.value.substr(lastIndexOfMult + 1, display.value.length)
    );
    display.value = display.value.substr(0, lastIndexOfMult + 1) + result;
    return -1;
  }
  display.value = callback(display.value);
};

export const getFactorial = (x) => {
  if (x === 0) {
    return 1;
  }
  return x * getFactorial(x - 1);
};
export const takeSqrt = (display) => {
  if (
    display.value === "0" ||
    display.value.charAt(display.value.length - 1) == "(" ||
    display.value.charAt(display.value.length - 1) == "+" ||
    display.value.charAt(display.value.length - 1) == "-" ||
    display.value.charAt(display.value.length - 1) == "*" ||
    display.value.charAt(display.value.length - 1) == "/" ||
    display.value.charAt(display.value.length - 1) == "d" ||
    display.value.charAt(display.value.length - 1) == "p" ||
    display.value.charAt(display.value.length - 1) == "g" ||
    display.value.charAt(display.value.length - 1) == "^"
  ) {
    return -1;
  }
  if (display.value.includes("+")) {
    const lastIndexOfPlus = display.value.lastIndexOf("+");
    const result = Math.sqrt(
      display.value.substr(lastIndexOfPlus + 1, display.value.length)
    );
    display.value = display.value.substr(0, lastIndexOfPlus + 1) + result;
    return -1;
  }
  if (display.value.includes("/")) {
    const lastIndexOfDelete = display.value.lastIndexOf("/");
    const result = Math.sqrt(
      display.value.substr(lastIndexOfDelete + 1, display.value.length)
    );
    display.value = display.value.substr(0, lastIndexOfDelete + 1) + result;
    return -1;
  }
  if (display.value.includes("*")) {
    const lastIndexOfMult = display.value.lastIndexOf("*");
    const result = Math.sqrt(
      display.value.substr(lastIndexOfMult + 1, display.value.length)
    );
    display.value = display.value.substr(0, lastIndexOfMult + 1) + result;
    return -1;
  }
  display.value = Math.sqrt(display.value);
};
