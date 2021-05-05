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
    expect(mockPrivateRun).toHaveBeenCalledWith(bTree.root, 'arrayMode');
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
    expect(bTree.privateRun).toHaveBeenCalledWith(bTree.root, 'searchMode', testValue);
  });
  it("should return -1 if serchValue === 0", function () {
    var bTreeTest1 = new BinaryTree();
    var testSearchValue = 4;
    bTreeTest1.init([1, 2, 3]);
    expect(bTreeTest1.search(testSearchValue)).toBe(-1);
  });
  it("should return node if searchValue === argument value ", function () {
    var bTreeTest2 = new BinaryTree();
    var testSearchValue = 4;
    bTreeTest2.init([1, 2, 3, 24, 345, 5, -100, 3, 4]);
    expect(bTreeTest2.search(testSearchValue)).toEqual({
      value: 4,
      left: null,
      right: null,
    });
  });
});
describe("BinaryTree remove", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.remove).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.remove).toBe("function");
  });
  it("this search return -1 ", function () {
    var test1BT = new BinaryTree();
    var value = 4;
    test1BT.init([1, 2, 3]);
    var mockSearch = jest.fn().mockReturnValue(-1);
    test1BT.search = mockSearch;
    expect(test1BT.remove(value)).toBe(-1);
    expect(mockSearch).toHaveBeenCalledWith(value);
  });
  it("should remove value and remove this value from secretArray ", function () {
    var test2BT = new BinaryTree();
    var value = 38;
    var testArray = [30, 18, 22, 31, 34, 21, 15];
    test2BT.init([30, 18, 22, 38, 31, 34, 21, 15]);
    test2BT.remove(value);
    expect(test2BT.secretArray).toEqual(testArray);
  });
  it("should remove value and remove this value from secretArray and value in secret array === next bigest", function () {
    var test3BT = new BinaryTree();
    var value = 38;
    var testArray = [30, 18, 22, 40, 31, 34, 21, 15];
    test3BT.init([30, 18, 22, 38, 31, 34, 21, 15, 40]);
    test3BT.remove(value);
    expect(test3BT.secretArray).toEqual(testArray);
  });
  it("should remove value from tree", function () {
    var test4BT = new BinaryTree();
    var value = 38;
    test4BT.init([30, 18, 22, 38, 31, 34, 21, 15]);
    test4BT.remove(value);
    expect(test4BT.search(value)).toBe(-1);
  });
});
describe("BinaryTree minNode", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.minNode).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.minNode).toBe("function");
  });
  it("should return -1 if don't initialize tree", function () {
    var bTreeTest1 = new BinaryTree();
    var privateRunMock = jest.fn();
    bTreeTest1.privateRun = privateRunMock;
    expect(bTreeTest1.minNode()).toBe(-1);
    expect(bTreeTest1.privateRun).toHaveBeenCalledWith(bTreeTest1.root, 'minNodeMode');
  });
  it("should return min value and set searchValue to null", function () {
    var b = new BinaryTree();
    var expectResult = {
      left: null,
      right: { left: null, right: null, value: 15 },
      value: -100,
    };
    b.init([30, 18, 22, 38, -100, 31, 34, 21, 15, 40]);
    expect(b.minNode()).toEqual(expectResult);
    expect(b.searchValue).toBe(null);
  });
});
describe("BinaryTree maxNode", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.maxNode).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.maxNode).toBe("function");
  });
  it("should return -1 if don't initialize tree", function () {
    var bTreeTest1 = new BinaryTree();
    var privateRunMock = jest.fn();
    bTreeTest1.privateRun = privateRunMock;
    expect(bTreeTest1.maxNode()).toBe(-1);
    expect(bTreeTest1.privateRun).toHaveBeenCalledWith(bTreeTest1.root, 'maxNodeMode');
  });
  it("should return max value and set searchValue to null", function () {
    var b = new BinaryTree();
    var expectResult = {
      left: null,
      right: null,
      value: 40,
    };
    b.init([30, 18, 22, 38, -100, 31, 34, 21, 15, 40]);
    expect(b.maxNode()).toEqual(expectResult);
    expect(b.searchValue).toBe(null);
  });
});
describe("BinaryTree leaves", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.leaves).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.leaves).toBe("function");
  });
  it("should return 0 if we have only root in Tree", function () {
    var test1Tree = new BinaryTree();
    test1Tree.insert(5);
    expect(test1Tree.leaves()).toBe(0);
  });
  it("should privateRun to have been called with this.root and mode === 'leavesCountMode' ", function () {
    var test2Tree = new BinaryTree();
    test2Tree.init([3, 4, 5, 6, 7]);
    var mockPrivateRun = jest.fn();
    test2Tree.privateRun = mockPrivateRun;
    test2Tree.leaves();
    expect(test2Tree.privateRun).toHaveBeenCalledWith(test2Tree.root, 'leavesCountMode');
  });
  it("should ", function () {
    var test3Tree = new BinaryTree();
    test3Tree.init([3, 4, 5, 6, 7]);
    expect(test3Tree.leaves()).toBe(1);
    expect(test3Tree.searchValue).toEqual(null);
  });
});
describe("BinaryTree nodes", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.nodes).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.nodes).toBe("function");
  });
  it("should return 0 if we have only root in Tree", function () {
    var test1Tree = new BinaryTree();
    test1Tree.insert(5);
    expect(test1Tree.nodes()).toBe(1);
  });
  it("should privateRun to have been called with this.root and mode === 5", function () {
    var test2Tree = new BinaryTree();
    test2Tree.init([3, 4, 5, 6, 7]);
    var mockPrivateRun = jest.fn();
    test2Tree.privateRun = mockPrivateRun;
    test2Tree.nodes();
    expect(test2Tree.privateRun).toHaveBeenCalledWith(test2Tree.root, 'nodesCountMode');
  });
  it("should ", function () {
    var test3Tree = new BinaryTree();
    test3Tree.init([3, 4, 5, 6, 7]);
    expect(test3Tree.nodes()).toBe(4);
    expect(test3Tree.searchValue).toEqual(null);
  });
});
describe("BinaryTree size", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.size).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.size).toBe("function");
  });
  it("should return 0 if we not insert or initialize something in Tree", function () {
    var test1 = new BinaryTree();
    expect(test1.size()).toBe(0);
  });
  it("should return 1 if we have only root in tree", function () {
    var test2 = new BinaryTree();
    test2.insert(1);
    expect(test2.size()).toBe(1);
    expect(test2.root).not.toEqual(null);
  });
  it("should return size of the tree", function () {
    var test3 = new BinaryTree();
    test3.init([40, 15, 31, 55, 42, 41, 61, 21, 56, 11, 28, 67, 2, 5, 39]);
    expect(test3.size()).toBe(15);
    expect(test3.size()).toBe(test3.secretArray.length);
  });
}); 
describe("BinaryTree height", function () {
  var bTree = new BinaryTree();
  it("should be defined ", function () {
    expect(bTree.height).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.height).toBe("function");
  });
  it("should return 0 if we not insert or initialize something in Tree", function () {
    var test1 = new BinaryTree();
    expect(test1.height()).toBe(-1);
  });
  it("should return 0 if we not insert or initialize something in Tree", function () {
    var testPrivateRun = new BinaryTree();
    var mockPrivateRun = jest.fn();
    testPrivateRun.privateRun = mockPrivateRun;
    testPrivateRun.init([1,2,3])
    testPrivateRun.height()
    expect(mockPrivateRun).toHaveBeenCalledWith(testPrivateRun.root, 'heightCountMode');
  });
  it("should return 1 if we have only root in tree", function () {
    var test2 = new BinaryTree();
    test2.insert(1);
    expect(test2.height()).toBe(0);
    expect(test2.root).not.toEqual(null);
  });
  it("should return height of the tree", function () {
    var test3 = new BinaryTree();
    test3.init([40, 15, 31, 55, 42, 41, 61, 21, 56, 11, 28, 67, 2, 5, 39,85,86,87,88]);
    expect(test3.height()).toBe(7);
  });
}); 