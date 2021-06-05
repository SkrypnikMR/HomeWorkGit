var InterfaceList = require("../../Interfaces/InterfaceList");

function LinkedList() {
  this.size = 0;
  this.root = null;
  this.Node = function (value) {
    this.value = value;
    this.next = null;
  };
  this.__reverseList = function (root) {
    if (root == null || root.next == null) {
      return root;
    }
    var newRoot = this.__reverseList(root.next);
    root.next.next = root;
    root.next = null;
    return newRoot;
  };
  this.__privateSort = function (array) {
    if (array.length < 2) {
      return array;
    } else {
      var center = array[Math.floor(Math.random() * array.length)];
      var less = [];
      var greater = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i] < center) less.push(array[i]);
        else if (array[i] > center) greater.push(array[i]);
      }
    }
    return this.__privateSort(less)
      .concat(center)
      .concat(this.__privateSort(greater));
  };
}

LinkedList.prototype = Object.create(InterfaceList.prototype);
LinkedList.constructor = LinkedList;
LinkedList.prototype.clear = function () {
  this.size = 0;
  this.root = null;
};
LinkedList.prototype.getSize = function () {
  return this.size;
};
LinkedList.prototype.add = function (value) {
  if (typeof value !== "number") {
    throw new Error("only number type of argument");
  }
  var newNode = new this.Node(value);
  this.size++;
  if (!this.root) {
    this.root = newNode;
  } else {
    var tempNode = this.root;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
  }
};
LinkedList.prototype.toArray = function () {
  if (this.size === 0) {
    return new Array();
  }
  var array = new Array(this.size);
  var tempNode = this.root;
  var index = 0;
  while (tempNode !== null) {
    array[index++] = tempNode.value;
    tempNode = tempNode.next;
  }
  return array;
};
LinkedList.prototype.set = function (value, index) {
  if (typeof value !== "number" || typeof index !== "number") {
    throw new Error("work only with number value and number index");
  }
  if (this.size - 1 < index) {
    throw new Error(`Out of range of the linkedList`);
  }
  var tempNode = this.root;
  var count = 0;
  while (count !== index) {
    tempNode = tempNode.next;
    count++;
  }
  tempNode.value = value;
};
LinkedList.prototype.get = function (index) {
  if (typeof index !== "number" || arguments.length > 1) {
    throw new Error("work only with one number argument");
  }
  if (this.size - 1 < index) {
    throw new Error(`Out of range of the linkedList`);
  }
  var tempNode = this.root;
  var count = 0;
  while (count !== index) {
    tempNode = tempNode.next;
    count++;
  }
  return tempNode.value;
};
LinkedList.prototype.remove = function (value) {
  if (typeof value !== "number" || arguments.length > 1) {
    throw new Error("work only with one number argument");
  }
  var tempNode = this.root;
  var prevNode = null;
  while (tempNode !== null) {
    if (tempNode.value === value) {
      if (prevNode === null) {
        this.root = tempNode.next;
      } else {
        prevNode.next = tempNode.next;
      }
      this.size--;
      return tempNode.value;
    } else {
      prevNode = tempNode;
      tempNode = tempNode.next;
    }
  }
};
LinkedList.prototype.toString = function () {
  if (this.size === 0) {
    return "";
  }
  var string = "";
  var tempNode = this.root;
  while (tempNode !== null) {
    string += tempNode.value;
    if (tempNode.next === null) {
      break;
    }
    string += ",";
    tempNode = tempNode.next;
  }
  return string;
};
LinkedList.prototype.contains = function (value) {
  var tempNode = this.root;
  while (tempNode !== null) {
    if (tempNode.value === value) {
      return true;
    }
    tempNode = tempNode.next;
  }
  return false;
};
LinkedList.prototype.minValue = function () {
  if (this.size === 0) {
    return -1;
  }
  var tempNode = this.root;
  var minValue = this.root.value;
  while (tempNode !== null) {
    if (minValue > tempNode.value) {
      minValue = tempNode.value;
    }
    tempNode = tempNode.next;
  }
  return minValue;
};
LinkedList.prototype.maxValue = function () {
  if (this.size === 0) {
    return -1;
  }
  var tempNode = this.root;
  var maxValue = this.root.value;
  while (tempNode !== null) {
    if (maxValue < tempNode.value) {
      maxValue = tempNode.value;
    }
    tempNode = tempNode.next;
  }
  return maxValue;
};
LinkedList.prototype.minIndex = function () {
  if (this.size === 0) {
    return -1;
  }
  var tempNode = this.root;
  var minValue = this.root.value;
  var index = 0;
  var count = 0;
  while (tempNode !== null) {
    if (minValue > tempNode.value) {
      index = count;
      minValue = tempNode.value;
    }
    tempNode = tempNode.next;
    count++;
  }
  return index;
};
LinkedList.prototype.maxIndex = function () {
  if (this.size === 0) {
    return -1;
  }
  var tempNode = this.root;
  var minValue = this.root.value;
  var index = 0;
  var count = 0;
  while (tempNode !== null) {
    if (minValue < tempNode.value) {
      index = count;
      minValue = tempNode.value;
    }
    tempNode = tempNode.next;
    count++;
  }
  return index;
};
LinkedList.prototype.reverse = function () {
  if (this.root === null) {
    return;
  }
  this.root = this.__reverseList(this.root);
};
LinkedList.prototype.halfReverse = function () {
  if (this.root === null || this.root.next === null) {
    return;
  }
  if (this.size === 2) {
    var timeArray = new Array(this.root.value, this.root.next.value);
    this.root.value = timeArray[1];
    this.root.next.value = timeArray[0];
    timeArray.length = 0;
    return;
  }
  var center = Math.floor(this.size / 2);
  var newRoot = this.root;
  var newTail = new LinkedList();
  var count = 0;
  while (count !== center) {
    count++;
    newTail.add(newRoot.value);
    newRoot = newRoot.next;
  }
  this.root = newRoot;
  var tempNode = this.root;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
    if (tempNode.next === null) {
      tempNode.next = newTail.root;
      break;
    }
  }
};
LinkedList.prototype.print = function () {
  var printString = "";
  var tempNode = this.root;
  while (tempNode !== null) {
    printString += tempNode.value + "\n" + "\u2193" + "\n";
    tempNode = tempNode.next;
  }
  printString += "null";
  console.log(printString);
};
LinkedList.prototype.removeAll = function (array) {
  if (array.length < 1 || !Array.isArray(array)) {
    return;
  }
  for (var i = 0; i < array.length; i++) {
    if (!this.contains(array[i]) || array[i] === undefined) {
      continue;
    }
    var tempNode = this.root;
    while (tempNode !== null) {
      if (tempNode.value === array[i]) {
        this.remove(array[i]);
      }
      tempNode = tempNode.next;
    }
  }
};
LinkedList.prototype.retainAll = function (array) {
  if (array.length < 1 || !Array.isArray(array)) {
    return;
  }
  var size = this.size > array.length ? this.size : array.length;
  var tempArray = [];
  for (var i = 0; i < size; i++) {
    var tempNode = this.root;
    while (tempNode !== null) {
      if (tempNode.value !== array[i]) {
        tempArray.push(tempNode.value);
      }
      tempNode = tempNode.next;
    }
  }
  for (var j = 0; j < tempArray.length; j++) {
    for (var k = 0; k < array.length; k++) {
      if (array[k] === tempArray[j]) {
        tempArray[j] = undefined;
      }
    }
  }
  this.removeAll(tempArray);
};
LinkedList.prototype.sort = function(){
  var oldArray = this.toArray(this.root);
  var newArray = this.__privateSort(oldArray);
  var newLinkedList = new LinkedList();
  for(var i = 0; i < newArray.length; i++){
    newLinkedList.add(newArray[i]);
  }
  this.root = newLinkedList.root;
}


module.exports = LinkedList;
