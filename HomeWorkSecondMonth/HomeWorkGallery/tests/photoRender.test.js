import "regenerator-runtime/runtime";
import {
  renderBigPhoto,
  renderSmallPhotos,
} from "../src/js/photosRender/photoRender.js";
describe("renderBigPhoto", () => {
  it("should be defined", () => {
    expect(renderBigPhoto).toBeDefined();
  });
  it("should be function", () => {
    expect(typeof renderBigPhoto).toBe("function");
  });
  it("should call all node AppendChild", () => {
    const dataItem = { urls: { regular: "imagePath" } };
    const nodeAppendChildMock = jest.fn().mockImplementation(function (arg) {
      this.item = arg;
    });
    const node = { appendChild: nodeAppendChildMock };
    renderBigPhoto(dataItem, node);
    expect(node.appendChild).toHaveBeenCalled();
    expect(node.item.children[0].getAttribute("src")).toBe(
      dataItem.urls.regular
    );
  });
});
describe("renderSmallPhotos", () => {
  it("should be defined", () => {
    expect(renderSmallPhotos).toBeDefined();
  });
  it("should be function", () => {
    expect(typeof renderSmallPhotos).toBe("function");
  });
  it("should call node appendChild", () => {
    const data = [
      { urls: { regular: "photoImage1" } },
      { urls: { regular: "photoImage2" } },
      { urls: { regular: "photoImage3" } },
    ];
    const nodeAppendChildMock = jest.fn().mockImplementation(function (arg) {
      this.item = arg;
    });
    const node = { appendChild: nodeAppendChildMock };
    renderSmallPhotos(data, node);
    expect(node.appendChild).toHaveBeenCalledTimes(2);
    expect(node.item.classList.contains("body__item")).toBe(true);
    expect(node.item.children[0].getAttribute("src")).toBe(
      data[2].urls.regular
    );
  });
});
