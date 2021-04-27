var LinkedList = require("../Lists/LinkedList");

describe("LinkedList init", function () {
  it("should be defined ", function () {
    expect(LinkedList).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof LinkedList).toBe("function");
  });
  it("should without argument", function () {
    var linkedList = new LinkedList();
    expect(linkedList.root).toBe(null);
    expect(linkedList.size).toBe(0);
  });
  it("should without argument", function () {
    try {
      var linkedList = new LinkedList(1);
    } catch (e) {
      expect(e.message).toBe("Initialization without arguments");
    }
  });
});
describe("LinkedList clear", function () {
  var linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  it("should be defined ", function () {
    expect(linkedList.clear).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.clear).toBe("function");
  });
  it("should called without argument", function () {
    linkedList.clear();
    expect(linkedList.getSize()).toBe(0);
    expect(linkedList.root).toBe(null);
  });
  it("should called with argument", function () {
    var lL = new LinkedList();
    lL.clear(1);
    expect(lL.getSize()).toBe(0);
    expect(lL.root).toBe(null);
  });
});
describe("LinkedList getSize", function () {
  var linkedList = new LinkedList();
  it("should be defined ", function () {
    expect(linkedList.getSize).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.getSize).toBe("function");
  });
  it("should without argument and LinkedList is empty", function () {
    expect(linkedList.getSize()).toBe(0);
  });
  it("should with argument and LinkedList is empty", function () {
    expect(linkedList.getSize(1)).toBe(0);
    expect(linkedList.getSize("kek")).toBe(0);
  });
  it("should without argument and LinkedList is empty, but we add linked item", function () {
    var test = new LinkedList();
    test.add(1);
    test.add(2);
    expect(test.getSize()).toBe(2);
  });
  it("should with argument and LinkedList is empty, but we add linked item", function () {
    var test = new LinkedList();
    test.add(1);
    test.add(2);
    expect(test.getSize()).toBe(2);
  });
});
describe("LinkedList add", function () {
  var linkedList = new LinkedList();
  it("should be defined ", function () {
    expect(linkedList.add).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.add).toBe("function");
  });
  it("should be function", function () {
    try {
      var errorList = new LinkedList();
      errorList.add();
    } catch (e) {
      expect(e.message).toBe("only number type of argument");
    }
  });
  it("should add 1 element in linked list", function () {
    var linkedListFirst = new LinkedList();
    var testMockValue = 2;
    var mockObj = { value: testMockValue, next: null };
    linkedListFirst.Node = jest.fn().mockReturnValue(mockObj);
    linkedListFirst.add(testMockValue);
    expect(linkedListFirst.getSize()).toBe(1);
    expect(linkedListFirst.Node).toHaveBeenCalledWith(testMockValue);
    expect(linkedListFirst.Node(testMockValue)).toEqual(mockObj);
    expect(linkedListFirst.root).toEqual(mockObj);
  });
  it("should add 2 element in linked list", function () {
    var linkedListSecond = new LinkedList();
    linkedListSecond.Node = jest.fn().mockImplementation(function (value) {
      this.value = value;
      this.next = null;
    });
    linkedListSecond.add(1);
    linkedListSecond.add(2);
    expect(linkedListSecond.Node).toHaveBeenCalledTimes(2);
    expect(linkedListSecond.Node).toHaveBeenCalledWith(1);
    expect(linkedListSecond.Node).toHaveBeenCalledWith(2);
  });
  it("should create linked list with 2 linked elements", function () {
    var linkedListLast = new LinkedList();
    var testValue1 = 1;
    var testValue2 = 2;
    var testNext = { value: testValue2, next: null };
    linkedListLast.add(testValue1);
    linkedListLast.add(testValue2);
    expect(linkedListLast.getSize()).toBe(2);
    expect(linkedListLast.root.value).toBe(testValue1);
    expect(linkedListLast.root.next).toEqual(testNext);
  });
});
describe("LinkedList toArray", function () {
  var linkedList = new LinkedList();
  it("should be defined ", function () {
    expect(linkedList.toArray).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.toArray).toBe("function");
  });
  it("should empty LinkedList", function () {
    try {
      linkedList.toArray();
    } catch (e) {
      expect(e.message).toBe("LinkedList is empty");
    }
  });
  it("should returned array of LinkedList elements values", function () {
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(8);
    expect(linkedList.toArray()).toEqual([2, 3, 8]);
    var array = linkedList.toArray();
    expect(array.length).toBe(linkedList.getSize());
  });
});
describe("LinkedList set", function () {
  var linkedList = new LinkedList();
  it("should be defined ", function () {
    expect(linkedList.set).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.set).toBe("function");
  });
  it("should call without argument", function () {
    try {
      linkedList.set();
    } catch (e) {
      expect(e.message).toBe("work only with number value and number index");
    }
  });
  it("should not number argument", function () {
    try {
      linkedList.set("1");
    } catch (e) {
      expect(e.message).toBe("work only with number value and number index");
    }
  });
  it("should not number index", function () {
    try {
      linkedList.set(1, "1");
    } catch (e) {
      expect(e.message).toBe("work only with number value and number index");
    }
  });
  it("should empty Linked list", function () {
    try {
      linkedList.set(1, 1);
    } catch (e) {
      expect(e.message).toBe("Linked list is empty");
    }
  });
  it("should empty Linked list", function () {
    try {
      var testLinkedList = new LinkedList();
      testLinkedList.add(1);
      testLinkedList.add(2);
      testLinkedList.set(1, 2);
    } catch (e) {
      expect(e.message).toBe("Out of range of the linkedList");
    }
  });
  it("should set value in right index", function () {
    var testLinkedListKek = new LinkedList();
    var testArray = [1, 10, 3];
    testLinkedListKek.add(1);
    testLinkedListKek.add(2);
    testLinkedListKek.add(3);
    testLinkedListKek.set(10, 1);
    expect(testLinkedListKek.toArray()).toEqual(testArray);
    expect(testLinkedListKek.root.next).toEqual({
      value: 10,
      next: { value: 3, next: null },
    });
  });
});
describe("LinkedList get", function () {
  var linkedList = new LinkedList();
  var testvalue = 2;
  var secondTestValue = 10;
  it("should be defined ", function () {
    expect(linkedList.get).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.get).toBe("function");
  });
  it("should without argument", function () {
    try {
      linkedList.get();
    } catch (e) {
      expect(e.message).toBe("work only with one number argument");
    }
  });
  it("should with more then 1 argument", function () {
    try {
      linkedList.get(1, 1);
    } catch (e) {
      expect(e.message).toBe("work only with one number argument");
    }
  });
  it("should empty linked list", function () {
    try {
      linkedList.get(1);
    } catch (e) {
      expect(e.message).toBe("LinkedList is empty!");
    }
  });
  it("should index out of range", function () {
    try {
      linkedList.add(testvalue);
      linkedList.get(1);
    } catch (e) {
      expect(e.message).toBe("Out of range of the linkedList");
    }
  });
  it("should return right value", function () {
    expect(linkedList.get(0)).toBe(testvalue);
  });
  it("should return right value with more element in LinkedList", function () {
    linkedList.add(secondTestValue);
    expect(linkedList.get(1)).toBe(secondTestValue);
  });
});
describe("LinkedList remove", function () {
  var linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.add(4);
  linkedList.add(5);
  it("should be defined ", function () {
    expect(linkedList.remove).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.remove).toBe("function");
  });
  it("should call without argument", function () {
    try {
      linkedList.remove();
    } catch (e) {
      expect(e.message).toBe("work only with one number argument");
    }
  });
  it("should call with more 1 argument", function () {
    try {
      linkedList.remove(1, 1);
    } catch (e) {
      expect(e.message).toBe("work only with one number argument");
    }
  });
  it("should call with no number argument", function () {
    try {
      linkedList.remove("1");
    } catch (e) {
      expect(e.message).toBe("work only with one number argument");
    }
  });
  it("should empty LinkedList call ", function () {
    try {
      var linkedList1 = new LinkedList();
      linkedList1.remove(1);
    } catch (e) {
      expect(e.message).toBe("LinkedList is empty");
    }
  });
  it("should remove item by value, and not drop links", function () {
    var testArray = [1, 5];
    linkedList.remove(2);
    linkedList.remove(3);
    linkedList.remove(4);
    expect(linkedList.toArray()).toEqual(testArray);
    expect(linkedList.getSize()).toBe(2);
  });
  it("should remove item by value, and not drop links and delete first item", function () {
    var testArray = [5];
    linkedList.remove(1);
    expect(linkedList.toArray()).toEqual(testArray);
    expect(linkedList.getSize()).toBe(1);
  });
  it("should remove item by value, and not drop links and delete first item", function () {
    var extraTestLinkedList = new LinkedList();
    extraTestLinkedList.add(1);
    extraTestLinkedList.remove(1);
    expect(extraTestLinkedList.getSize()).toBe(0);
    try {
      extraTestLinkedList.toArray();
    } catch (e) {
      expect(e.message).toBe("LinkedList is empty");
    }
  });
});
describe("LinkedList toString", function () {
  var linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.add(4);
  linkedList.add(5);
  it("should be defined ", function () {
    expect(linkedList.toString).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.toString).toBe("function");
  });
  it("should throw error", function () {
    var emptyLinkedList = new LinkedList();
    try {
      emptyLinkedList.toString();
    } catch (e) {
      expect(e.message).toBe("LinkedList is empty");
    }
  });
  it("should return string of linkedList items values", function () {
    var testString = "1,2,3,4,5";
    expect(linkedList.toString()).toBe(testString);
  });
});
describe("LinkedList contains", function () {
  var linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.add(4);
  linkedList.add(5);
  it("should be defined ", function () {
    expect(linkedList.contains).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.contains).toBe("function");
  });
  it("should throw error", function () {
    var emptyLinkedList = new LinkedList();
    try {
      emptyLinkedList.contains();
    } catch (e) {
      expect(e.message).toBe("LinkedList is empty");
    }
  });
  it("should return true because contain", function () {
    expect(linkedList.contains(4)).toBe(true);
  });
  it("should return false because not contain", function () {
    expect(linkedList.contains(7)).toBe(false);
  });
});
describe("LinkedList minValue", function () {
  var linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.add(4);
  linkedList.add(5);
  it("should be defined ", function () {
    expect(linkedList.minValue).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.minValue).toBe("function");
  });
  it("should throw error", function () {
    var emptyLinkedList = new LinkedList();
    try {
      emptyLinkedList.minValue();
    } catch (e) {
      expect(e.message).toBe("LinkedList is empty");
    }
  });
  it("should return minValue from LinkedList, minValue first Element", function () {
    expect(linkedList.minValue()).toBe(1);
  });
  it("should return minValue from LinkedList, minValue last Element", function () {
    var testLinkedList = new LinkedList();
    testLinkedList.add(2);
    testLinkedList.add(3);
    testLinkedList.add(4);
    testLinkedList.add(1);
    expect(testLinkedList.minValue()).toBe(1);
  });
  it("should return minValue from LinkedList, minValue not first and not last Element", function () {
    var extraTestLinkedList = new LinkedList();
    extraTestLinkedList.add(2);
    extraTestLinkedList.add(3);
    extraTestLinkedList.add(1);
    extraTestLinkedList.add(6);
    expect(extraTestLinkedList.minValue()).toBe(1);
  });
});
describe("LinkedList maxValue", function () {
  var linkedList = new LinkedList();
  linkedList.add(6);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.add(4);
  linkedList.add(5);
  it("should be defined ", function () {
    expect(linkedList.maxValue).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.maxValue).toBe("function");
  });
  it("should throw error", function () {
    var emptyLinkedList = new LinkedList();
    try {
      emptyLinkedList.maxValue();
    } catch (e) {
      expect(e.message).toBe("LinkedList is empty");
    }
  });
  it("should return minValue from LinkedList, minValue first Element", function () {
    expect(linkedList.maxValue()).toBe(6);
  });
  it("should return minValue from LinkedList, minValue last Element", function () {
    var testLinkedList = new LinkedList();
    testLinkedList.add(1);
    testLinkedList.add(3);
    testLinkedList.add(4);
    testLinkedList.add(6);
    expect(testLinkedList.maxValue()).toBe(6);
  });
  it("should return minValue from LinkedList, minValue not first and not last Element", function () {
    var extraTestLinkedList = new LinkedList();
    extraTestLinkedList.add(2);
    extraTestLinkedList.add(6);
    extraTestLinkedList.add(1);
    extraTestLinkedList.add(1);
    expect(extraTestLinkedList.maxValue()).toBe(6);
  });
});
describe("LinkedList minIndex", function () {
  var linkedList = new LinkedList();
  linkedList.add(6);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.add(4);
  linkedList.add(5);
  it("should be defined ", function () {
    expect(linkedList.minIndex).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.minIndex).toBe("function");
  });
  it("should throw error", function () {
    var emptyLinkedList = new LinkedList();
    try {
      emptyLinkedList.minIndex();
    } catch (e) {
      expect(e.message).toBe("LinkedList is empty");
    }
  });
  it("should return index of minimal element of LinkedList", function () {
    expect(linkedList.minIndex()).toBe(1);
  });
  it("should return index of minimal element of LinkedList, minimal element first", function () {
    var linkedListTurboTest = new LinkedList();
    linkedListTurboTest.add(1);
    linkedListTurboTest.add(2);
    linkedListTurboTest.add(100);
    linkedListTurboTest.add(200);
    expect(linkedListTurboTest.minIndex()).toBe(0);
  });
  it("should return index of minimal element of LinkedList, last element first", function () {
    var linkedListTurboTestExtra = new LinkedList();
    linkedListTurboTestExtra.add(35);
    linkedListTurboTestExtra.add(2);
    linkedListTurboTestExtra.add(100);
    linkedListTurboTestExtra.add(200);
    linkedListTurboTestExtra.add(1);
    expect(linkedListTurboTestExtra.minIndex()).toBe(4);
  });
});
describe("LinkedList maxIndex", function () {
  var linkedList = new LinkedList();
  linkedList.add(6);
  linkedList.add(2);
  linkedList.add(100);
  linkedList.add(4);
  linkedList.add(5);
  it("should be defined ", function () {
    expect(linkedList.maxIndex).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof linkedList.maxIndex).toBe("function");
  });
  it("should throw error", function () {
    var emptyLinkedList = new LinkedList();
    try {
      emptyLinkedList.maxIndex();
    } catch (e) {
      expect(e.message).toBe("LinkedList is empty");
    }
  });
  it("should return index of minimal element of LinkedList", function () {
    expect(linkedList.maxIndex()).toBe(2);
  });
  it("should return index of minimal element of LinkedList, maximal element first", function () {
    var linkedListTurboTest = new LinkedList();
    linkedListTurboTest.add(400);
    linkedListTurboTest.add(2);
    linkedListTurboTest.add(100);
    linkedListTurboTest.add(200);
    expect(linkedListTurboTest.maxIndex()).toBe(0);
  });
  it("should return index of minimal element of LinkedList, maximal element last", function () {
    var linkedListTurboTestExtra = new LinkedList();
    linkedListTurboTestExtra.add(35);
    linkedListTurboTestExtra.add(2);
    linkedListTurboTestExtra.add(100);
    linkedListTurboTestExtra.add(200);
    linkedListTurboTestExtra.add(8000);
    expect(linkedListTurboTestExtra.maxIndex()).toBe(4);
  });
});
