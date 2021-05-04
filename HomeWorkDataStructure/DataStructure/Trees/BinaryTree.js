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
  this.secretArray = [];
  this.privateRun = function (node, mode, value) {
    if (node) {
      if (mode === 1) {
        this.privateRun(node.left, 1);
        this.array.push(node.value);
        this.privateRun(node.right, 1);
      }
      if (mode === 2) {
        if (node.value === value) {
          this.searchValue = node;
          return true;
        }
        if (node.value > value) {
          this.privateRun(node.left, 2, value);
        }
        if (node.value < value) {
          this.privateRun(node.right, 2, value);
        }
      }
      if (mode === 3) {
        this.searchValue = node;
        this.privateRun(node.left, 3);
      }
      if (mode === 4) {
        this.searchValue = node;
        this.privateRun(node.right, 4);
      }
      if(mode === 5){
        if(node.left === null && node.right === null){
          this.searchValue++;
        }
        this.privateRun(node.left, 5);
        this.privateRun(node.right, 5);
      }
      if(mode === 6){
        if(node.left !== null || node.right !== null){
          this.searchValue++;
        }
        this.privateRun(node.left, 6);
        this.privateRun(node.right, 6);
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
  this.secretArray.push(value);
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
  this.privateRun(this.root, 2, value);
  if (this.searchValue === null) {
    return -1;
  }
  var result = Object.assign(this.searchValue);
  this.searchValue = null;
  return result;
};

BinaryTree.prototype.remove = function (value) {
  var answer = this.search(value);
  if (answer === -1) {
    return answer;
  } else if (answer.left && answer.right) {
    var newArray = this.toArray();
    var indexofValue = newArray.indexOf(value);
    var newValue = newArray[indexofValue + 1];
    var newArr = [];
    for (var j = 0; j < this.secretArray.length; j++) {
      if (this.secretArray[j] === value) {
        this.secretArray[j] = newValue;
        newArr.push(this.secretArray[j]);
        continue;
      }
      if (this.secretArray[j] === newValue) {
        continue;
      }
      newArr.push(this.secretArray[j]);
    }
    this.secretArray.length = 0;
  } else {
    var newArr = [];
    for (var i = 0; i < this.secretArray.length; i++) {
      if (this.secretArray[i] === value) continue;
      newArr.push(this.secretArray[i]);
    }
    this.secretArray.length = 0;
  }
  this.root = null;
  this.init(newArr);
};
BinaryTree.prototype.minNode = function () {
  this.privateRun(this.root, 3);
  if (this.searchValue === null) {
    return -1;
  }
  var result = Object.assign(this.searchValue);
  this.searchValue = null;
  return result;
};
BinaryTree.prototype.maxNode = function () {
  this.privateRun(this.root, 4);
  if (this.searchValue === null) {
    return -1;
  }
  var result = Object.assign(this.searchValue);
  this.searchValue = null;
  return result;
};
BinaryTree.prototype.leaves = function () {
  if(this.root && this.root.left === null && this.root.right === null){
    return 0;
  }
  this.privateRun(this.root, 5);
  var result = this.searchValue;
  this.searchValue = null;
  return result;
};
BinaryTree.prototype.nodes = function () {
  if(this.root && this.root.left === null && this.root.right === null){
    return 1;
  }
  this.privateRun(this.root, 6);
  var result = this.searchValue;
  this.searchValue = null;
  return result;
};
BinaryTree.prototype.size = function(){
  if(this.root === null){
    return 0;
  }
  if(this.root && this.root.left === null && this.root.right === null){
    return 1;
  }
  return this.nodes() + this.leaves();
}

/* var b = new BinaryTree(); 
b.init([40]);
console.log(b.nodes()); */


module.exports = BinaryTree;
