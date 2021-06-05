import "regenerator-runtime/runtime";
import { init } from "../src/js/init.js";
jest.mock("../src/js/render.js", () => ({
  hideModal: jest.fn(),
  renderPhotos: jest.fn(),
  changeImage: jest.fn(),
  intrevalChangeImage: jest.fn(),
}));
jest.mock("../src/js/requests.js", () => ({
  getRequest: jest.fn().mockReturnValue([{ a: 1 }]),
}));
jest.mock("../src/js/constants.js", () => ({
  URL: "kekURL",
}));
import {
  hideModal,
  renderPhotos,
  changeImage,
  intrevalChangeImage,
} from "../src/js/render";
import { getRequest } from "../src/js/requests.js";
import { URL } from "../src/js/constants.js";

global.fetch = require("node-fetch");

describe("init", () => {
  it("should be defined", () => {
    expect(init).toBeDefined();
  });
  it("should be function", () => {
    expect(typeof init).toBe("function");
  });
  it("should called", async () => {
    document.body.innerHTML = `<div class="gallery">
    <div class="gallery__title" id="bigPhoto"></div>
    <div class="gallery__button">
      <button id="intervalButton">Click me</button>
    </div>
    <div class="gallery__body" id="smallPhoto"></div>
  </div>
  <div class="modal hide">
    <div class="modal__title" id="bigPhotoModal">
      <div class="title__photo" id="item">
        <img class="modal__photo" />
      </div>
    </div>
    <div><img id="bigImage"></div>
    <div class="modal__button"><button id="x">X</button></div>
  </div>`;
    const bigPhoto = document.querySelector("#bigPhoto");
    const smallPhoto = document.querySelector("#smallPhoto");
    return init().then(() => {
      expect(getRequest).toHaveBeenCalledWith(URL);
      expect(renderPhotos).toHaveBeenCalledWith(
        getRequest(URL),
        bigPhoto,
        smallPhoto
      );
      smallPhoto.click();
      expect(changeImage).toHaveBeenCalled();
      const xButton = document.querySelector("#x");
      xButton.click();
      expect(hideModal).toHaveBeenCalled();
      const intervalButton = document.querySelector("#intervalButton");
      intervalButton.click();
      expect(intrevalChangeImage).toHaveBeenCalled();
    });
  });
});
