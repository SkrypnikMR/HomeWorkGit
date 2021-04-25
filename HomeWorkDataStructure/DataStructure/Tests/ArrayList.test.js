var ArrayList = require("../Lists/ArrayList");

describe("AList init", function () {
  it("should be defined ", function () {
    expect(ArrayList).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof ArrayList).toBe("function");
  });
  it("should without argument", function () {
    var arrayList = new ArrayList();
    expect(arrayList.getSize()).toBe(0);
    expect(arrayList.array.length).toBe(10);
  });
  it("should number argument at init", function () {
    var capacity = 3;
    var arrayList = new ArrayList(capacity);
    expect(arrayList.getSize()).toBe(0);
    expect(arrayList.array.length).toBe(capacity);
  });
  it("should array in argument at init", function () {
    var testArray = [1, 2, 3];
    var arrayList = new ArrayList(testArray);
    expect(arrayList.getSize()).toBe(3);
    expect(arrayList.array.length).toBe(testArray.length);
    expect(arrayList.array).toHaveLength(3);
    expect(arrayList.array).toEqual(testArray);
  });
  it("should string in argument at init", function () {
    try {
      var testString = "kek";
      new ArrayList(testString);
    } catch (e) {
      expect(e.message).toBe("only numbers or array arguments");
    }
  });
});

