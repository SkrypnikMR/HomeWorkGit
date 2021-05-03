var BinaryTree = require('../Trees/BinaryTree');

describe("BinaryTree insert", function () {
    var bTree = new BinaryTree();
    bTree.init([25,15,35,66,-60,-105,5,15,75,34]);
  it("should be defined ", function () {
    expect(bTree.insert).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof bTree.insert).toBe("function");
  });
  it("should add to binary tree", function () {
       
  });
});
