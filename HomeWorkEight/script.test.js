var {
  complexFunction,
  cache,
  isVasyaGiveChange,
  getQuntityPostsAndCommentsByAuthor,
} = require("./script");

describe("complexFunction", function () {
  it("should be defined ", function () {
    expect(complexFunction).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof complexFunction).toBe("function");
  });
  it("should be without arguments", function () {
    expect(complexFunction()).toBe(NaN);
  });
  it("should be only with one string argument", function () {
    expect(complexFunction("heh")).toBe("hehundefined");
  });
  it("should be only with one number argument", function () {
    expect(complexFunction(1)).toBe(NaN);
  });
  it("should be only with one number argument", function () {
    expect(complexFunction(1)).toBe(NaN);
  });
  it("should be  with one number argument and with second string argument", function () {
    expect(complexFunction(1, "da")).toBe("1da");
  });
  it("should be  with one string argument and with second number argument", function () {
    expect(complexFunction("da", 1)).toBe("da1");
  });
});
describe("cache", function () {
  it("should be defined ", function () {
    expect(complexFunction).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof cache).toBe("function");
  });
  it("should be without arguments", function () {
    expect(typeof cache()).toBe("function"); //просто проверили что вернули функцию
  });
  it("should be with function arguments", function () {
    function func(arg1, arg2) {
      return arg1, arg2;
    }
    function test2(arg1, arg2) {
      return arg1 - arg2;
    }
    expect(typeof cache(func)).toBe("function");
    expect(typeof cache(test2)).toBe("function");
  });
});
describe("isVasyaGiveChange", function () {
  it("should be defined ", function () {
    expect(isVasyaGiveChange).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof isVasyaGiveChange).toBe("function");
  });
  it("argument shouldn`t be array", function () {
    expect(isVasyaGiveChange(1)).toBe(false);
  });
  it("argument shouldn`t be array", function () {
    expect(isVasyaGiveChange(1)).not.toBe("NO");
  });
  it("argument shouldn`t be array", function () {
    expect(isVasyaGiveChange(1)).not.toBe("YES");
  });
  it("vasya doesn`t have change", function () {
    expect(isVasyaGiveChange([25, 50, 100])).toBe("NO");
  });
  it("vasya doesn`t have change", function () {
    expect(isVasyaGiveChange([25, 50, 100])).not.toBe("YES");
  });
  it("vasya doesn`t have change", function () {
    expect(isVasyaGiveChange([25, 50, 100])).not.toBe(false);
  });
  it("vasya have change", function () {
    expect(isVasyaGiveChange([25, 25, 25, 50, 25, 100])).toBe("YES");
  });
  it("vasya doesn`t have change", function () {
    expect(isVasyaGiveChange([25, 25, 25, 50, 25, 100])).not.toBe("NO");
  });
  it("vasya doesn`t have change", function () {
    expect(isVasyaGiveChange([25, 25, 25, 50, 25, 100])).not.toBe(false);
  });
});
describe("getQuntityPostsAndCommentsByAuthor", function () {
  var listOfPosts2 = [
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
  it("should be defined ", function () {
    expect(getQuntityPostsAndCommentsByAuthor).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getQuntityPostsAndCommentsByAuthor).toBe("function");
  });
  it("should first argument is array, second argument - string", function () {
    expect(getQuntityPostsAndCommentsByAuthor([{a: 'da'}], "da")).toStrictEqual([0,0]);
  });
  it("should first argument is not array", function () {
    expect(getQuntityPostsAndCommentsByAuthor('da', 'da')).toBe('invalid arguments');
  });
  it("should second argument is not string", function () {
    expect(getQuntityPostsAndCommentsByAuthor(['dad'], {f:'d'})).toBe('invalid arguments');
  });
  it("should normaly result", function () {
    expect(getQuntityPostsAndCommentsByAuthor(listOfPosts2, 'Rimus')).toStrictEqual([1,3]);
  });
  it("should not invalid arguments", function () {
    expect(getQuntityPostsAndCommentsByAuthor(listOfPosts2, 'Rimus')).not.toBe('invalid arguments');
  })
});
