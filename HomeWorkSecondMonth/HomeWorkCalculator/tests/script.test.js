import chai from "chai";
import sinon from "sinon";
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
  takeSqrt
} from "../src/js/script";
describe("getFactorial", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(getFactorial);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof getFactorial, "function");
  });
  it("should return 1", () => {
    chai.assert.equal(getFactorial(0), 1);
  });
  it("should return 6", () => {
    chai.assert.equal(getFactorial(3), 6);
  });
});
describe("clearDisplay", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(clearDisplay);
  });
  it("should change display.value ", () => {
    const testDisplay = { value: 3 };
    clearDisplay(testDisplay);
    chai.assert.equal(testDisplay.value, 0);
  });
  it("should return 1", () => {
    chai.assert.equal(getFactorial(0), 1);
  });
  it("should return 6", () => {
    chai.assert.equal(getFactorial(3), 6);
  });
});
describe("useBackspaceOnDisplay", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(useBackspaceOnDisplay);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof useBackspaceOnDisplay, "function");
  });
  it("should set display.value 0", () => {
    const testDisp = { value: "1" };
    useBackspaceOnDisplay(testDisp);
    chai.assert.equal(testDisp.value, 0);
  });
  it("should set display.value === display.value -1 last symbol", () => {
    const testDisp1 = { value: "12" };
    useBackspaceOnDisplay(testDisp1);
    chai.assert.equal(testDisp1.value, "1");
  });
});
describe("sendToDisplay", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(sendToDisplay);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof sendToDisplay, "function");
  });
  it("should set new event.target.textContent", () => {
    const testEvent = { target: { textContent: "x^y" } };
    const testDisplay = { value: "13" };
    sendToDisplay(testEvent, testDisplay);
    chai.assert.equal(testEvent.target.textContent, "^");
  });
  it("should return -1 if value last === Mod", () => {
    const testEvent = { target: { textContent: "Mod" } };
    const testDisplay = { value: "1+" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === Mod", () => {
    const testEvent = { target: { textContent: "Mod" } };
    const testDisplay = { value: "1-" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === Mod", () => {
    const testEvent = { target: { textContent: "Mod" } };
    const testDisplay = { value: "1/" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === Mod", () => {
    const testEvent = { target: { textContent: "Mod" } };
    const testDisplay = { value: "1*" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === exp", () => {
    const testEvent = { target: { textContent: "exp" } };
    const testDisplay = { value: "1+" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === exp", () => {
    const testEvent = { target: { textContent: "exp" } };
    const testDisplay = { value: "1-" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === exp", () => {
    const testEvent = { target: { textContent: "exp" } };
    const testDisplay = { value: "1/" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === exp", () => {
    const testEvent = { target: { textContent: "exp" } };
    const testDisplay = { value: "1*" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === ^", () => {
    const testEvent = { target: { textContent: "^" } };
    const testDisplay = { value: "1+" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === ^", () => {
    const testEvent = { target: { textContent: "^" } };
    const testDisplay = { value: "1-" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === ^", () => {
    const testEvent = { target: { textContent: "^" } };
    const testDisplay = { value: "1/" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === ^", () => {
    const testEvent = { target: { textContent: "^" } };
    const testDisplay = { value: "1*" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should return -1 if value last === 0 and event.target.textContent === (", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "390" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "390*(");
  });
  it("should return -1 if value last === 1 and event.target.textContent === (", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "391" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "391*(");
  });
  it("should return -1 if value last === 2 and event.target.textContent === (", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "392" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "392*(");
  });
  it("should return -1 if value last === 3 and event.target.textContent === (", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "393" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "393*(");
  });
  it("should return -1 if value last === 4 and event.target.textContent === (", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "394" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "394*(");
  });
  it("should return -1 if value last === 5 and event.target.textContent === (", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "395" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "395*(");
  });
  it("should return -1 if value last === 6 and event.target.textContent === (", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "396" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "396*(");
  });
  it("should return -1 if value last === 7 and event.target.textContent === (", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "397" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "397*(");
  });
  it("should return -1 if value last === 8 and event.target.textContent === (", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "398" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "398*(");
  });
  it("should return -1 if value last === 9 and event.target.textContent === (", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "399" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "399*(");
  });
  it("should return -1 if  event.target.textContent === ) and display has Mod ", () => {
    const testEvent = { target: { textContent: ")" } };
    const testDisplay = { value: "(24Mod5" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "4");
  });
  it("should return -1 if  event.target.textContent === ) and display has exp ", () => {
    const testEvent = { target: { textContent: ")" } };
    const testDisplay = { value: "(24exp5" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "2.40000e+1");
  });
  it("should return -1 if  event.target.textContent === ) and display has ^ ", () => {
    const testEvent = { target: { textContent: ")" } };
    const testDisplay = { value: "(24^5" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "7962624");
  });
  it("should return -1 if  event.target.textContent === ) and display has log ", () => {
    const testEvent = { target: { textContent: ")" } };
    const testDisplay = { value: "(24log5" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "16.775280104064453");
  });
  it("should return -1 if  event.target.textContent === ) and display don't have log, exp, Mod and ^ ", () => {
    const testEvent = { target: { textContent: ")" } };
    const testDisplay = { value: "(24+3" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "27");
  });
  it("should return -1 if  event.target.textContent === ) and display don't have log, exp, Mod and ^ ", () => {
    const testEvent = { target: { textContent: ")" } };
    const testDisplay = { value: "5+(24+3" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "5+27");
  });
  it("should return -1 if  event.target.textContent === (  and display last symbol === +", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "24+" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "24+(");
  });
  it("should return -1 if  event.target.textContent === (  and display last symbol === -", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "24-" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "24-(");
  });
  it("should return -1 if  event.target.textContent === (  and display last symbol === *", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "24*" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "24*(");
  });
  it("should return -1 if  event.target.textContent === (  and display last symbol === /", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "24/" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "24/(");
  });
  it("should return -1 if  event.target.textContent === .  and display value === 0", () => {
    const testEvent = { target: { textContent: "." } };
    const testDisplay = { value: "0" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "0.");
  });
  it("should return -1 if  event.target.textContent === (  and display value === 0", () => {
    const testEvent = { target: { textContent: "(" } };
    const testDisplay = { value: "0" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "(");
  });
  it("should return -1 if  event.target.textContent === /  and display value === 0", () => {
    const testEvent = { target: { textContent: "/" } };
    const testDisplay = { value: "0" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "0");
  });
  it("should return -1 if  event.target.textContent === *  and display value === 0", () => {
    const testEvent = { target: { textContent: "*" } };
    const testDisplay = { value: "0" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "0");
  });
  it("should return -1 if  event.target.textContent === +  and display value === 0", () => {
    const testEvent = { target: { textContent: "+" } };
    const testDisplay = { value: "0" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "0");
  });
  it("should return -1 if  event.target.textContent === -  and display value === 0", () => {
    const testEvent = { target: { textContent: "-" } };
    const testDisplay = { value: "0" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "0");
  });
  it("should return -1 if  event.target.textContent === 1  and display value === 0", () => {
    const testEvent = { target: { textContent: "1" } };
    const testDisplay = { value: "0" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
    chai.assert.equal(testDisplay.value, "1");
  });
  it("should return -1 if  event.target.textContent === /  and display value === 0", () => {
    const testEvent = { target: { textContent: "/" } };
    const testDisplay = { value: "1/" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), -1);
  });
  it("should concat display value === 12 and event.target.textContent === 2  in display.value", () => {
    const testEvent = { target: { textContent: "2" } };
    const testDisplay = { value: "12" };
    chai.assert.equal(sendToDisplay(testEvent, testDisplay), undefined);
    chai.assert.equal(testDisplay.value, "122");
  });
});
describe("printResult", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(printResult);
  });
  it("should to be function", () => {
    chai.assert.equal(typeof printResult, "function");
  });
  it("should last symbol === / ", () => {
    const display = { value: "13/" };
    chai.assert.equal(printResult(display), -1);
  });
  it("should last symbol === * ", () => {
    const display = { value: "13*" };
    chai.assert.equal(printResult(display), -1);
  });
  it("should last symbol === - ", () => {
    const display = { value: "13-" };
    chai.assert.equal(printResult(display), -1);
  });
  it("should last symbol === + ", () => {
    const display = { value: "13+" };
    chai.assert.equal(printResult(display), -1);
  });
  it("should last symbol === log ", () => {
    const display = { value: "13log" };
    chai.assert.equal(printResult(display), -1);
  });
  it("should last symbol === exp ", () => {
    const display = { value: "13exp" };
    chai.assert.equal(printResult(display), -1);
  });
  it("should last symbol === Mod ", () => {
    const display = { value: "13Mod" };
    chai.assert.equal(printResult(display), -1);
  });
  it("should last symbol === ^ ", () => {
    const display = { value: "13^" };
    chai.assert.equal(printResult(display), -1);
  });
  it("should contain 'log' ", () => {
    const display = { value: "13log2" };
    chai.assert.equal(printResult(display), -2);
    chai.assert.equal(display.value, "3.91339");
  });
  it("should contain 'log' ", () => {
    const display = { value: "1log1" };
    chai.assert.equal(printResult(display), -1);
    chai.assert.equal(display.value, "0");
  });
  it("should contain 'Mod' ", () => {
    const display = { value: "7458965224410Mod88557741166655566695" };
    chai.assert.equal(printResult(display), -2);
    chai.assert.equal(display.value, "7458965224410");
  });
  it("should contain 'Mod' ", () => {
    const display = { value: "1Mod1" };
    chai.assert.equal(printResult(display), -1);
    chai.assert.equal(display.value, "0");
  });
  it("should contain '^' ", () => {
    const display = { value: "25^25" };
    chai.assert.equal(printResult(display), -2);
    chai.assert.equal(display.value, "8.881784197001253e+34");
  });
  it("should contain '^' ", () => {
    const display = { value: "1^1" };
    chai.assert.equal(printResult(display), -1);
    chai.assert.equal(display.value, "1");
  });
  it("should contain 'exp' ", () => {
    const display = { value: "25exp25" };
    chai.assert.equal(printResult(display), -2);
    chai.assert.equal(display.value, "2.5000000000000000000000000e+1");
  });
  it("should contain 'exp' ", () => {
    const display = { value: "1exp1" };
    chai.assert.equal(printResult(display), -1);
    chai.assert.equal(display.value, "1.0e+0");
  });
  it("should very big numbers ", () => {
    const display = { value: "2.33242342343+3.4314314324" };
    chai.assert.equal(printResult(display), -2);
    chai.assert.equal(display.value, "5.76385");
  });
  it("should small numbers ", () => {
    const display = { value: "2+2" };
    chai.assert.equal(printResult(display), undefined);
    chai.assert.equal(display.value, "4");
  });
});
describe("showIngeneerCalc", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(showIngeneerCalc);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof showIngeneerCalc, "function");
  });
  it("should call all methods", () => {
    const eventTargetAddMock = sinon.fake();
    const contentAddMock = sinon.fake();
    const contentRemoveMock = sinon.fake();
    const displayWrapperAddMock = sinon.fake();
    const zeroAddMock = sinon.fake();
    const hideOneRemoveMock = sinon.fake();
    const hideTwoRemoveMock = sinon.fake();
    const content = {
      classList: { add: contentAddMock, remove: contentRemoveMock },
    };
    const event = { target: { classList: { add: eventTargetAddMock } } };
    const displayWrapper = { classList: { add: displayWrapperAddMock } };
    const hided = [
      { classList: { remove: hideOneRemoveMock } },
      { classList: { remove: hideTwoRemoveMock } },
    ];
    const zero = { classList: { add: zeroAddMock } };
    const clock = sinon.useFakeTimers();
    showIngeneerCalc(event, content, displayWrapper, hided, zero);
    chai.assert(contentAddMock.calledWith("vibro"));
    chai.assert(contentAddMock.calledWith("disappear"));
    clock.tick(3000);
    chai.assert(contentRemoveMock.calledWith("vibro"));
    chai.assert(contentRemoveMock.calledWith("disappear"));
    chai.assert(displayWrapperAddMock.calledWith('tablo__big'));
    chai.assert(contentAddMock.calledWith('content__big'));
    chai.assert(zeroAddMock.calledWith("zero__big"));
    chai.assert(eventTargetAddMock.calledWith("hide"));
    chai.assert(hideOneRemoveMock.calledWith("hide"));
    chai.assert(hideTwoRemoveMock.calledWith("hide"));
  });
});
describe("showStandartCalc", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(showStandartCalc);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof showStandartCalc, "function");
  });
  it("should call all methods", () => {
    const eventTargetAddMock = sinon.fake();
    const contentAddMock = sinon.fake();
    const contentRemoveMock = sinon.fake();
    const displayWrapperRemoveMock = sinon.fake();
    const zeroRemoveMock = sinon.fake();
    const hideOneAddMock = sinon.fake();
    const hideTwoAddMock = sinon.fake();
    const ingeneerRemoveMock = sinon.fake();
    const content = {
      classList: { add: contentAddMock, remove: contentRemoveMock },
    };
    const event = { target: { classList: { add: eventTargetAddMock } } };
    const displayWrapper = { classList: { remove: displayWrapperRemoveMock } };
    const hided = [
      { classList: { add: hideOneAddMock } },
      { classList: { add: hideTwoAddMock } },
    ];
    const zero = { classList: { remove: zeroRemoveMock } };
    const ingeneer = { classList: { remove: ingeneerRemoveMock } };
    const clock = sinon.useFakeTimers();
    showStandartCalc(event, content, displayWrapper, hided, zero, ingeneer);
    chai.assert(contentAddMock.calledWith("vibro"));
    chai.assert(contentAddMock.calledWith("disappear"));
    clock.tick(3000);
    chai.assert(contentRemoveMock.calledWith("vibro"));
    chai.assert(contentRemoveMock.calledWith("disappear"));
    chai.assert(zeroRemoveMock.calledWith("zero__big"));
    chai.assert(displayWrapperRemoveMock.calledWith("tablo__big"));
    chai.assert(contentRemoveMock.calledWith("content__big"));
    chai.assert(eventTargetAddMock.calledWith("hide"));
    chai.assert(hideOneAddMock.calledWith("hide"));
    chai.assert(hideTwoAddMock.calledWith("hide"));
    chai.assert(ingeneerRemoveMock.calledWith("hide"));
  });
});
describe("takeLn", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(takeLn);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof takeLn, "function");
  });
  it("should return -1 if display.value === '0'", () => {
    const display = { value: "0" };
    chai.assert.equal(takeLn(display), -1);
  });
  it("should return -1 if last symbol === '/' ", () => {
    const display = { value: "12/" };
    chai.assert.equal(takeLn(display), -1);
  });
  it("should return -1 if last symbol === '+' ", () => {
    const display = { value: "12+" };
    chai.assert.equal(takeLn(display), -1);
  });
  it("should return -1 if last symbol === '-' ", () => {
    const display = { value: "12-" };
    chai.assert.equal(takeLn(display), -1);
  });
  it("should return -1 if last symbol === '*' ", () => {
    const display = { value: "12*" };
    chai.assert.equal(takeLn(display), -1);
  });
  it("should return -1 if last symbol === '(' ", () => {
    const display = { value: "12(" };
    chai.assert.equal(takeLn(display), -1);
  });
  it("should return -1 if last symbol === 'Mod' ", () => {
    const display = { value: "12Mod" };
    chai.assert.equal(takeLn(display), -1);
  });
  it("should return -1 if last symbol === 'exp' ", () => {
    const display = { value: "12exp" };
    chai.assert.equal(takeLn(display), -1);
  });
  it("should return -1 if last symbol === 'log' ", () => {
    const display = { value: "12log" };
    chai.assert.equal(takeLn(display), -1);
  });
  it("should return -1 if last symbol === '^' ", () => {
    const display = { value: "12^" };
    chai.assert.equal(takeLn(display), -1);
  });
  it("should return -1, display.value contains('+') and display value += ln last element ", () => {
    const display = { value: "12+3" };
    chai.assert.equal(takeLn(display), -1);
    chai.assert.equal(display.value, "12+1.0986122886681096");
  });
  it("should return -1, display.value contains('/') and display value += ln last element ", () => {
    const display = { value: "12/3" };
    chai.assert.equal(takeLn(display), -1);
    chai.assert.equal(display.value, "12/1.0986122886681096");
  });
  it("should return -1, display.value contains('-') and display value += ln last element ", () => {
    const display = { value: "12-3" };
    chai.assert.equal(takeLn(display), -1);
    chai.assert.equal(display.value, "12-1.0986122886681096");
  });
  it("should return -1, display.value contains('*') and display value += ln last element ", () => {
    const display = { value: "12*3" };
    chai.assert.equal(takeLn(display), -1);
    chai.assert.equal(display.value, "12*1.0986122886681096");
  });
  it("should return undefined, display value === ln(display.value) ", () => {
    const display = { value: "3" };
    chai.assert.equal(takeLn(display), undefined);
    chai.assert.equal(display.value, "1.0986122886681096");
  });
});
describe("reversePositivityOrNegativity", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(reversePositivityOrNegativity);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof reversePositivityOrNegativity, "function");
  });
  it("should return -1 if display.value === '0'", () => {
    const display = { value: "0" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
  });
  it("should return -1 if last symbol === '/' ", () => {
    const display = { value: "12/" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
  });
  it("should return -1 if last symbol === '+' ", () => {
    const display = { value: "12+" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
  });
  it("should return -1 if last symbol === '-' ", () => {
    const display = { value: "12-" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
  });
  it("should return -1 if last symbol === '*' ", () => {
    const display = { value: "12*" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
  });
  it("should return -1 if last symbol === '(' ", () => {
    const display = { value: "12(" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
  });
  it("should return -1 if last symbol === 'Mod' ", () => {
    const display = { value: "12Mod" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
  });
  it("should return -1 if last symbol === 'exp' ", () => {
    const display = { value: "12exp" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
  });
  it("should return -1 if last symbol === 'log' ", () => {
    const display = { value: "12log" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
  });
  it("should return -1 if last symbol === '^' ", () => {
    const display = { value: "12^" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
  });
  it("should return -1, display.value contains('+') and display value += - last element ", () => {
    const display = { value: "12+3" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
    chai.assert.equal(display.value, "12+-3");
  });
  it("should return -1, display.value contains('/') and display value += - last element ", () => {
    const display = { value: "12/3" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
    chai.assert.equal(display.value, "12/-3");
  });
  it("should return -1, display.value contains('*') and display value += - last element ", () => {
    const display = { value: "12*3" };
    chai.assert.equal(reversePositivityOrNegativity(display), -1);
    chai.assert.equal(display.value, "12*-3");
  });
  it("should return undefined, display value === ln(display.value) ", () => {
    const display = { value: "3" };
    chai.assert.equal(reversePositivityOrNegativity(display), undefined);
    chai.assert.equal(display.value, "-3");
  });
});
describe("takePI", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(takePI);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof takePI, "function");
  });
  it("should return -1 , and display.value = MAth.PI if display.value at start === 0", () => {
    const display = { value: "0" };
    chai.assert.equal(takePI(display), -1);
    chai.assert.equal(display.value, "3.141592653589793");
  });
  it("should return -1 and display.value contains('+') and display value += Math PI", () => {
    const display = { value: "3+" };
    chai.assert.equal(takePI(display), -1);
    chai.assert.equal(display.value, "3+3.141592653589793");
  });
  it("should return -1 and display.value contains('-') and display value += Math PI", () => {
    const display = { value: "3-" };
    chai.assert.equal(takePI(display), -1);
    chai.assert.equal(display.value, "3-3.141592653589793");
  });
  it("should return -1 and display.value contains('/') and display value += Math PI", () => {
    const display = { value: "3/" };
    chai.assert.equal(takePI(display), -1);
    chai.assert.equal(display.value, "3/3.141592653589793");
  });
  it("should return -1 and display.value contains('*') and display value += Math PI", () => {
    const display = { value: "3*" };
    chai.assert.equal(takePI(display), -1);
    chai.assert.equal(display.value, "3*3.141592653589793");
  });
  it("should return -1 and display.value contains('*Mod) and display value += Math PI", () => {
    const display = { value: "3Mod" };
    chai.assert.equal(takePI(display), -1);
    chai.assert.equal(display.value, "3Mod3.141592653589793");
  });
  it("should return -1 and display.value contains('*exp) and display value += Math PI", () => {
    const display = { value: "3exp" };
    chai.assert.equal(takePI(display), -1);
    chai.assert.equal(display.value, "3exp3.141592653589793");
  });
  it("should return -1 and display.value contains('*log) and display value += Math PI", () => {
    const display = { value: "3log" };
    chai.assert.equal(takePI(display), -1);
    chai.assert.equal(display.value, "3log3.141592653589793");
  });
  it("should return -1 and display.value contains('*^) and display value += Math PI", () => {
    const display = { value: "3^" };
    chai.assert.equal(takePI(display), -1);
    chai.assert.equal(display.value, "3^3.141592653589793");
  });
});
describe("takeOneDeleteX", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(takeOneDeleteX);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof takeOneDeleteX, "function");
  });
  it("should return -1 ,if display.value at start === 0", () => {
    const display = { value: "0" };
    chai.assert.equal(takeOneDeleteX(display), -1);
  });
  it("should return -1 and display.value contains('+') and display value += 1/value", () => {
    const display = { value: "3+3" };
    chai.assert.equal(takeOneDeleteX(display), -1);
    chai.assert.equal(display.value, "3+0.3333333333333333");
  });
  it("should return -1 and display.value contains('-') and display value += 1/value", () => {
    const display = { value: "3-3" };
    chai.assert.equal(takeOneDeleteX(display), -1);
    chai.assert.equal(display.value, "3-0.3333333333333333");
  });
  it("should return -1 and display.value contains('/') and display value += 1/value", () => {
    const display = { value: "3/3" };
    chai.assert.equal(takeOneDeleteX(display), -1);
    chai.assert.equal(display.value, "3/0.3333333333333333");
  });
  it("should return -1 and display.value contains('*') and display value += 1/value", () => {
    const display = { value: "3*3" };
    chai.assert.equal(takeOneDeleteX(display), -1);
    chai.assert.equal(display.value, "3*0.3333333333333333");
  });
  it("should return -1 and display.value contains('(') and display value += 1/value", () => {
    const display = { value: "(3" };
    chai.assert.equal(takeOneDeleteX(display), -1);
    chai.assert.equal(display.value, "(0.3333333333333333");
  });
  it("should return undefined and display value = 1/value", () => {
    const display = { value: "3" };
    chai.assert.equal(takeOneDeleteX(display), undefined);
    chai.assert.equal(display.value, "0.3333333333333333");
  });
});
describe("takeModule", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(takeModule);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof takeModule, "function");
  });
  it("should return -1 ,if display.value at start === 0", () => {
    const display = { value: "0" };
    chai.assert.equal(takeModule(display), -1);
  });
  it("should return -1 ,if display.value.charAt(display.value.length - 1) === '(' ", () => {
    const display = { value: "3(" };
    chai.assert.equal(takeModule(display), -1);
  });
  it("should return -1 and display.value contains('+') and display value += 1/value", () => {
    const display = { value: "3+-3" };
    chai.assert.equal(takeModule(display), -1);
    chai.assert.equal(display.value, "3+3");
  });
  it("should return -1 and display.value contains('/') and display value += 1/value", () => {
    const display = { value: "3/-3" };
    chai.assert.equal(takeModule(display), -1);
    chai.assert.equal(display.value, "3/3");
  });
  it("should return -1 and display.value contains('*') and display value += 1/value", () => {
    const display = { value: "3*-3" };
    chai.assert.equal(takeModule(display), -1);
    chai.assert.equal(display.value, "3*3");
  });
  it("should return undefined and display value = 1/value", () => {
    const display = { value: "-3" };
    chai.assert.equal(takeModule(display), undefined);
    chai.assert.equal(display.value, "3");
  });
});
describe("takePower", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(takePower);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof takePower, "function");
  });
  it("should return -1 ,if display.value at start === 0", () => {
    const display = { value: "0" };
    chai.assert.equal(takePower(display), -1);
  });
  it("should return -1 ,if display.value last symbol === '(' ", () => {
    const display = { value: "3(" };
    chai.assert.equal(takePower(display), -1);
  });
  it("should return -1 ,if display.value last symbol === '+' ", () => {
    const display = { value: "3+" };
    chai.assert.equal(takePower(display), -1);
  });
  it("should return -1 ,if display.value last symbol === '*' ", () => {
    const display = { value: "3*" };
    chai.assert.equal(takePower(display), -1);
  });
  it("should return -1 ,if display.value last symbol === '/' ", () => {
    const display = { value: "3/" };
    chai.assert.equal(takePower(display), -1);
  });
  it("should return -1 ,if display.value last symbol === '-' ", () => {
    const display = { value: "3-" };
    chai.assert.equal(takePower(display), -1);
  });
  it("should return -1 ,if display.value last symbol === 'Mod' ", () => {
    const display = { value: "3Mod" };
    chai.assert.equal(takePower(display), -1);
  });
  it("should return -1 ,if display.value last symbol === 'exp' ", () => {
    const display = { value: "3exp" };
    chai.assert.equal(takePower(display), -1);
  });
  it("should return -1 ,if display.value last symbol === 'log' ", () => {
    const display = { value: "3log" };
    chai.assert.equal(takePower(display), -1);
  });
  it("should return -1 ,if display.value last symbol === 'exp' ", () => {
    const display = { value: "3exp" };
    chai.assert.equal(takePower(display), -1);
  });
  it("should return -1 ,if display.value last symbol === '^' ", () => {
    const display = { value: "3^" };
    chai.assert.equal(takePower(display), -1);
  });
  it("should return -1 ,if display.value.includes('-') and display.value last symbol === 'number' and display.value += lastSymbol**mode", () => {
    const display = { value: "3+3" };
    const mode = 10;
    chai.assert.equal(takePower(display, mode), -1);
    chai.assert.equal(display.value, "3+1000");
  });
  it("should return -1 ,if display.value.includes('-') and display.value last symbol === 'number' and display.value += lastSymbol**mode", () => {
    const display = { value: "3-3" };
    const mode = 10;
    chai.assert.equal(takePower(display, mode), -1);
    chai.assert.equal(display.value, "3-1000");
  });
  it("should return -1 ,if display.value.includes('*') and display.value last symbol === 'number' and display.value += lastSymbol**mode", () => {
    const display = { value: "3*3" };
    const mode = 10;
    chai.assert.equal(takePower(display, mode), -1);
    chai.assert.equal(display.value, "3*59049");
  });
  it("should return -1 ,if display.value.includes('/') and display.value last symbol === 'number' and display.value += lastSymbol**mode", () => {
    const display = { value: "3/3" };
    const mode = 10;
    chai.assert.equal(takePower(display, mode), -1);
    chai.assert.equal(display.value, "3/1000");
  });
  it("should return -1 ,if mode === 10 , display.value === 10**display.value", () => {
    const display = { value: "3" };
    const mode = 10;
    chai.assert.equal(takePower(display, mode), -1);
    chai.assert.equal(display.value, "1000");
  });
  it("should return undefined ,if mode === 2 , display.value === display.value**mode", () => {
    const display = { value: "3" };
    const mode = 2;
    chai.assert.equal(takePower(display, mode), undefined);
    chai.assert.equal(display.value, "9");
  });
  it("should return undefined ,if mode === 3 , display.value === display.value**mode", () => {
    const display = { value: "3" };
    const mode = 3;
    chai.assert.equal(takePower(display, mode), undefined);
    chai.assert.equal(display.value, "27");
  });
});
describe("takeE", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(takeE);
  });
  it("should to be defined", () => {
    chai.assert.equal(typeof takeE, "function");
  });
  it("should return -1 ,if display.value at start === 0", () => {
    const display = { value: "0" };
    chai.assert.equal(takeE(display), -1);
  });
  it("should return -1 ,if display.value last symbol === '(' ", () => {
    const display = { value: "3(" };
    chai.assert.equal(takeE(display), -1);
  });
  it("should return -1 ,if display.value last symbol === '+' ", () => {
    const display = { value: "3+" };
    chai.assert.equal(takeE(display), -1);
  });
  it("should return -1 ,if display.value last symbol === '*' ", () => {
    const display = { value: "3*" };
    chai.assert.equal(takeE(display), -1);
  });
  it("should return -1 ,if display.value last symbol === '/' ", () => {
    const display = { value: "3/" };
    chai.assert.equal(takeE(display), -1);
  });
  it("should return -1 ,if display.value last symbol === '-' ", () => {
    const display = { value: "3-" };
    chai.assert.equal(takeE(display), -1);
  });
  it("should return -1 ,if display.value.includes('-') and display.value last symbol === 'number' and display.value += Math.exp(number after symbol)", () => {
    const display = { value: "3+3" };
    chai.assert.equal(takeE(display), -1);
    chai.assert.equal(display.value, "3+20.085536923187668");
  });
  it("should return -1 ,if display.value.includes('-') and display.value last symbol === 'number' and display.value += Math.exp(number after symbol)", () => {
    const display = { value: "3-3" };
    chai.assert.equal(takeE(display), -1);
    chai.assert.equal(display.value, "3-20.085536923187668");
  });
  it("should return -1 ,if display.value.includes('*') and display.value last symbol === 'number' and display.value += Math.exp(number after symbol)", () => {
    const display = { value: "3*3" };

    chai.assert.equal(takeE(display), -1);
    chai.assert.equal(display.value, "3*20.085536923187668");
  });
  it("should return -1 ,if display.value.includes('/') and display.value last symbol === 'number' and display.value += Math.exp(number after symbol)", () => {
    const display = { value: "3/3" };
    chai.assert.equal(takeE(display), -1);
    chai.assert.equal(display.value, "3/20.085536923187668");
  });
  it("should return -1 ,if display.value.includes('/') and display.value last symbol === 'number' and display.value += Math.exp(number after symbol)", () => {
    const display = { value: "3/3" };
    chai.assert.equal(takeE(display), -1);
    chai.assert.equal(display.value, "3/20.085536923187668");
  });
  it("should return undefined , display.value = Math.exp(display.value)", () => {
    const display = { value: "3" };
    chai.assert.equal(takeE(display), undefined);
    chai.assert.equal(display.value, "20.085536923187668");
  });
});
describe("takeRND", () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;
  it("should to be defined", () => {
    chai.assert.isDefined(takeRND);
  });
  it("should to be function", () => {
    chai.assert.equal(typeof takeRND, "function");
  });
  it("should return -1 if display.value === '0' && display.value === rndNumber ", () => {
    const display = { value: "0" };
    chai.assert.equal(takeRND(display), -1);
    chai.assert.equal(display.value, "5");
  });
  it("should return -1 if display.value last symbol === + ", () => {
    const display = { value: "5+" };
    chai.assert.equal(takeRND(display), -1);
    chai.assert.equal(display.value, "5+5");
  });
  it("should return -1 if display.value last symbol === - ", () => {
    const display = { value: "5-" };
    chai.assert.equal(takeRND(display), -1);
    chai.assert.equal(display.value, "5-5");
  });
  it("should return -1 if display.value last symbol === * ", () => {
    const display = { value: "5*" };
    chai.assert.equal(takeRND(display), -1);
    chai.assert.equal(display.value, "5*5");
  });
  it("should return -1 if display.value last symbol === / ", () => {
    const display = { value: "5/" };
    chai.assert.equal(takeRND(display), -1);
    chai.assert.equal(display.value, "5/5");
  });

  it("should return -1 if display.value last symbol === ( ", () => {
    const display = { value: "5*(" };
    chai.assert.equal(takeRND(display), -1);
    chai.assert.equal(display.value, "5*(5");
  });
  it("should return -1 if display.value last symbol === Mod ", () => {
    const display = { value: "5Mod" };
    chai.assert.equal(takeRND(display), -1);
    chai.assert.equal(display.value, "5Mod5");
  });
  it("should return -1 if display.value last symbol === exp ", () => {
    const display = { value: "5exp" };
    chai.assert.equal(takeRND(display), -1);
    chai.assert.equal(display.value, "5exp5");
  });
  it("should return -1 if display.value last symbol === log ", () => {
    const display = { value: "5log" };
    chai.assert.equal(takeRND(display), -1);
    chai.assert.equal(display.value, "5log5");
  });
  it("should return -1 if display.value last symbol === ^ ", () => {
    const display = { value: "5^" };
    chai.assert.equal(takeRND(display), -1);
    chai.assert.equal(display.value, "5^5");
  });
});
describe("takeFactorial", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(takeFactorial);
  });
  it("should be a function", () => {
    chai.assert.equal(typeof takeFactorial, "function");
  });
  it("should return -1 if display.value === 0", () => {
    const display = {value:'0'}
    chai.assert.equal(takeFactorial(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '(' ", () => {
    const display = {value:'3('}
    chai.assert.equal(takeFactorial(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '+' ", () => {
    const display = {value:'3+'}
    chai.assert.equal(takeFactorial(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '-' ", () => {
    const display = {value:'3-'}
    chai.assert.equal(takeFactorial(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '/' ", () => {
    const display = {value:'3/'}
    chai.assert.equal(takeFactorial(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '*' ", () => {
    const display = {value:'3*'}
    chai.assert.equal(takeFactorial(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === 'Mod' ", () => {
    const display = {value:'3Mod'}
    chai.assert.equal(takeFactorial(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === 'log' ", () => {
    const display = {value:'3log'}
    chai.assert.equal(takeFactorial(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === 'exp' ", () => {
    const display = {value:'3exp'}
    chai.assert.equal(takeFactorial(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '^' ", () => {
    const display = {value:'3^'}
    chai.assert.equal(takeFactorial(display), -1);
  });
  it("should return -1 if display.value.includes('+') ", () => {
    const display = {value:'3+3'}
    chai.assert.equal(takeFactorial(display,getFactorial), -1);
    chai.assert.equal(display.value, '3+6');
  });
  it("should return -1 if display.value.includes('/') ", () => {
    const display = {value:'3/3'}
    chai.assert.equal(takeFactorial(display,getFactorial), -1);
    chai.assert.equal(display.value, '3/6');
  });
  it("should return -1 if display.value.includes('*') ", () => {
    const display = {value:'3*3'}
    chai.assert.equal(takeFactorial(display,getFactorial), -1);
    chai.assert.equal(display.value, '3*6');
  });
  it("should return undefined and display.value === factorial of display.value ", () => {
    const display = {value:'4'}
    chai.assert.equal(takeFactorial(display,getFactorial), undefined);
    chai.assert.equal(display.value, '24');
  });
});
describe("takeSqrt", () => {
  it("should to be defined", () => {
    chai.assert.isDefined(takeSqrt);
  });
  it("should be a function", () => {
    chai.assert.equal(typeof takeSqrt, "function");
  });
  it("should return -1 if display.value === 0", () => {
    const display = {value:'0'}
    chai.assert.equal(takeSqrt(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '(' ", () => {
    const display = {value:'3('}
    chai.assert.equal(takeSqrt(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '+' ", () => {
    const display = {value:'3+'}
    chai.assert.equal(takeSqrt(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '-' ", () => {
    const display = {value:'3-'}
    chai.assert.equal(takeSqrt(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '/' ", () => {
    const display = {value:'3/'}
    chai.assert.equal(takeSqrt(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '*' ", () => {
    const display = {value:'3*'}
    chai.assert.equal(takeSqrt(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === 'Mod' ", () => {
    const display = {value:'3Mod'}
    chai.assert.equal(takeSqrt(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === 'log' ", () => {
    const display = {value:'3log'}
    chai.assert.equal(takeSqrt(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === 'exp' ", () => {
    const display = {value:'3exp'}
    chai.assert.equal(takeSqrt(display), -1);
  });
  it("should return -1 if display.value.charAt(display.value.length - 1) === '^' ", () => {
    const display = {value:'3^'}
    chai.assert.equal(takeSqrt(display), -1);
  });
  it("should return -1 if display.value.includes('+') ", () => {
    const display = {value:'3+4'}
    chai.assert.equal(takeSqrt(display), -1);
    chai.assert.equal(display.value, '3+2');
  });
  it("should return -1 if display.value.includes('/') ", () => {
    const display = {value:'3/4'}
    chai.assert.equal(takeSqrt(display), -1);
    chai.assert.equal(display.value, '3/2');
  });
  it("should return -1 if display.value.includes('*') ", () => {
    const display = {value:'3*4'}
    chai.assert.equal(takeSqrt(display), -1);
    chai.assert.equal(display.value, '3*2');
  });
  it("should return undefined and display.value === sqrt of display.value ", () => {
    const display = {value:'4'}
    chai.assert.equal(takeSqrt(display), undefined);
    chai.assert.equal(display.value, '2');
  });
});