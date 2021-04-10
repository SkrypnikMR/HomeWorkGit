// Vasya Clerk
function isVasyaGiveChange(array) {
  var cash25 = 0;
  var cash50 = 0;
  for (var money of array) {
    if (money === 25) {
      cash25++;
    }
    if (money === 50) {
      cash50++;
      cash25--;
    }
    if (money === 100) {
      cash25--;
      cash50 > 0 ? cash50-- : (cash25 -= 2);
    }
    if (cash25 < 0 || cash50 < 0) return "NO";
  }
  return "YES";
}
// function with recursion to  get quntity posts and comments by author
function getQuntityPostsAndCommentsByAuthor(array, authorName) {
  var postsCounter = 0;
  var commentsCounter = 0;
  function counters(array, authorName) {
    for (var i = 0; i < array.length; i++) {
      if (
        !array[i].hasOwnProperty("comment") &&
        array[i].author === authorName
      ) {
        postsCounter++;
      }
      if (
        array[i].hasOwnProperty("comment") &&
        array[i].author === authorName
      ) {
        commentsCounter++;
      }
      if (array[i].comments) {
        counters(array[i].comments, authorName);
      }
    }
  }
  counters(array, authorName);
  return [postsCounter, commentsCounter];
}
let listOfPosts2 = [
  {
    id: 1,
    post: "some post1",
    title: "title 1",
    author: "Ivanov",
    comments: [
      {
        id: 1.1,
        comment: "some comment1",
        title: "title 1",
        author: "Rimus",
      },
      {
        id: 1.2,
        comment: "some comment2",
        title: "title 2",
        author: "Uncle",
      },
    ],
  },
  {
    id: 2,
    post: "some post2",
    title: "title 2",
    author: "Ivanov",
    comments: [
      {
        id: 1.1,
        comment: "some comment1",
        title: "title 1",
        author: "Rimus",
      },
      {
        id: 1.2,
        comment: "some comment2",
        title: "title 2",
        author: "Uncle",
      },
      {
        id: 1.3,
        comment: "some comment3",
        title: "title 3",
        author: "Rimus",
      },
    ],
  },
  {
    id: 3,
    post: "some post3",
    title: "title 3",
    author: "Rimus",
  },
  {
    id: 4,
    post: "some post4",
    title: "title 4",
    author: "Uncle",
  },
];

// summ without math
function getSum(str1, str2) {
  var sum = "",
    rememberNum = 0;
  for (var i = str1.length - 1; i >= 0; i--) {
    if (i < str1.length - str2.length) {
      if (+str1[i] + rememberNum >= 10) {
        sum += +str1[i] + rememberNum - 10;
        rememberNum = 1;
      } else {
        sum += +str1[i] + rememberNum;
        rememberNum = 0;
      }
    } else if (+str1[i] + +str2[i - (str1.length - str2.length)] >= 10) {
      sum +=
        +str1[i] + +str2[i - (str1.length - str2.length)] - 10 + rememberNum;
      rememberNum = 1;
    } else {
      sum += +str1[i] + +str2[i - (str1.length - str2.length)] + rememberNum;
      rememberNum = 0;
    }
  }

  sum = rememberNum === 0 ? sum : sum + rememberNum;
  sum = sum.split("").reverse().join("");
  return sum;
}

// cache

function complexFunction(arg1, arg2) {
  return arg1 + arg2;
}

function cache(func) {
  var cache = [];

  return function (arg1, arg2) {

    for (var i = 0; i < cache.length; i++) {
      if (arguments[0] === cache[i].arg1 && arguments[1] === cache[i].arg2) {
        return cache[i].result
      }
    }
    var result = func(arg1, arg2);
    cache.push({ arg1: arguments[0], arg2: arguments[1], result});
    return result;
  };
}
var cachedFunc = cache(complexFunction);

