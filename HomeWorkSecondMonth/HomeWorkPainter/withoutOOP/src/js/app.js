import "../css/style.css";
const init = () => {
  const canvas = document.querySelector("canvas"); // canvas node
  const context = canvas.getContext("2d"); //canvas context
  const clearButton = document.querySelector(".buttons__clear"); // clear button
  const downloadImage = document.querySelector(".buttons__download-image"); // download image;
  const downloadJson = document.querySelector(".buttons__download-json"); // download json;
  const restoreButton = document.querySelector(".buttons__restore");
  const colors = document.querySelector(".pallete__colors"); // colors node
  const slider = document.querySelector(".slider__input");
  const sliderTittle = document.querySelector(".tittle__text");
  localStorage.setItem("canvas", JSON.stringify([]));
  slider.min = 1;
  slider.max = 50;
  context.lineCap = "round";
  var coordsArray = [];
  canvas.addEventListener("mousemove", (event) => {
    drawIfPressed(event, context, coordsArray);
  });
  colors.addEventListener("click", (event) => {
    changeColor(event, context);
  });
  slider.addEventListener("change", (event) => {
    changeSize(event, context, sliderTittle);
  });
  clearButton.addEventListener("click", () => {
    clearCanvas(context, canvas);
  });
  restoreButton.addEventListener("click", () => {
    const array = JSON.parse(localStorage.getItem("canvas"));
    for (var i = 0; i < array.length; i++) {
      drawLikeUser(array[i], context);
    }
  });
  downloadImage.addEventListener("click", () => {
    downloadCanvasAsImg(canvas);
  });
  downloadJson.addEventListener("click", () => {
    downloadCanvasAsJSON(coordsArray);
  });
};
const drawIfPressed = (event, context, coordsArray) => {
  const x = event.offsetX;
  const y = event.offsetY;
  const dx = event.movementX;
  const dy = event.movementY;
  if (event.buttons > 0) {
    coordsArray.push({x, y, dx, dy, color:context.strokeStyle, brash: context.lineWidth});
    let lSArray = JSON.parse(localStorage.getItem("canvas"));
    lSArray.push({x, y, dx, dy, color:context.strokeStyle, brash: context.lineWidth});
    localStorage.setItem("canvas", JSON.stringify(lSArray));
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x - dx, y - dy);
    context.stroke();
    context.closePath();
  }
};
const drawLikeUser = ({x, y, dx, dy, color, brash}, context) => {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = brash;
  context.moveTo(x, y);
  context.lineTo(x - dx, y - dy);
  context.stroke();
  context.closePath();
};
const clearCanvas = (context, canvas) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};
const changeColor = (event, context) => {
  context.strokeStyle = `${event.target.value}`;
};
const changeSize = (event, context, sliderTittle) => {
  changeSizeText(event, sliderTittle);
  context.lineWidth = event.target.value / 10;
};
const changeSizeText = (event, sliderTittle) => {
  sliderTittle.textContent = `Brash size: ${event.target.value} px`;
};
const downloadCanvasAsImg = (canvas) => {
  const link = document.createElement("a");
  link.setAttribute("download", "canvas.png");
  link.setAttribute(
    "href",
    canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
  );
  link.click();
};
const downloadCanvasAsJSON = (array) => {
  const dataStr =
    "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(array));
  const link = document.createElement("a");
  link.setAttribute("download", "SkripnikCanvas.json");
  link.setAttribute("href", dataStr);
  link.click();
};

init();
