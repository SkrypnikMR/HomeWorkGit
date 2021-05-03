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
  this.inOrderTraverse = function(node, callback){
      if(node){
          this.inOrderTraverse(node.left,callback)
          callback(node.value)
          this.inOrderTraverse(node.right,callback)
      }
  }
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
BinaryTree.prototype.insert = function (value) {
  var newNode = new this.Node(value);
  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};
BinaryTree.prototype.print = function (type,callback){
    switch(type) {
        case 'pre-order' : 
        break;
        case 'post-order' :
        break;
        case 'in': this.inOrderTraverse(this,root, callback)
    }
}

module.exports = BinaryTree;
