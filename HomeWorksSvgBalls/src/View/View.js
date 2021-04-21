import { FULL_HEIGHT, FULL_WIDTH } from "../constants";

export class View {
  constructor() {
    this.root = null;
    this.ctx = null;
    this.onClickCanvas = null;

    this.init();
  }

  init = () => {
    this.root = document.getElementById("root");
    const canvas = document.createElement("canvas");
    canvas.width = FULL_WIDTH;
    canvas.height = FULL_HEIGHT;
    canvas.addEventListener("click", (event) => {
      this.onClickCanvas && this.onClickCanvas(event.offsetX, event.offsetY);
    });
    canvas.style = "border: 2px solid magenta";

    this.root.appendChild(canvas);
    this.ctx = canvas.getContext("2d");
  };

  drawCircle = (circle) => {
    const { x, y, radius, color } = circle;

    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
  };

  clear = () => {
    this.ctx.clearRect(0, 0, FULL_WIDTH, FULL_HEIGHT);
  };

  setOnClickCanvas = (callback) => {
    this.onClickCanvas = callback;
  };
}
