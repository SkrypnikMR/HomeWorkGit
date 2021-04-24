import "../css/style.css";
import Painter from "./Classes/Pointer";
import Cleaner from "./Classes/Cleaner";
import Changer from "./Classes/Changer";
import DownloadMaster from "./Classes/DownloadMaster";

const init = () => {
  const canvas = document.querySelector("canvas"); // canvas node
  const context = canvas.getContext("2d"); //canvas context
  const clearButton = document.querySelector(".buttons__clear"); // clear button
  const downloadImage = document.querySelector(".buttons__download-image"); // download image;
  const downloadJson = document.querySelector(".buttons__download-json"); // download json;
  const restoreButton = document.querySelector(".buttons__restore");
  const colors = document.querySelector(".colors__body"); // colors node
  const slider = document.querySelector(".slider__input"); // input for change brash size node
  const sliderTittle = document.querySelector(".tittle__text"); // title over imput for change brash size node
  const painter = new Painter(); // Pointer class instance for draw;
  const cleaner = new Cleaner(); // Cleaner class instance for clean canvas;
  const changer = new Changer(); // Changer class instance for change color or brash size;
  const downloadMaster = new DownloadMaster(); // DownloadMaster class instance for help with download canvas image in JSON or PNG
  var coordsArray = []; // array to downloadMaster
  sessionStorage.setItem("canvas", JSON.stringify([])); // empty canvas array to sessionStorage
  changer.changeColor(colors.value, context); // set standart color for brash from input color type value
  changer.setStandartInterval(slider, 1, 50); // set standart interval of input type range for brash size;

  canvas.addEventListener("mousemove", (event) => {
    painter.drawIfPressed(event, context, coordsArray);
  });
  colors.addEventListener("change", (event) => {
    changer.changeColor(event.target.value, context);
  });
  slider.addEventListener("change", (event) => {
    changer.changeSize(event.target.value, context, sliderTittle);
  });
  clearButton.addEventListener("click", () => {
    cleaner.clearCanvas(context, canvas);
  });
  restoreButton.addEventListener("click", () => {
    const array = JSON.parse(sessionStorage.getItem("canvas"));
    for (var i = 0; i < array.length; i++) {
      painter.drawLikeUser(array[i], context);
    }
  });
  downloadImage.addEventListener("click", () => {
    downloadMaster.downloadCanvasAsImg(canvas);
  });
  downloadJson.addEventListener("click", () => {
    downloadMaster.downloadCanvasAsJSON(coordsArray);
  });
};
init();
