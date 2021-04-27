var {
  getProductOrSumm,
  getPointPosition,
  calculateSummOnlyPositive,
  calculateMaxPlus3,
  getGrade,
  calculateSummofEvenNumbersFrom1to99,
  isPrimeNumber,
  getSqrt,
  getBinarySqrt,
  getFactorial,
  calculateSummOfDigits,
  reverseNumber,
  getMinEl,
  getMaxEl,
  getMinElIndex,
  getMaxElIndex,
  calculateSummOfOddIndex,
  reverseArray,
  getOddNumber,
  changeArrayParts,
  insertSort,
  bubbleSort,
  selectSort,
  getStringDayNumber,
  getDistance,
  convertToWords,
  convertWordToNumber,
} = require("./SkripnikHomework1");

describe("getProductOrSumm", function () {
  it("should be defined ", function () {
    expect(getProductOrSumm).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getProductOrSumm).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getProductOrSumm()).toBe(false);
  });
  it("arguments should be not be a numbers", function () {
    expect(getProductOrSumm("4", "4")).toBe(false);
  });
  it("argument a is even", function () {
    expect(getProductOrSumm(4, 4)).toBe(16);
  });
  it("argument a is odd", function () {
    expect(getProductOrSumm(3, 4)).toBe(7);
  });
});
describe("calculateSummOnlyPositive", function () {
  it("should be defined ", function () {
    expect(getPointPosition).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getPointPosition).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getPointPosition()).toBe(false);
  });
  it("x > 0 && y > 0", function () {
    expect(getPointPosition(1, 1)).toBe("point in I quarter");
  });
  it("x < 0 && y > 0", function () {
    expect(getPointPosition(-1, 1)).toBe("point in II quarter");
  });
  it("x < 0 && y < 0", function () {
    expect(getPointPosition(-1, -1)).toBe("point in III quarter");
  });
  it("x > 0 && y < 0", function () {
    expect(getPointPosition(1, -1)).toBe("point in IV quarter");
  });
  it("x === 0 && y === 0", function () {
    expect(getPointPosition(0, 0)).toBe("point at origin");
  });
  it("x === 0 && y !== 0", function () {
    expect(getPointPosition(0, 1)).toBe("point on the x-axis");
  });
  it("x !== 0 && y === 0", function () {
    expect(getPointPosition(1, 0)).toBe("point on the y-axis");
  });
});
describe("calculateSummOnlyPositive", function () {
  it("should be defined ", function () {
    expect(calculateSummOnlyPositive).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof calculateSummOnlyPositive).toBe("function");
  });
  it("should be without arguments", function () {
    expect(calculateSummOnlyPositive()).toBe(false);
  });
  it("should be without arguments", function () {
    expect(calculateSummOnlyPositive()).toBe(false);
  });
  it("a should be > 0 , b should be <= 0 , c should be <= 0", function () {
    expect(calculateSummOnlyPositive(1, -1, 0)).toBe(1);
  });
  it("b should be > 0 , a should be <= 0 , c should be <= 0", function () {
    expect(calculateSummOnlyPositive(-1, 1, 0)).toBe(1);
  });
  it("a should be > 0 , b should be > 0 , c should be <= 0", function () {
    expect(calculateSummOnlyPositive(1, 1, -1)).toBe(2);
  });
  it("a should be > 0 , c should be > 0 , b should be <= 0", function () {
    expect(calculateSummOnlyPositive(1, 0, 1)).toBe(2);
  });
  it("b should be > 0 , c should be > 0 , a should be <= 0", function () {
    expect(calculateSummOnlyPositive(0, 1, 1)).toBe(2);
  });
  it("a should be > 0 , b should be > 0 , c should be > 0", function () {
    expect(calculateSummOnlyPositive(1, 1, 1)).toBe(3);
  });
});

