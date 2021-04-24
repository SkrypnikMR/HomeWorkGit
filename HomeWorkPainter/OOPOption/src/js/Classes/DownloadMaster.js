export default class DownloadMaster {
  constructor() {}
  downloadCanvasAsImg = (canvas) => {
    const link = document.createElement("a");
    link.setAttribute("download", "canvas.png");
    link.setAttribute(
      "href",
      canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
    );
    link.click();
  };
  downloadCanvasAsJSON = (array) => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(array));
    const link = document.createElement("a");
    link.setAttribute("download", "SkripnikCanvas.json");
    link.setAttribute("href", dataStr);
    link.click();
  };
}
