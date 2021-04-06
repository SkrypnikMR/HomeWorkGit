/* Новый фильм "Как натренировать своего дракона” только выпустили! В кассах кинотеатра много людей, 
стоящих в огромную очередь. У каждого из них есть банкнота в 100, 50 или 25 долларов. Билет на «Бэтмен против Супермена:
 На заре справедливости» стоит 25 долларов. Вася в настоящее время работает клерком. Он хочет продать билет каждому человеку
  в этой очереди. Может ли Вася продать каждому билет и отдать сдачу, если у него изначально нет денег и он продает билеты строго 
  в том порядке, в котором люди следуют в очереди? Верните YES, если Вася может продать каждому билет и отдать сдачу. В противном 
  случае верните NO. Может ли Вася продать каждому билет и отдать сдачу?
Условия:
* принимает массив из очереди людей
* возвращает строку */

function isVasyaGiveChange(array) {
  var cash25 = 0;
  var cash50 = 0;
  for (var greenback of array) {
    if (greenback === 25) {
      cash25++;
    }
    if (greenback === 50) {
      cash50++;
      cash25--;
    }
    if (greenback === 100) {
      cash25--;
      cash50 > 0 ? cash50-- : (cash25 -= 2);
    }
    if (cash25 < 0 || cash50 < 0) return "NO";
  }
  return "YES";
}
/* Создайте функцию, которая получает два аргумента: первый - это массив объектов, второй - строка
 (имя автора). Ваша функция должна возвращать количество сообщений с автором из аргумента функции и комментариев
  с тем же автором. Пример массива: */
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

// cerebral palsy options
function getQuntityPostsByAuthor(array, authorName) {
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

/* console.log(getSum('9  999', '9999')) */

/* 4.Напишите функцию кеш
let complexFunction = function (arg1,arg2) {
	rerurn arg1+arg2; //just for example (any logic can be here)
	}
	let cachedFunc = cache(complexFunction);
	 cachedFunc(‘foo’, ‘bar’) // complexFunction должна выполнится
 cachedFunc(‘foo’, ‘bar’) // complexFunction не должна выполняться  				// снова,должен вернуться кеш
cachedFunc(‘foo’, ‘baz’) // complexFunction должна выполнится
//потому что метод не вызывался раньше с этими аргументами */

function complexFunction(arg1, arg2){
  console.log('raz');
  return arg1+arg2;
}

function cache(func){
  var cache = '';

  return function(arg1,arg2){
    if(cache === arg1 + arg2){
      return cache;
    }
    else return cache = func(arg1, arg2);
  }

}

var cachedFunc = cache(complexFunction);

console.log(cachedFunc('foo', 'bar'));
console.log(cachedFunc('foo', 'bar'));
console.log(cachedFunc('foo', 'baz'));


