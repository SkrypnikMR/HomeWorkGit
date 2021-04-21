export default class Circle {
  x = 0;
  y = 0;
  dx = 0;
  dy = 0;
  radius = 0;
  color = "black";
  speed = 0;
  constructor(startCircle) {
    const { x, y, dx, dy, radius, color, speed } = startCircle;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
  }
  setX = (dx) => {
    this.dx = dx;
  };
  setY = (dy) => {
    this.dy = dy;
  };
  setX = (x) => (this.x = x);
  setY = (y) => (this.y = y);
}
