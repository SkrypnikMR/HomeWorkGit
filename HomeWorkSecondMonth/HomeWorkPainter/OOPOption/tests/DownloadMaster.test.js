import { experiments } from "webpack";
import DownloadMaster from "../src/js/Classes/DownloadMaster";

describe("DownloadMaster downloadCanvasAsImg", () => {
  const downloadMaster = new DownloadMaster();
  it("should to be defined", () => {
    expect(downloadMaster.downloadCanvasAsImg).toBeDefined();
  });
  it("should to be function", () => {
    expect(typeof downloadMaster.downloadCanvasAsImg).toBe("function");
  });
  it("should called without arguments", () => {
    try {
      downloadMaster.downloadCanvasAsImg();
    } catch (e) {
      expect(e.message).toBe("work only with argument");
    }
  });
  it("should called all methods in function", () => {
    const canvas = { toDataURL: jest.fn(() => "132") };
    const temp = document.createElement;
    document.createElement = jest
      .fn()
      .mockReturnValue({ setAttribute: jest.fn(), click: jest.fn() });
    downloadMaster.downloadCanvasAsImg(canvas);
    expect(canvas.toDataURL).toHaveBeenCalled();
    expect(document.createElement).toHaveBeenCalled();
    expect(document.createElement().setAttribute).toHaveBeenCalledTimes(2);
    expect(document.createElement().click).toHaveBeenCalledTimes(1);
    document.createElement = temp;
  });
});
describe("DownloadMaster downloadCanvasAsJSON", () => {
  const downloadMaster = new DownloadMaster();
  it("should to be defined", () => {
    expect(downloadMaster.downloadCanvasAsJSON).toBeDefined();
  });
  it("should to be function", () => {
    expect(typeof downloadMaster.downloadCanvasAsJSON).toBe("function");
  });
  it("should called without arguments", () => {
    try {
      downloadMaster.downloadCanvasAsJSON();
    } catch (e) {
      expect(e.message).toBe("work only with argument");
    }
  });
  it("should called all methods in function", () => {
    const array = [1, 2, 3];
    const temp = document.createElement;
    document.createElement = jest
      .fn()
      .mockReturnValue({ setAttribute: jest.fn(), click: jest.fn() });
    downloadMaster.downloadCanvasAsJSON(array);
    expect(document.createElement).toHaveBeenCalled();
    expect(document.createElement().setAttribute).toHaveBeenCalledTimes(2);
    expect(document.createElement().click).toHaveBeenCalledTimes(1);
    document.createElement = temp;
  });
});
