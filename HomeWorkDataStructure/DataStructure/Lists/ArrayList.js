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
  this.array[index] = value;
};

module.exports = ArrayList;
