import "regenerator-runtime/runtime";
import { hideModal, renderPhotos, changeImage} from "../src/js/render.js";
global.fetch = require("node-fetch");
jest.useFakeTimers();
describe("hideModal", () => {
  it("should be defined", () => {
    expect(hideModal).toBeDefined();
  });
  it("should be function", () => {
    expect(typeof hideModal).toBe("function");
  });
  it("should call clearInterval", () => {
    const lastInterval = 6;
    const modalAddMock = jest.fn();
    const modal = { classList: { add: modalAddMock } };
    jest.useFakeTimers();
    hideModal(lastInterval, modal);
    expect(clearInterval).toHaveBeenCalledWith(lastInterval);
    expect(modal.classList.add).toHaveBeenCalledWith("hide");
  });
});
describe("renderPhotos", () => {
  it("should be defined", () => {
    expect(renderPhotos).toBeDefined();
  });
  it("should be function", () => {
    expect(typeof renderPhotos).toBe("function");
  });
/*   it("should kek", () => {
    const data = [1, 2];
    const bigPhoto = {};
    const smallPhoto = {};
    const renderBigPhoto = jest.fn();
    const renderSmallPhotos = jest.fn();
    expect(renderPhotos(data, bigPhoto, smallPhoto, renderBigPhoto, renderSmallPhotos)).toBe();
    expect(renderBigPhoto).toHaveBeenCalledWith(data[0],bigPhoto);
    expect(renderSmallPhotos).toHaveBeenCalledWith(data, smallPhoto);
  }); */
});


describe("changeImage", () => {
  it("should be defined", () => {
    expect(changeImage).toBeDefined();
  });
  it("should be function", () => {
    expect(typeof changeImage).toBe("function");
  });
  it("should changeImage", () => {
    const addMock = jest.fn();
    const addEvent = jest.fn();
    const mockRemove = jest.fn();
    const removeEvent = jest.fn();
    const event = {target:{nodeName: 'IMG',src:'3', classList:{add:addEvent, remove: removeEvent}}}
    const node = {classList: {add: addMock, remove: mockRemove}, src: ''}
    jest.advanceTimersByTime(4000);
/*     expect(changeImage(event,node)).toBe('3'); */
/*     expect(setTimeout).toHaveBeenCalled();

    expect(clearInterval).toHaveBeenCalled(); */
  });
});