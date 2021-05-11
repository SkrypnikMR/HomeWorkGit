import "regenerator-runtime/runtime";
import {
  hideModal,
  renderPhotos,
  changeImage,
  intrevalChangeImage,
} from "../src/js/render.js";

jest.mock("../src/js/photosRender/photoRender.js", () => ({
  renderBigPhoto: jest.fn(),
  renderSmallPhotos: jest.fn(),
}));
import {
  renderBigPhoto,
  renderSmallPhotos,
} from "../src/js/photosRender/photoRender.js";
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
  it("should renderBigPhoto and renderSmallPhotos", () => {
    const data = [1, 2];
    const bigPhoto = {};
    const smallPhoto = {};
    renderPhotos(data, bigPhoto, smallPhoto);
    expect(renderBigPhoto).toHaveBeenCalledWith(data[0], bigPhoto);
    expect(renderSmallPhotos).toHaveBeenCalledWith(data, smallPhoto);
  });
});
describe("changeImage", () => {
  it("should be defined", () => {
    expect(changeImage).toBeDefined();
  });
  it("should be function", () => {
    expect(typeof changeImage).toBe("function");
  });
  it("should to do nothing and return nothing", () => {
    const event = {target:{nodeName: 'kek'}}
    expect(changeImage(event)).toBe();
  });
  it("should changeImage", () => {
    const addMock = jest.fn();
    const addEvent = jest.fn();
    const mockRemove = jest.fn();
    const removeEvent = jest.fn();
    const event = {
      target: {
        nodeName: "IMG",
        src: "3",
        classList: { add: addEvent, remove: removeEvent },
      },
    };
    const node = { classList: { add: addMock, remove: mockRemove }, src: "" };

    changeImage(event, node);
    jest.advanceTimersByTime(4001);
    expect(node.classList.add).toHaveBeenCalledWith("gone");
    expect(event.target.classList.add).toHaveBeenCalledWith("came");
    expect(node.classList.remove).toHaveBeenCalledWith("gone");
    expect(event.target.classList.remove).toHaveBeenCalledWith("came");
    expect(clearInterval).toHaveBeenCalled();
    expect(node.src).toBe(event.target.src);
  });
});
describe("intrevalChangeImage", () => {
  it("should be defined", () => {
    expect(intrevalChangeImage).toBeDefined();
  });
  it("should be function", () => {
    expect(typeof intrevalChangeImage).toBe("function");
  });
  it("should not use setInterval if we stop interval < 3000 seconds", async () => {
    const nodeClassListRemove = jest.fn();
    const node = { classList: { remove: nodeClassListRemove } };
    const modalTitle = { children: [{ children: [{ src: "1" }] }] };
    const data = [
      { urls: { regular: "kek" } },
      { urls: { regular: "grek" } },
      { urls: { regular: "fek" } },
    ];
    const lastImage = "lastImage";
    expect(intrevalChangeImage(node, data, modalTitle, lastImage)).toBe(2);
    expect(nodeClassListRemove).toHaveBeenCalledWith("hide");
    expect(modalTitle.children[0].children[0].src).toBe(lastImage);
  });
  it("should call setInterval twice", async () => {
    const nodeClassListRemove = jest.fn();
    const node = { classList: { remove: nodeClassListRemove } };
    const modalTitle = { children: [{ children: [{ src: "1" }] }] };
    const data = [
      { urls: { regular: "kek" } },
      { urls: { regular: "grek" } },
      { urls: { regular: "fek" } },
    ];
    const lastImage = "lastImage";
    intrevalChangeImage(node, data, modalTitle, lastImage);
    jest.advanceTimersByTime(6001);
    expect(modalTitle.children[0].children[0].src).toBe(data[2].urls.regular);
  });
  it("should photoindex + 1 >= data.length", async () => {
    const nodeClassListRemove = jest.fn();
    const node = { classList: { remove: nodeClassListRemove } };
    const modalTitle = { children: [{ children: [{ src: "1" }] }] };
    const data = [{ urls: { regular: "kek" } }, { urls: { regular: "grek" } }];
    const lastImage = "lastImage";
    intrevalChangeImage(node, data, modalTitle, lastImage);
    jest.advanceTimersByTime(6001);
    expect(modalTitle.children[0].children[0].src).toBe(data[1].urls.regular);
  });
});
