import { FRAME_INTERVAL, FULL_WIDTH, FULL_HEIGHT } from "../constants";

export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.setOnClickCanvas(this.onClickCircle);
  }

  draw = () => {
    this.view.clear();
    this.view.drawCircle(this.model.circle);
  };

  play = () => {
    setInterval(() => {
      this.move();
      this.draw();
    }, FRAME_INTERVAL);
  };

  move = () => {
    const { circle } = this.model;

    const newX =
      circle.x + ((circle.speed * FRAME_INTERVAL) / 1000) * circle.dx;
    const newY =
      circle.y + ((circle.speed * FRAME_INTERVAL) / 1000) * circle.dy;

    circle.setX(newX);
    this.fixHorizontal(circle);
    circle.setY(newY);
    this.fixVertical(circle);
  };

  fixHorizontal = (circle) => {
    const { x, dx, radius } = circle;

    if (x - radius <= 0 || x + radius >= FULL_WIDTH) {
      circle.setDx(-dx);
    }
  };

  fixVertical = (circle) => {
    const { y, dy, radius } = circle;

    if (y - radius <= 0 || y + radius >= FULL_HEIGHT) {
      circle.setDy(-dy);
    }
  };

  onClickCircle = (x, y) => {
    const { x: circleX, y: circleY, radius } = this.model.circle;

    if (
      Math.abs(x - circleX) <= 2 * radius &&
      Math.abs(y - circleY) <= 2 * radius
    ) {
      console.log("---------------GOT IT!!!------------------");
    } else {
      console.log("---------------MISSED IT!!!------------------");
    }
  };
}
