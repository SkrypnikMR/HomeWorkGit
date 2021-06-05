import { init } from "../src/js/init/app.js";
import { htmlTemplate } from "./htmlTemplate.js";
import Painter from "../src/js/Classes/Painter";
import Cleaner from "../src/js/Classes/Cleaner";
import Changer from "../src/js/Classes/Changer";
import DownloadMaster from "../src/js/Classes/Changer";
jest.mock("../src/js/Classes/Painter", () => {
  return jest.fn().mockImplementation(() => {
    return { drawIfPressed: jest.fn(), drawLikeUser: jest.fn() };
  });
});
jest.mock("../src/js/Classes/Cleaner", () => {
  return jest.fn().mockImplementation(() => {
    return { clearCanvas: jest.fn() };
  });
});
jest.mock("../src/js/Classes/Changer", () => {
  return jest.fn().mockImplementation(() => {
    return {
      changeColor: jest.fn(),
      changeColor: jest.fn(),
      changeSize: jest.fn(),
      clearCanvas: jest.fn(),
      setStandartInterval: jest.fn(),
    };
  });
});
jest.mock("../src/js/Classes/DownloadMaster", () => {
  return jest.fn().mockImplementation(() => {
    return { downloadCanvasAsImg: jest.fn(), downloadCanvasAsJSON: jest.fn() };
  });
});

describe("init", () => {
  it("should be defined", () => {
    expect(init).toBeDefined();
  });
  it("should be function", () => {
    expect(typeof init).toBe("function");
  });
  it("should initialization", () => {
    document.body.innerHTML = htmlTemplate;
    const canvas = document.querySelector("canvas");
    const colors = document.querySelector(".colors__body");
    const clearButton = document.querySelector(".buttons__clear");
    const slider = document.querySelector(".slider__input");
    const restoreButton = document.querySelector(".buttons__restore");
    const downloadImage = document.querySelector(".buttons__download-image"); 
    const downloadJson = document.querySelector(".buttons__download-json");
    JSON.parse = jest.fn().mockImplementation(() => {
      return [{}, {}];
    });
    init();
    expect(Changer).toHaveBeenCalled();
    expect(Painter).toHaveBeenCalled();
    expect(DownloadMaster).toHaveBeenCalled();
    expect(Cleaner).toHaveBeenCalled();
    canvas.dispatchEvent(new Event("mousemove"));
    colors.dispatchEvent(new Event("change"));
    clearButton.dispatchEvent(new Event("click"));
    slider.dispatchEvent(new Event("change"));
    restoreButton.dispatchEvent(new Event("click"));
    downloadImage.dispatchEvent(new Event("click"));
    downloadJson.dispatchEvent(new Event("click"));
    expect(JSON.parse).toHaveBeenCalled();
  });
});
