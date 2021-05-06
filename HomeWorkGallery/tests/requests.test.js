import "regenerator-runtime/runtime";
import { getRequest } from "../src/js/requests";
global.fetch = require("node-fetch");

describe("getRequest", () => {
  it("should be defined", async () => {
    expect(getRequest).toBeDefined();
  });
  it("should be function", async () => {
    expect(typeof getRequest).toBe("function");
  });
  it("should call fetch", async () => {
    const url = `https://jsonplaceholder.typicode.com/todos/1`;
    const naturalFetch = global.fetch;
    const mockFetcJson = jest.fn();
    const mockFetch = jest.fn().mockReturnValue({ json: mockFetcJson });
    global.fetch = mockFetch;
    return getRequest(url).then(() => {
      global.fetch = naturalFetch;
      expect(mockFetch).toHaveBeenCalledWith(url);
      expect(mockFetcJson).toHaveBeenCalled();
    });
  });
  it("should return asnwer", async () => {
    const url = `https://jsonplaceholder.typicode.com/todos/1`;
    return getRequest(url).then((data) => {
      expect(data).toEqual({
        completed: false,
        id: 1,
        title: "delectus aut autem",
        userId: 1,
      });
    });
  });
});
