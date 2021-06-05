var { getDays, every, isOdd, isOddLookOnThis } = require("./19.04");


Number.prototype.isOddLookOnThis = isOddLookOnThis;

describe("getDays", function () {
  it("should be defined", function () {
    expect(getDays).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getDays).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getDays()).toBe(`I don't work without  arguments`);
  });
  it("should be without arguments", function () {
    expect(getDays("da")).toBe(`year must be a number`);
  });
  it("should first number argument and second undefined", function () {
    expect(getDays(2021)).toBe(`I work only with two arguments`);
  });
  it("should first argument normaly and second argument < 1", function () {
    expect(getDays(2021, 0)).toBe(
      `we have only 12 month in year , pls enter a number from 1 to 12, or use sting name of month`
    );
  });
  it("should first argument normaly and second argument > 12", function () {
    expect(getDays(2021, 13)).toBe(
      `we have only 12 month in year , pls enter a number from 1 to 12, or use sting name of month`
    );
  });
  it("should first argument normaly and second argument number from 1 to 12", function () {
    expect(getDays(2021, 1)).toBe(31);
    expect(getDays(2020, 2)).toBe(29);
    expect(getDays(1985, 2)).toBe(28);
  });
  it("should first argument normaly and second argument string with not a name of month", function () {
    expect(getDays(2021, "dead")).toBe(
      "Please write right month on English and first latter must be Capital"
    );
  });
  it("should first argument normaly and second argument string and name of month is not from Capital letter", function () {
    expect(getDays(2021, "january")).toBe(
      "Please write right month on English and first latter must be Capital"
    );
  });
  it("should first argument normaly and second argument string and name of month is normaly", function () {
    expect(getDays(2021, "January")).toBe(31);
    expect(getDays(2021, "February")).toBe(28);
    expect(getDays(2021, "March")).toBe(31);
    expect(getDays(2021, "April")).toBe(30);
    expect(getDays(2021, "May")).toBe(31);
    expect(getDays(2021, "June")).toBe(30);
    expect(getDays(2021, "July")).toBe(31);
    expect(getDays(2021, "August")).toBe(31);
    expect(getDays(2021, "September")).toBe(30);
    expect(getDays(2021, "October")).toBe(31);
    expect(getDays(2021, "November")).toBe(30);
    expect(getDays(2021, "December")).toBe(31);
  });
});
describe("every", function () {
  it("should be defined", function () {
    expect(getDays).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof every).toBe("function");
  });
  it("should be without arguments", function () {
    expect(every()).toBe(`I don't work without arguments`);
  });
  it("should return not a array in first argument", function () {
    var a = {};
    expect(every(a)).toBe(`not a array in first argument`);
  });
  it("should return array is empty", function () {
    var a = [];
    expect(every(a)).toBe(`array is empty`);
  });
  it("should return not a function in second argument", function () {
    var a = [1, 2, 3];
    expect(every(a, a)).toBe(`not a function in second argument`);
  });
  describe("every", function () {
    it("should be defined", function () {
      expect(getDays).toBeDefined();
    });
    it("should be function", function () {
      expect(typeof every).toBe("function");
    });
    it("should be without arguments", function () {
      expect(every()).toBe(`I don't work without arguments`);
    });
    it("should return not a array in first argument", function () {
      var a = {};
      expect(every(a)).toBe(`not a array in first argument`);
    });
    it("should return array is empty", function () {
      var a = [];
      expect(every(a)).toBe(`array is empty`);
    });
    it("should return not a function in second argument", function () {
      var a = [1, 2, 3];
      expect(every(a, a)).toBe(`not a function in second argument`);
    });
    it("should return true", function () {
      var a = [2, 2, 2];
      var func = jest.fn((i) => {
        if (i % 2 === 0) return true;
      });
      expect(every(a, func)).toBe(true);
    });
    it("should return false", function () {
      var a = [2, 3, 2];
      var func = jest.fn((i) => {
        if (i % 2 === 0) return true;
      });
      expect(every(a, func)).toBe(false);
    });
  });
});
describe("isOdd", function () {
  it("should be defined", function () {
    expect(isOdd).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof isOdd).toBe("function");
  });
  it("should be without arguments", function () {
    expect(isOdd()).toBe(NaN);
  });
  it("should be with string", function () {
    expect(isOdd('2')).toBe(NaN);
  });
  it("should be with number%2 === 0 ", function () {
    expect(isOdd(2)).toBe(false);
  });
  it("should be with number%2 !== 0 ", function () {
    expect(isOdd(3)).toBe(true);
  });
});
describe("isOddLookOnThis", function () {
  it("should be defined", function () {
    expect(isOddLookOnThis).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof isOddLookOnThis).toBe("function");
  });
  it("should be function", function () {
    expect(typeof isOddLookOnThis).toBe("function");
  });
  it("should be with string", function () {
    expect(Number('string').isOddLookOnThis()).toBe(NaN);
  });
  it("should be with string", function () {
    expect(Number(3).isOddLookOnThis()).toBe(true);
  });
  it("should be with string", function () {
    expect(Number(2).isOddLookOnThis()).toBe(false);
  });
});
