var InterfaceTree = require("../../Interfaces/InterfaceTree");

function BinaryTree() {
  this.root = null;
  this.Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
  this.insertNode = function (node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };
  this.inOrderTraverse = function (node, callback) {
    if (node) {
      this.inOrderTraverse(node.left, callback);
      callback(node.value);
      this.inOrderTraverse(node.right, callback);
    }
  };
  this.array = [];
  this.searchValue = null;
  this.privateRun = function (node, mode, value) {
    if (node) {
      if (mode === 1) {
        this.privateRun(node.left, 1);
        this.array.push(node.value);
        this.privateRun(node.right, 1);
      }
      if (mode === 2) {
        if(node.value === value){
          this.searchValue = node;
          return true;
        }
        if(node.value > value){
          this.privateRun(node.left, 2, value);
        }
        if(node.value < value){
          this.privateRun(node.right, 2, value);
        }
        
      }
    }
    return -1;
  };
}

BinaryTree.prototype = Object.create(InterfaceTree.prototype);
BinaryTree.constructor = BinaryTree;
BinaryTree.prototype.init = function (array) {
  if (!Array.isArray(array)) {
    return -1;
  }
  for (var i = 0; i < array.length; i++) {
    this.insert(array[i]);
  }
};
BinaryTree.prototype.clear = function () {
  this.root = null;
};
BinaryTree.prototype.insert = function (value) {
  var newNode = new this.Node(value);
  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};
BinaryTree.prototype.print = function (type, callback) {
  switch (type) {
    case "pre-order":
      break;
    case "post-order":
      break;
    case "in":
      this.inOrderTraverse(this.root, callback);
  }
};
BinaryTree.prototype.toArray = function () {
  this.privateRun(this.root, 1);
  var array = new Array(this.array.length);
  for (var i = 0; i < this.array.length; i++) {
    array[i] = this.array[i];
  }
  this.array.length = 0;
  return array;
};
BinaryTree.prototype.search = function (value) {
  this.privateRun(this.root,2, value)
  if(this.searchValue === null){
    return -1;
  }
  var result = Object.assign(this.searchValue);
  this.searchValue = null;
  return result;
};


module.exports = BinaryTree;