describe("calculateMaxPlus3", function () {
  it("should be defined ", function () {
    expect(calculateMaxPlus3).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof calculateMaxPlus3).toBe("function");
  });
  it("should be without arguments", function () {
    expect(calculateMaxPlus3()).toBe(false);
  });
  it("should be without arguments", function () {
    expect(calculateMaxPlus3()).toBe(false);
  });
  it("product should be > summ ", function () {
    expect(calculateMaxPlus3(3, 3, 3)).toBe(30);
  });
  it("summ should be < product", function () {
    expect(calculateMaxPlus3(1, 1, 1)).toBe(6);
  });
});
describe("getGrade", function () {
  it("should be defined ", function () {
    expect(getGrade).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getGrade).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getGrade()).toBe(false);
  });
  it("argument should be number", function () {
    expect(getGrade("string")).toBe(false);
  });
  it("rating === 0", function () {
    expect(getGrade(0)).toBe("F");
  });
  it("rating < 20", function () {
    expect(getGrade(19)).toBe("F");
  });
  it("rating === 20", function () {
    expect(getGrade(20)).toBe("E");
  });
  it("rating < 40", function () {
    expect(getGrade(39)).toBe("E");
  });
  it("rating === 40", function () {
    expect(getGrade(40)).toBe("D");
  });
  it("rating < 60", function () {
    expect(getGrade(59)).toBe("D");
  });
  it("rating === 60", function () {
    expect(getGrade(60)).toBe("C");
  });
  it("rating < 75", function () {
    expect(getGrade(74)).toBe("C");
  });
  it("rating === 75", function () {
    expect(getGrade(75)).toBe("B");
  });
  it("rating < 90", function () {
    expect(getGrade(89)).toBe("B");
  });
  it("rating === 90", function () {
    expect(getGrade(90)).toBe("A");
  });
  it("rating < 100", function () {
    expect(getGrade(99)).toBe("A");
  });
  it("rating === 100", function () {
    expect(getGrade(100)).toBe("A");
  });
  it("rating > 100", function () {
    expect(getGrade(101)).toBe("out of range");
  });
  it("rating < 0", function () {
    expect(getGrade(-1)).toBe("out of range");
  });
});
describe("calculateSummofEvenNumbersFrom1to99", function () {
  it("should be defined ", function () {
    expect(getProductOrSumm).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof calculateSummofEvenNumbersFrom1to99).toBe("function");
  });
  it("should be without arguments", function () {
    expect(calculateSummofEvenNumbersFrom1to99()).toStrictEqual([2450, 49]);
  });
  it("result without arguments = result with arguments", function () {
    expect(calculateSummofEvenNumbersFrom1to99(1)).toStrictEqual([2450, 49]);
  });
});
describe("isPrimeNumber", function () {
  it("should be defined ", function () {
    expect(isPrimeNumber).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof isPrimeNumber).toBe("function");
  });
  it("should be without arguments", function () {
    expect(isPrimeNumber()).toBe(
      "arg is not a number, i work only with numbers"
    );
  });
  it("argument isn't prime and < 2", function () {
    expect(isPrimeNumber(1)).toBe(false);
  });
  it("argument isn't prime and negative", function () {
    expect(isPrimeNumber(-1)).toBe(false);
  });
  it("argument is prime", function () {
    expect(isPrimeNumber(3)).toBe(true);
  });
  it("argument is't prime and positive", function () {
    expect(isPrimeNumber(44)).toBe(false);
  });
});
describe("getSqrt", function () {
  it("should be defined ", function () {
    expect(getSqrt).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getSqrt).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getSqrt()).toBe("arg is not a number, i work only with numbers");
  });
  it("should be returned sqrt of argument", function () {
    expect(getSqrt(4)).toBe(2);
  });
  it("should be returned sqrt of argument", function () {
    expect(getSqrt(4)).toBe(2);
  });
  it("argument === 0", function () {
    expect(getSqrt(0)).toBe(0);
  });
  it("argument is negative", function () {
    expect(getSqrt(-3)).toBe(0);
  });
});
describe("getBinarySqrt", function () {
  it("should be defined ", function () {
    expect(getBinarySqrt).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getBinarySqrt).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getBinarySqrt()).toBe(
      "arg is not a number, i work only with numbers"
    );
  });
  it("should be returned sqrt of argument", function () {
    expect(getSqrt(4)).toBe(2);
  });
  it("argument === 0", function () {
    expect(getSqrt(0)).toBe(0);
  });
  it("argument is negative", function () {
    expect(getSqrt(-3)).toBe(0);
  });
});
describe("getFactorial", function () {
  it("should be defined ", function () {
    expect(getFactorial).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getFactorial).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getFactorial()).toBe(
      "arg is not a number, i work only with numbers"
    );
  });
  it("should be return factorial of the argument", function () {
    expect(getFactorial(3)).toBe(6);
  });
  it("should be return factorial of the argument", function () {
    expect(getFactorial(4)).toBe(24);
  });
  it("should be return factorial of the argument", function () {
    expect(getFactorial(16)).toBe(20922789888000);
  });
});
describe("calculateSummOfDigits", function () {
  it("should be defined ", function () {
    expect(calculateSummOfDigits).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof calculateSummOfDigits).toBe("function");
  });
  it("should be without arguments", function () {
    expect(calculateSummOfDigits()).toBe(
      "arg is not a number, i work only with numbers"
    );
  });
  it("shoul return 0 if argument is negative", function () {
    expect(calculateSummOfDigits(-10)).toBe(0);
  });
  it("shoul return only integer numbers writed with dot", function () {
    expect(calculateSummOfDigits(0.33)).toBe("only integer numbers");
  });
});
describe("reverseNumber", function () {
  it("should be defined ", function () {
    expect(reverseNumber).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof reverseNumber).toBe("function");
  });
  it("should be without arguments", function () {
    expect(reverseNumber()).toBe("put a number argument!");
  });
  it("should return resersed number 3 length", function () {
    expect(reverseNumber(123)).toBe(321);
  });
  it("should return resersed number 4 length", function () {
    expect(reverseNumber(2038)).toBe(8302);
  });
  it("should return without first 0, because we do not have a numbers start from 0 ", function () {
    expect(reverseNumber(4040)).toBe(404);
  });
});
describe("getMinEl", function () {
  it("should be defined ", function () {
    expect(getMinEl).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getMinEl).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getMinEl()).toBe("only array type");
  });
  it("array should be empty", function () {
    expect(getMinEl([])).toBe("array is empty");
  });
  it("should be return minimal element of array", function () {
    expect(getMinEl([2, 3, 1, 5])).toBe(1);
  });
});
describe("getMaxEl", function () {
  it("should be defined ", function () {
    expect(getMaxEl).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getMaxEl).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getMaxEl()).toBe("only array type");
  });
  it("array should be empty", function () {
    expect(getMaxEl([])).toBe("array is empty");
  });
  it("should be return minimal element of array", function () {
    expect(getMaxEl([2, 3, 1, 5])).toBe(5);
  });
  it("should be return minimal element of array try 2", function () {
    expect(getMaxEl([6, 3, 1, 5])).toBe(6);
  });
});
describe("getMinElIndex", function () {
  it("should be defined ", function () {
    expect(getMinElIndex).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getMinElIndex).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getMinElIndex()).toBe("only array type");
  });
  it("array should be empty", function () {
    expect(getMinElIndex([])).toBe("array is empty");
  });
  it("should be return minimal element index of array", function () {
    expect(getMinElIndex([2, 30000, 1, 5, 4, 5, 2, 3, -1])).toBe(8);
  });
  it("should be return minimal element index of array try 2", function () {
    expect(getMinElIndex([2, 3, 1])).toBe(2);
  });
});
describe("getMaxElIndex", function () {
  it("should be defined ", function () {
    expect(getMaxElIndex).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getMaxElIndex).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getMaxElIndex()).toBe("only array type");
  });
  it("array should be empty", function () {
    expect(getMaxElIndex([])).toBe("array is empty");
  });
  it("should be return maximal element index of array", function () {
    expect(getMaxElIndex([2, 30000, 1, 5, 4, 5, 2, 3, -1])).toBe(1);
  });
  it("should be return minimal element index of array try 2", function () {
    expect(getMaxElIndex([2, 3, 1, 100])).toBe(3);
  });
});
describe("calculateSummOfOddIndex", function () {
  it("should be defined ", function () {
    expect(calculateSummOfOddIndex).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof calculateSummOfOddIndex).toBe("function");
  });
  it("should be without arguments", function () {
    expect(calculateSummOfOddIndex()).toBe("only array type");
  });
  it("array should be empty", function () {
    expect(calculateSummOfOddIndex([])).toBe("array is empty");
  });
  it("should be return summ of odd Indexs", function () {
    expect(calculateSummOfOddIndex([2, 1, 2, 6, 8, 5, 2, 3, -1])).toBe(15);
  });
  it("should be return summ of odd Indexs try 2", function () {
    expect(calculateSummOfOddIndex([2, 3, 1, 100])).toBe(103);
  });
});
describe("reverseArray", function () {
  it("should be defined ", function () {
    expect(reverseArray).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof reverseArray).toBe("function");
  });
  it("should be without arguments", function () {
    expect(reverseArray()).toBe("only array type");
  });
  it("array should be empty", function () {
    expect(reverseArray([])).toBe("array is empty");
  });
  it("should be reversed argument array", function () {
    expect(reverseArray([2, 1, 2, 6, 8, 5, 2, 3, -1])).toStrictEqual([
      -1,
      3,
      2,
      5,
      8,
      6,
      2,
      1,
      2,
    ]);
  });
  it("should be reversed argument array try 2", function () {
    expect(reverseArray([2, 3, 1, 100])).toStrictEqual([100, 1, 3, 2]);
  });
});
describe("getOddNumber", function () {
  it("should be defined ", function () {
    expect(getOddNumber).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getOddNumber).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getOddNumber()).toBe("only array type");
  });
  it("array should be empty", function () {
    expect(getOddNumber([])).toBe("array is empty");
  });
  it("should be a count of odd numbers", function () {
    expect(getOddNumber([2, 3, 1, 100])).toBe(2);
  });
  it("should be a count of odd numbers try 2", function () {
    expect(getOddNumber([2, -3, 1, -7])).toBe(3);
  });
});
describe("changeArrayParts", function () {
  it("should be defined ", function () {
    expect(changeArrayParts).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof changeArrayParts).toBe("function");
  });
  it("should be without arguments", function () {
    expect(changeArrayParts()).toBe("only array type");
  });
  it("array should be empty", function () {
    expect(changeArrayParts([])).toBe("array is empty");
  });
  it("should be a swaped parts array", function () {
    expect(changeArrayParts([2, 3, 1, 100])).toStrictEqual([1, 100, 2, 3]);
  });
  it("should be a swaped parts array with center element in center position", function () {
    expect(changeArrayParts([2, -3, 1])).toStrictEqual([1, -3, 2]);
  });
});
describe("insertSort", function () {
  it("should be defined ", function () {
    expect(insertSort).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof insertSort).toBe("function");
  });
  it("should be without arguments", function () {
    expect(insertSort()).toBe("only array type");
  });
  it("array should be empty", function () {
    expect(insertSort([])).toBe("array is empty");
  });
  it("should be return a sorted array from minimal to maximal", function () {
    expect(insertSort([2, 3, 1, 100])).toStrictEqual([1, 2, 3, 100]);
  });
  it("should be return a sorted array from minimal to maximal try 2", function () {
    expect(insertSort([2, -3, 1])).toStrictEqual([-3, 1, 2]);
  });
});
describe("bubbleSort", function () {
  it("should be defined ", function () {
    expect(bubbleSort).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bubbleSort).toBe("function");
  });
  it("should be without arguments", function () {
    expect(bubbleSort()).toBe("only array type");
  });
  it("array should be empty", function () {
    expect(bubbleSort([])).toBe("array is empty");
  });
  it("should be return a sorted array from minimal to maximal", function () {
    expect(bubbleSort([4, 1, 3, 2])).toStrictEqual([1, 2, 3, 4]);
  });

  it("should be return a sorted array from minimal to maximal try 2", function () {
    expect(bubbleSort([2, -3, 1, 8, 5])).toStrictEqual([-3, 1, 2, 5, 8]);
  });
});
describe("selectSort", function () {
  it("should be defined ", function () {
    expect(selectSort).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof selectSort).toBe("function");
  });
  it("should be without arguments", function () {
    expect(selectSort()).toBe("only array type");
  });
  it("array should be empty", function () {
    expect(selectSort([])).toBe("array is empty");
  });
  it("should be return a sorted array from minimal to maximal", function () {
    expect(selectSort([4, 1, 3, 2])).toStrictEqual([1, 2, 3, 4]);
  });

  it("should be return a sorted array from minimal to maximal try 2", function () {
    expect(selectSort([2, -3, 1, 8, 5])).toStrictEqual([-3, 1, 2, 5, 8]);
  });
});
describe("getStringDayNumber", function () {
  it("should be defined ", function () {
    expect(getStringDayNumber).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getStringDayNumber).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getStringDayNumber()).toBe(false);
  });
  it("should be  < 1", function () {
    expect(getStringDayNumber(0)).toBe("wrong input, in week only 7 days");
  });
  it("should be  > 7", function () {
    expect(getStringDayNumber(8)).toBe("wrong input, in week only 7 days");
  });
  it("should be  1", function () {
    expect(getStringDayNumber(1)).toBe("Sunday");
  });
  it("should be  2", function () {
    expect(getStringDayNumber(2)).toBe("Monday");
  });
  it("should be  3", function () {
    expect(getStringDayNumber(3)).toBe("Tuesday");
  });
  it("should be  4", function () {
    expect(getStringDayNumber(4)).toBe("Wednesday");
  });
  it("should be  5", function () {
    expect(getStringDayNumber(5)).toBe("Thursday");
  });
  it("should be  6", function () {
    expect(getStringDayNumber(6)).toBe("Friday");
  });
  it("should be  7", function () {
    expect(getStringDayNumber(7)).toBe("Saturday");
  });
});
describe("getDistance", function () {
  it("should be defined ", function () {
    expect(getDistance).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getDistance).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getDistance()).toBe("wrong input");
  });
  it("should return distance in two-dimensional cartesian ", function () {
    expect(getDistance(4, 4, 3, 8)).toBe(4.123105625617661);
  });
  it("should return distance in two-dimensional cartesian try", function () {
    expect(getDistance(4, 4, 3, 8)).toBe(4.123105625617661);
  });
  it("should return distance in two-dimensional cartesian try 2", function () {
    expect(getDistance(84, 26, 32, 12)).toBe(53.85164807134504);
  });
});
describe("convertToWords", function () {
  it("should be defined ", function () {
    expect(convertToWords).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof convertToWords).toBe("function");
  });
  it("should be without arguments", function () {
    expect(convertToWords()).toBe("wrong input");
  });
  it("argument should be 0", function () {
    expect(convertToWords(0)).toBe("zero");
  });
  it("argument should be 10", function () {
    expect(convertToWords(10)).toBe("ten ");
  });
  it("argument should be 999", function () {
    expect(convertToWords(999)).toBe("nineHundered ninety nine ");
  });
  it("argument should be 34", function () {
    expect(convertToWords(34)).toBe("thirty four ");
  });
});
describe("convertWordToNumber", function () {
  it("should be defined ", function () {
    expect(convertWordToNumber).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof convertWordToNumber).toBe("function");
  });
  it("should be without arguments", function () {
    expect(convertWordToNumber()).toBe("wrong input");
  });
  it("should be return number from string number name", function () {
    expect(convertWordToNumber("three")).toBe(3);
  });
  it("should be return number from string number name try 2", function () {
    expect(convertWordToNumber("sixteen")).toBe(16);
  });
  it("should be return number from string number name try 3", function () {
    expect(convertWordToNumber("nine hundred ninety nine")).toBe(999);
  });
  it("should be return number from string number name try 4", function () {
    expect(convertWordToNumber("five hundred sixty four")).toBe(564);
  });
});
