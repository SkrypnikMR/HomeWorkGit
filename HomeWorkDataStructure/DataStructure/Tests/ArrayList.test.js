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
  it("should called ", function () {
    var a = new ArrayList(3);
    var testValue = 10;
    a.add(testValue);
    var result = a.toString();
    expect(result).toEqual('10 ');
  });
});