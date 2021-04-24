var InterfaceList = require("../../Interfaces/InterfaceList");

function ArrayList(capacity) {
  this.size = 0;
  this.DEFAULT_CAPACITY = 10;
  this.array = (() => {
    if (!capacity) {
      return new Array(this.DEFAULT_CAPACITY);
    } else if (typeof capacity === "number") {
      return new Array(capacity);
    } else if (Array.isArray(capacity)) {
      this.size = capacity.length;
      return capacity;
    } else {
      throw new Error("only numbers or array arguments");
    }
  })();
  this.ensureCapacity = function () {
    var enlargedArray = new Array(
      this.array.length + Math.floor(this.array.length * 1.5)
    );
    for (var i = 0; i < this.array.length; i++) {
      enlargedArray[i] = this.array[i];
    }
    this.array = enlargedArray;
  };
}
ArrayList.prototype = Object.create(InterfaceList.prototype);
ArrayList.constructor = ArrayList;
ArrayList.prototype.getSize = function () {
  return this.size;
};
ArrayList.prototype.clear = function () {
  this.size = 0;
  this.array = new Array(this.DEFAULT_CAPACITY);
};
ArrayList.prototype.add = function (value) {
  if (this.size === this.array.length) {
    this.ensureCapacity();
  }
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] === undefined) {
      this.array[i] = value;
      this.size++;
      break;
    }
  }
};
ArrayList.prototype.set = function (value, index) {
  if (index < 0 || index > this.array.length - 1) {
    throw new Error(`ArrayList don't have this index`);
  }
  if (!this.array[index]) {
    this.array[index] = value;
    this.size++;
  } else {
    this.array[index] = value;
  }
};
ArrayList.prototype.get = function (index) {
  if (!this.array[index]) {
    throw new Error("Element in collection on this position is not defined");
  }
  return this.array[index];
};
ArrayList.prototype.toArray = function () {
  var result = [];
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] !== undefined) {
      result.push(this.array[i]);
    }
  }
  return result;
};
ArrayList.prototype.toString = function () {
  var result = "";
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] !== undefined) {
      result += this.array[i] + ",";
    }
  }
  var fullestResult = result.substr(0, result.length - 1);
  return fullestResult;
};
ArrayList.prototype.remove = function (value) {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] === value) {
      var deleteValue = this.array[i];
      delete this.array[i];
      this.size--;
      return deleteValue;
    }
  }
  throw new Error(`don't have this value in collection`);
};
ArrayList.prototype.contains = function (value) {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] === value) {
      return true;
    }
  }
  return false;
};
ArrayList.prototype.minValue = function () {
  if (this.getSize() === 0) {
    throw new Error("collection is empty");
  }
  var minValue = this.array[0];
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] < minValue) {
      minValue = this.array[i];
    }
  }
  return minValue;
};
ArrayList.prototype.maxValue = function () {
  if (this.getSize() === 0) {
    throw new Error("collection is empty");
  }
  var maxValue = this.array[0];
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] > maxValue) {
      maxValue = this.array[i];
    }
  }
  return maxValue;
};
ArrayList.prototype.minIndex = function () {
  if (this.getSize() === 0) {
    throw new Error("collection is empty");
  }
  var minValue = this.array[0];
  var minIndex;
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] < minValue) {
      minValue = this.array[i];
      minIndex = i;
    }
  }
  return minIndex;
};
ArrayList.prototype.maxIndex = function () {
  if (this.getSize() === 0) {
    throw new Error("collection is empty");
  }
  var maxValue = this.array[0];
  var maxIndex;
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] > maxValue) {
      maxValue = this.array[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};
ArrayList.prototype.reverse = function () {
  if (this.getSize() === 0) {
    throw new Error("collection is empty");
  }
  var newArray = [];
  var undef = [];
  for (var i = this.array.length - 1; i >= 0; i--) {
    if (this.array[i] === undefined) {
      undef.push(this.array[i]);
      continue;
    }
    newArray.push(this.array[i]);
  }
  this.array = newArray.concat(undef);
};
ArrayList.prototype.halfReverse = function () {
  if (this.getSize() === 0) {
    throw new Error("collection is empty");
  }
};

module.exports = ArrayList;
