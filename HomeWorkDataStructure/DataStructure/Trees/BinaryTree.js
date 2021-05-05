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
      if (mode === "arrayMode") {
        this.privateRun(node.left, "arrayMode");
        this.array.push(node.value);
        this.privateRun(node.right, "arrayMode");
      }
      if (mode === "searchMode") {
        if (node.value === value) {
          this.searchValue = node;
          return true;
        }
        if (node.value > value) {
          this.privateRun(node.left, "searchMode", value);
        }
        if (node.value < value) {
          this.privateRun(node.right, "searchMode", value);
        }
      }
      if (mode === "minNodeMode") {
        this.searchValue = node;
        this.privateRun(node.left, "minNodeMode");
      }
      if (mode === "maxNodeMode") {
        this.searchValue = node;
        this.privateRun(node.right, "maxNodeMode");
      }
      if (mode === "leavesCountMode") {
        if (node.left === null && node.right === null) {
          this.searchValue++;
        }
        this.privateRun(node.left, "leavesCountMode");
        this.privateRun(node.right, "leavesCountMode");
      }
      if (mode === "nodesCountMode") {
        if (node.left !== null || node.right !== null) {
          this.searchValue++;
        }
        this.privateRun(node.left, "nodesCountMode");
        this.privateRun(node.right, "nodesCountMode");
      }
      if (mode === "heightCountMode") {
        return (
          1 +
          Math.max(
            this.privateRun(node.left, "heightCountMode"),
            this.privateRun(node.right, "heightCountMode")
          )
        );
      }
    }
    return 0;
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
  this.privateRun(this.root, "arrayMode");
  var array = new Array(this.array.length);
  for (var i = 0; i < this.array.length; i++) {
    array[i] = this.array[i];
  }
  this.array.length = 0;
  return array;
};
BinaryTree.prototype.search = function (value) {
  this.privateRun(this.root, "searchMode", value);
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
  this.privateRun(this.root, "minNodeMode");
  if (this.searchValue === null) {
    return -1;
  }
  var result = Object.assign(this.searchValue);
  this.searchValue = null;
  return result;
};
BinaryTree.prototype.maxNode = function () {
  this.privateRun(this.root, "maxNodeMode");
  if (this.searchValue === null) {
    return -1;
  }
  var result = Object.assign(this.searchValue);
  this.searchValue = null;
  return result;
};
BinaryTree.prototype.leaves = function () {
  if (this.root && this.root.left === null && this.root.right === null) {
    return 0;
  }
  this.privateRun(this.root, "leavesCountMode");
  var result = this.searchValue;
  this.searchValue = null;
  return result;
};
BinaryTree.prototype.nodes = function () {
  if (this.root && this.root.left === null && this.root.right === null) {
    return 1;
  }
  this.privateRun(this.root, "nodesCountMode");
  var result = this.searchValue;
  this.searchValue = null;
  return result;
};
BinaryTree.prototype.size = function () {
  if (this.root === null) {
    return 0;
  }
  if (this.root && this.root.left === null && this.root.right === null) {
    return 1;
  }
  return this.nodes() + this.leaves();
};
BinaryTree.prototype.height = function () {
  if (this.root && this.root.left === null && this.root.right === null) {
    return 0;
  }
  var result = this.privateRun(this.root, "heightCountMode");
  return result -1;
};

/* var b = new BinaryTree();
b.init([40, 15, 31, 55, 42, 41, 61, 21, 56, 11, 28, 67, 2, 5, 39,85,86,87,88]);
console.log(b.height()); */

module.exports = BinaryTree;
