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

// dcp variant
function getQuntityPostsByAuthor(array, authorName) {
  var postsCounter = 0;
  var commentsCounter = 0;
    function counters(array, authorName){
        for (var i = 0; i < array.length; i++) {
            if (!array[i].hasOwnProperty("comment") && array[i].author === authorName) {
              postsCounter++;
            }
            if (array[i].hasOwnProperty("comment") && array[i].author === authorName) {
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

console.log(getQuntityPostsByAuthor(listOfPosts2, "Rimus"));
