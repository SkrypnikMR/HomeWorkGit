function getFigureOne(n) {
  var result = "\n";
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      result += " * ";
    }
    result += "\n";
  }
  return result;
}
function getFigureTwo(n) {
  var result = "\n";

  for (var i = 0; i <= n - 1; i++) {
    result += " * ";
    for (var j = 0; j < n - 2; j++) {
      if (i !== n - 1 && i !== 0) {
        result += "   ";
      } else result += " * ";
    }
    result += "* \n";
  }
  return result;
}

function getFigureThree(n) {
  var result = "\n";
  for (var i = 0; i < n; i++) {
    result += " * ";
    for (var j = 0; j < n - 1; j++) {
      if (i === 0 || j === n - i - 2) {
        result += " * ";
      } else {
        result += "   ";
      }
    }
    result += " \n";
  }
  return result;
}

function getFigureFour(n) {
  var result = "\n";
  for (var i = 0; i < n; i++) {
    result += " * ";
    for (var j = 0; j < n - 1; j++) {
      if (i === n - 1 || j === i - 1) {
        result += " * ";
      } else {
        result += "   ";
      }
    }
    result += " \n";
  }
  return result;
}

function getFigureFive(n) {
  var result = "\n";
  for (var i = 0; i < n; i++) {
    result += "   ";
    for (var j = 0; j < n - 1; j++) {
      if (i === n - 1 || j === n - (i + 1)) {
        result += " * ";
      } else {
        result += "   ";
      }
    }
    result += " *\n";
  }
  return result;
}

function getFigureSix(n) {
  var result = "\n";
  for (var i = 0; i < n; i++) {
    result += "   ";
    for (var j = 0; j < n - 1; j++) {
      if (i === 0 || j === i) {
        result += " * ";
      } else result += "   ";
    }
    result += " *\n";
  }
  return result;
}

function getFigureSeven(n) {
  var result = "\n";
  for (var i = 0; i < n; i++) {
    result += "   ";
    for (var j = 0; j < n; j++) {
      if (i === j || j === n - i - 1) {
        result += " * ";
      } else result += "   ";
    }
    result += " \n";
  }
  return result;
}

function getFigureEight(n) {
  var result = "\n";
  for (var i = 0; i < n; i++) {
    result += "   ";
    for (var j = 0; j < n; j++) {
      if (i < n / 2) {
        if (i === 0 || j === i || j === n - i - 1) {
          result += " * ";
        } else {
          result += "   ";
        }
      }
    }
    result += " \n";
  }
  return result;
}

function getFigureNine(n) {
  var result = "\n";
  for (var i = 0; i < n; i++) {
    result += "   ";
    for (var j = 0; j < n; j++) {
      if (i > n / 2 - 1) {
        if (i === n - 1 || j === i || j === n - i - 1) {
          result += " * ";
        } else {
          result += "   ";
        }
      }
    }
    result += " \n";
  }
  return result;
}