describe("ArrayList getSize", function () {
  it("should be defined ", function () {
    var a = new ArrayList();
    expect(a.getSize).toBeDefined();
  });
  it("should be function", function () {
    var a = new ArrayList();
    expect(typeof a.getSize).toBe("function");
  });
  it("should init with number argument", function () {
    var a = new ArrayList(3);
    expect(a.getSize()).toBe(0);
  });
  it("should init without argument", function () {
    var a = new ArrayList([1, 2, 3]);
    expect(a.getSize()).toBe(3);
  });
});
describe("ArrayList clear", function () {
  var a = new ArrayList();
  var testArray = new Array(10);
  it("should be defined ", function () {
    expect(a.clear).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof a.clear).toBe("function");
  });
  it("should clear instance array", function () {
    a.clear();
    expect(a.getSize()).toBe(0);
    expect(a.array).toHaveLength(10);
    expect(a.array).toEqual(testArray);
  });
});
describe("ArrayList esnureCapacity", function () {
  it("should be defined ", function () {
    expect(new ArrayList().ensureCapacity).toBeDefined();
  });
  it("should be defined ", function () {
    expect(typeof new ArrayList().ensureCapacity).toBe("function");
  });
  it("should this.array.length === testArray.length ", function () {
    var testArray = new Array(3);
    testArray.fill(3);
    var a = new ArrayList(testArray);
    a.ensureCapacity();
    expect(a.array).toHaveLength(7);
  });
  it("should this.array = enlargedArray with empty slots", function () {
    var testArray = [1, 2, 3, undefined, undefined, undefined, undefined];
    var a = new ArrayList([1, 2, 3]);
    a.ensureCapacity();
    expect(a.array).toEqual(testArray);
  });
});
describe("ArrayList add", function () {
  it("should be defined ", function () {
    var a = new ArrayList();
    expect(a.add).toBeDefined();
  });
  it("should be function", function () {
    var a = new ArrayList();
    expect(typeof a.add).toBe("function");
  });
  it("should a new element in ArrayList", function () {
    var a = new ArrayList(3);
    var testElement = 31;
    var testArray = [testElement, undefined, undefined];
    a.add(testElement);
    expect(a.array).toEqual(testArray);
  });
  it("should a size = size +1 ", function () {
    var a = new ArrayList(3);
    var testElement = 31;
    var oldSize = a.getSize();
    a.add(testElement);
    expect(a.getSize()).toBe(oldSize + 1);
  });
  it("should this.array = enlargedArray if this.array don't have place for new element with call add method ", function () {
    var a = new ArrayList([1, 2, 3]);
    var testElement = 10;
    var testArray = [1, 2, 3, 10, undefined, undefined, undefined];
    a.add(testElement);
    expect(a.array).toEqual(testArray);
    expect(a.array).toHaveLength(7);
  });
});
describe("ArrayList set", function () {
  it("should be defined ", function () {
    var a = new ArrayList();
    expect(a.set).toBeDefined();
  });
  it("should be function", function () {
    var a = new ArrayList();
    expect(typeof a.set).toBe("function");
  });
  it("should throw error if invalid index", function () {
    try {
      var a = new ArrayList(2);
      a.add(1);
      a.add(2);
      a.set(3, 3);
    } catch (e) {
      expect(e.message).toBe("ArrayList don't have this index");
    }
  });
  it("should set in empty collection slot", function () {
    var a = new ArrayList(2);
    var index = 0;
    var testArray = [1, undefined];
    var oldSize = a.getSize();
    a.set(1, index);
    expect(a.array[index]).toBe(testArray[index]);
    expect(a.getSize()).not.toBe(oldSize);
    expect(a.array).toEqual(testArray);
  });
  it("should set in filled collection slot", function () {
    var a = new ArrayList([1, 2]);
    var index = 0;
    var testArray = [3, 2];
    var oldSize = a.getSize();
    a.set(3, index);
    expect(a.array[index]).toBe(testArray[index]);
    expect(a.getSize()).toBe(oldSize);
  });
});
describe("ArrayList get", function () {
  it("should be defined ", function () {
    var a = new ArrayList();
    expect(a.get).toBeDefined();
  });
  it("should be function", function () {
    var a = new ArrayList();
    expect(typeof a.get).toBe("function");
  });
  it("should index in collection slots interval", function () {
    var a = new ArrayList(3);
    var testValue = 10;
    a.add(testValue);
    expect(a.get(0)).toBe(testValue);
  });
  it("should index out of range collection slots interval", function () {
    try {
      var a = new ArrayList(3);
      var testValue = 10;
      a.add(testValue);
      a.get(1);
    } catch (e) {
      expect(e.message).toBe(
        "Element in collection on this position is not defined"
      );
    }
  });
});
describe("ArrayList toArray", function () {
  it("should be defined ", function () {
    var a = new ArrayList();
    expect(a.toArray).toBeDefined();
  });
  it("should be function", function () {
    var a = new ArrayList();
    expect(typeof a.toArray).toBe("function");
  });
  it("should called without arguments", function () {
    var a = new ArrayList(3);
    var testValue = 10;
    a.add(testValue);
    var result = a.toArray();
    expect(result).toEqual([10]);
  });
  it("should called without arguments", function () {
    var a = new ArrayList(3);
    var testValue = 10;
    a.add(testValue);
    var result = a.toArray(123123213213);
    expect(result).toEqual([10]);
  });
});
describe("ArrayList toString", function () {
  it("should be defined ", function () {
    var a = new ArrayList();
    expect(a.toString).toBeDefined();
  });
  it("should be function", function () {
    var a = new ArrayList();
    expect(typeof a.toString).toBe("function");
  });
  it("should called with 1 element in collection", function () {
    var a = new ArrayList(3);
    var testValue = 10;
    a.add(testValue);
    var result = a.toString();
    expect(result).toEqual("10");
  });
  it("should called with 3 element in collection", function () {
    var a = new ArrayList(3);
    var testValue = 10;
    a.add(testValue);
    a.add(testValue);
    a.add(testValue);
    var result = a.toString();
    expect(result).toEqual("10,10,10");
  });
});
describe("ArrayList remove", function () {
  var test = new ArrayList(3);
  it("should be defined ", function () {
    expect(test.remove).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof test.remove).toBe("function");
  });
  it("should value was delete from collection", function () {
    var a = new ArrayList(3);
    var testArray = [undefined, 2, undefined];
    a.add(1);
    a.add(2);
    a.remove(1);
    expect(a.array).toEqual(testArray);
  });
  it("should return a value after delete", function () {
    var b = new ArrayList(3);
    b.add(1);
    b.add(2);
    expect(b.remove(1)).toBe(1);
  });
  it("should change size to size--", function () {
    var a = new ArrayList(3);
    a.add(1);
    a.add(2);
    var oldSize = a.getSize();
    a.remove(1);
    expect(a.getSize()).toEqual(oldSize - 1);
  });
  it("should catch error with true error message", function () {
    try {
      var a = new ArrayList(3);
      a.add(1);
      a.add(2);
      a.remove(3);
    } catch (e) {
      expect(e.message).toBe(`don't have this value in collection`);
    }
  });
});
describe("ArrayList contains", function () {
  var test = new ArrayList(3);
  test.add(2);
  it("should be defined ", function () {
    expect(test.remove).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof test.remove).toBe("function");
  });
  it("should return true", function () {
    expect(test.contains(2)).toBe(true);
  });
  it("should return false", function () {
    expect(test.contains(8)).toBe(false);
  });
});
describe("ArrayList minValue", function () {
  var test = new ArrayList(3);
  test.add(2);
  test.add(23);
  test.add(33);
  test.add(4);
  test.add(1);
  it("should be defined ", function () {
    expect(test.minValue).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof test.minValue).toBe("function");
  });
  it("should return minimal value of collection", function () {
    expect(test.minValue()).toBe(1);
  });
  it("should throw error collection is empty", function () {
    try {
      var sad = new ArrayList();
      sad.minValue();
    } catch (e) {
      expect(e.message).toBe("collection is empty");
    }
  });
});
describe("ArrayList maxValue", function () {
  var test = new ArrayList(3);
  test.add(2);
  test.add(23);
  test.add(33);
  test.add(4);
  test.add(1);
  it("should be defined ", function () {
    expect(test.maxValue).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof test.maxValue).toBe("function");
  });
  it("should return maximal value of collection", function () {
    expect(test.maxValue()).toBe(33);
  });
  it("should throw error collection is empty", function () {
    try {
      var sad = new ArrayList();
      sad.maxValue();
    } catch (e) {
      expect(e.message).toBe("collection is empty");
    }
  });
});
describe("ArrayList minIndex", function () {
  var test = new ArrayList(3);
  test.add(2);
  test.add(23);
  test.add(33);
  test.add(4);
  test.add(1);
  it("should be defined ", function () {
    expect(test.minIndex).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof test.minIndex).toBe("function");
  });
  it("should return minimal value of collection", function () {
    expect(test.minIndex()).toBe(4);
  });
  it("should throw error collection is empty", function () {
    try {
      var sad = new ArrayList();
      sad.minIndex();
    } catch (e) {
      expect(e.message).toBe("collection is empty");
    }
  });
});
describe("ArrayList maxIndex", function () {
  var test = new ArrayList(3);
  test.add(2);
  test.add(23);
  test.add(33);
  test.add(4);
  test.add(1);
  it("should be defined ", function () {
    expect(test.maxIndex).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof test.maxIndex).toBe("function");
  });
  it("should return minimal value of collection", function () {
    expect(test.maxIndex()).toBe(2);
  });
  it("should throw error collection is empty", function () {
    try {
      var sad = new ArrayList();
      sad.maxIndex();
    } catch (e) {
      expect(e.message).toBe("collection is empty");
    }
  });
});
describe("ArrayList reverse", function () {
  var test = new ArrayList(5);
  test.add(1);
  test.add(3);
  it("should be defined ", function () {
    expect(test.reverse).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof test.reverse).toBe("function");
  });
  it("should throw error collection is empty", function () {
    try {
      var sad = new ArrayList(3);
      sad.reverse();
    } catch (e) {
      expect(e.message).toBe("collection is empty");
    }
  });
  it("should collection was reversed with empty slots", function () {
    var testArray = [3, 1, undefined, undefined, undefined];
    test.reverse();
    expect(test.array).toEqual(testArray);
  });
  it("should collection was reversed", function () {
    var testik = new ArrayList([2, 3, 4]);
    var testArray = [4, 3, 2];
    testik.reverse();
    expect(testik.array).toEqual(testArray);
  });
});
describe("ArrayList halfReverse", function () {
  var test = new ArrayList(5);
  test.add(1);
  test.add(3);
  it("should be defined ", function () {
    expect(test.halfReverse).toBeDefined();
  });
  it("should be a function ", function () {
    expect(typeof test.halfReverse).toBe("function");
  });
  it("should throw error collection is empty", function () {
    try {
      var sad = new ArrayList(3);
      sad.halfReverse();
    } catch (e) {
      expect(e.message).toBe("collection is empty");
    }
  });
  it("should work with this.array.length%2 !== 0 and inititalisation with number argument", function () {
    var test1 = new ArrayList(5);
    test1.add(1);
    test1.add(2);
    test1.add(3);
    var testArray = [2, 3, 1, undefined, undefined];
    test1.halfReverse();
    expect(test1.array).toEqual(testArray);
  });
  it("should work with this.array.length%2 === 0 inititalisation with number argument", function () {
    var test2 = new ArrayList(6);
    test2.add(1);
    test2.add(2);
    test2.add(3);
    test2.add(4);
    var testArray = [3, 4, 1, 2, undefined, undefined];
    test2.halfReverse();
    expect(test2.array).toEqual(testArray);
  });
  it("should work with this.array.length%2 === 0 inititalisation without arguments", function () {
    var test3 = new ArrayList();
    test3.add(1);
    test3.add(2);
    test3.add(3);
    test3.add(4);
    var testArray = [
      3,
      4,
      1,
      2,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ];
    test3.halfReverse();
    expect(test3.array).toEqual(testArray);
  });
  it("should work with this.array.length%2 !== 0 inititalisation with array", function () {
    var test4 = new ArrayList([1, 2, 3]);
    var testArray = [2, 3, 1];
    test4.halfReverse();
    expect(test4.array).toEqual(testArray);
  });
  it("should work with this.array.length%2 === 0 inititalisation with array", function () {
    var test5 = new ArrayList([1, 2, 3, 4]);
    var testArray = [3, 4, 1, 2];
    test5.halfReverse();
    expect(test5.array).toEqual(testArray);
  });
});
describe("ArrayList retainAll", function () {
  var test = new ArrayList(3);
  test.add(2);
  test.add(23);
  test.add(33);
  test.add(4);
  test.add(1);
  it("should be defined ", function () {
    expect(test.retainAll).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof test.retainAll).toBe("function");
  });
  it("should throw error if argument is no array or undefined", function () {
    try {
      var sad = new ArrayList([1, 2, 3]);
      sad.retainAll(1);
    } catch (e) {
      expect(e.message).toBe("Work only with array argument");
    }
  });
  it("should throw error if collection is empty", function () {
    try {
      var sad = new ArrayList();
      sad.retainAll();
    } catch (e) {
      expect(e.message).toBe("Collection is empty");
    }
  });
  it("should not change collection ", function () {
    var dead = new ArrayList();
    dead.add(1);
    dead.add(2);
    dead.add(3);
    var testArray = dead.array;
    var oldSize = dead.getSize();
    dead.retainAll([1, 2, 3, 1]);
    expect(dead.array).toEqual(testArray);
    expect(dead.getSize()).toBe(oldSize);
  });
  it("should change collection ", function () {
    var dead = new ArrayList();
    dead.add(1);
    dead.add(2);
    dead.add(3);
    var testArray = [
      1,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ];
    var oldSize = dead.getSize();
    dead.retainAll([5, 6, 1]);
    expect(dead.array).toEqual(testArray);
    expect(dead.getSize()).not.toBe(oldSize);
    expect(dead.getSize()).toBe(1);
  });
});
describe("ArrayList removeAll", function () {
  var test = new ArrayList();
  it("should be defined ", function () {
    expect(test.removeAll).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof test.removeAll).toBe("function");
  });
  it("should throw error if argument is no array or undefined", function () {
    try {
      var sad = new ArrayList([1, 2, 3]);
      sad.removeAll(1);
    } catch (e) {
      expect(e.message).toBe("Work only with array argument");
    }
  });
  it("should throw error if collection is empty", function () {
    try {
      var sad = new ArrayList(10);
      sad.removeAll();
    } catch (e) {
      expect(e.message).toBe("Collection is empty");
    }
  });
  it("should not change collection ", function () {
    var dead = new ArrayList();
    dead.add(1);
    dead.add(2);
    dead.add(3);
    var testArray = dead.array;
    var oldSize = dead.getSize();
    dead.removeAll([4, 5, 6, 4]);
    expect(dead.array).toEqual(testArray);
    expect(dead.getSize()).toBe(oldSize);
  });
  it("should change collection ", function () {
    var dead = new ArrayList();
    dead.add(1);
    dead.add(2);
    dead.add(3);
    var testArray = new Array(10);
    testArray.fill(undefined);
    var oldSize = dead.getSize();
    dead.removeAll([1, 2, 3]);
    expect(dead.array).toEqual(testArray);
    expect(dead.getSize()).not.toBe(oldSize);
    expect(dead.getSize()).toBe(0);
  });
});
describe("ArrayList print", function () {
  var test = new ArrayList();
  it("should be defined ", function () {
    expect(test.print).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof test.print).toBe("function");
  });
  it("should throw error if argument is no array or undefined", function () {
    try {
      var sad = new ArrayList();
      sad.print();
    } catch (e) {
      expect(e.message).toBe("Collection is empty");
    }
  });
  it("should call console.log with args from collection slots", function () {
    var dead = new ArrayList(5);
    var testvalue1 = 1;
    var testvalue2 = 2;
    var testvalue3 = 3;
    console.log = jest.fn();
    dead.add(testvalue1);
    dead.add(testvalue2);
    dead.add(testvalue3);
    dead.print();
    expect(console.log).toBeCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith(testvalue1);
    expect(console.log).toHaveBeenCalledWith(testvalue2);
    expect(console.log).toHaveBeenCalledWith(testvalue3);
    expect(console.log).not.toHaveBeenCalledWith();
  });
});
