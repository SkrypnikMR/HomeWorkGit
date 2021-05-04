var BinaryTree = require("../Trees/BinaryTree");

describe("BinaryTree init", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.init).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.init).toBe("function");
  });
  it("should return -1 if argument !== array ", function () {
    expect(bTree.init("2")).toBe(-1);
  });
  it("should return -1 if argument !== array ", function () {
    expect(bTree.init(1)).toBe(-1);
  });
  it("should return -1 if argument !== array ", function () {
    expect(bTree.init({ a: 2 })).toBe(-1);
  });
  it("should return -1 if argument !== array ", function () {
    var mockFn1 = jest.fn();
    expect(bTree.init(mockFn1)).toBe(-1);
  });
  it("should call insert method times like count of elements in argument array", function () {
    var argArray = [1, 2, 3, 4];
    var mockFn2 = jest.fn();
    bTree.insert = mockFn2;
    bTree.init(argArray);
    expect(mockFn2).toBeCalledTimes(argArray.length);
    expect(mockFn2).toBeCalledWith(argArray[0]);
    expect(mockFn2).toBeCalledWith(argArray[1]);
    expect(mockFn2).toBeCalledWith(argArray[2]);
    expect(mockFn2).toBeCalledWith(argArray[3]);
  });
});
describe("BinaryTree clear", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.clear).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.clear).toBe("function");
  });
  it("should after call clear this root === null ", function () {
    bTree.insert(25);
    var oldRoot = bTree.root;
    bTree.clear();
    expect(bTree.root).not.toEqual(oldRoot);
    expect(bTree.root).toBe(null);
  });
});
describe("BinaryTree insert", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.insert).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.insert).toBe("function");
  });
  it("should call this.Node ", function () {
    var mockNode = jest.fn().mockImplementation((value) => {
      this.value = value;
      this.left = null;
      this.right = null;
    });
    var value = 25;
    bTree.Node = mockNode;
    bTree.insert(value);
    expect(mockNode).toHaveBeenCalledWith(value);
  });
  it("should this.root = newNode ", function () {
    var bTreeOne = new BinaryTree();
    var testValue = 25;
    bTreeOne.insert(testValue);
    expect(bTreeOne.root).toEqual({
      value: testValue,
      left: null,
      right: null,
    });
    expect(bTreeOne.root.value).toBe(testValue);
    expect(bTreeOne.root.left).toBe(null);
    expect(bTreeOne.root.right).toBe(null);
  });
  it("should this.inserNode to haveBeenCalledWith our root and newNode ", function () {
    var bTreeTwo = new BinaryTree();
    var testValue = 25;
    var testValue1 = 26;
    var mockInsertNode = jest.fn();
    bTreeTwo.insertNode = mockInsertNode;
    bTreeTwo.insert(testValue);
    bTreeTwo.insert(testValue1);
    expect(mockInsertNode).toHaveBeenCalledWith(bTreeTwo.root, {
      value: testValue1,
      left: null,
      right: null,
    });
  });
});
describe("BinaryTree toArray", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.toArray).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.toArray).toBe("function");
  });
  it("should called help method privateRun", function () {
    var mockPrivateRun = jest.fn();
    bTree.privateRun = mockPrivateRun;
    bTree.init([25, -25, 35]);
    bTree.toArray();
    expect(mockPrivateRun).toHaveBeenCalledWith(bTree.root, 1);
  });
  it("should set array.length a 0 ", function () {
    var bTreeOne = new BinaryTree();
    bTreeOne.init([25, -25, 35]);
    bTreeOne.array = [1, 2, 3];
    var oldLength = bTreeOne.array.length;
    bTreeOne.toArray();
    expect(bTreeOne.array.length).toBe(0);
    expect(bTreeOne.array.length).not.toBe(oldLength);
  });
  it("should return array with values of binary tree", function () {
    var bTreeTwo = new BinaryTree();
    var testArray = [-3, 6, 25, 45];
    bTreeTwo.init([25, 45, 6, -3]);
    expect(bTreeTwo.toArray()).toEqual(testArray);
  });
});
describe("BinaryTree search", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.search).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.search).toBe("function");
  });
  it("should call help method", function () {
    var mockPrivateRun = jest.fn();
    var testValue = 1;
    bTree.privateRun = mockPrivateRun;
    bTree.search(testValue);
    expect(bTree.privateRun).toHaveBeenCalledWith(bTree.root, 2, testValue);
  });
  it("should return -1 if serchValue === 0", function () {
    var bTreeTest1 = new BinaryTree();
    var testSearchValue = 4;
    bTreeTest1.init([1,2,3]);
    expect(bTreeTest1.search(testSearchValue)).toBe(-1);
  });
  it("should return node if searchValue === argument value ", function () {
    var bTreeTest2 = new BinaryTree();
    var testSearchValue = 4;
    bTreeTest2.init([1,2,3,24,345,5,-100,3,4]);
    console.log(bTreeTest2.toArray());
    expect(bTreeTest2.search(testSearchValue)).toEqual({value:4, left:null, right:null});
  });
});
