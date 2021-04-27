var {
  complexFunction,
  cache,
  isVasyaGiveChange,
  getQuntityPostsAndCommentsByAuthor,
  getSum
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
  it('if arguments in cache', function () {
    var complexFunction = jest.fn()
    var func = cache(complexFunction)
    func('1', 2)
    func('1', 2)
    func('1', 2)
    func('1', 2)
    expect(complexFunction).toBeCalledTimes(1);
  })
  it('if diffrent arguments', function () {
    var complexFunction = jest.fn()
    var func = cache(complexFunction)
    func('1', 2)
    func('1', 2)
    func('1', 3)
    func('1', 2)
    expect(complexFunction).toBeCalledTimes(2);
  })
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
    expect(isVasyaGiveChange([100, 25, 25, 25, 25])).toBe("NO");
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

describe("getSum", function () {
  it("should be defined ", function () {
    expect(getSum).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof getSum).toBe("function");
  });
  it("should be without arguments", function () {
    expect(getSum()).toBe('invalid arguments');
  });
  it("should be only with one argument", function () {
    expect(getSum('1')).toBe('invalid arguments');
  });
  it("should be with two string arguments", function(){
    expect(getSum('1','2')).toBe('3');
  })
  it("should be with two string arguments with different length", function(){
    expect(getSum('1','22')).toBe('23');
  })
  it("should be with two string arguments with different length", function(){
    expect(getSum('1','22')).toBe('23');
    expect(getSum('122','22')).toBe('144');
  })
  it("should be with two string arguments, and them elements after addition become more than 10", function(){
    expect(getSum('99','99')).toBe('198');
    expect(getSum('4444','7777')).toBe('12221');
  })
});
