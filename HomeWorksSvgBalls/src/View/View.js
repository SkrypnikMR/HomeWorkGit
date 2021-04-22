import { MAX_HEIGHT, MAX_WIDTH, TIMER } from "../constants";
import { Circle } from "../model";

export default class View {
  constructor() {
    this.circle = null;
    this.allCircles = [];
  }

  drawOnClick = (el, cb) => {
    el.addEventListener("click", cb);
  };

  drawCircle = (e) => {
    this.circle = new Circle(e.offsetX, e.offsetY);
    this.circle.init();
    this.allCircles.push(this.circle);
  };

  rerender = () => {
    this.allCircles.forEach((el,i,arr) => {
      const newX = el.x + ((el.speed * TIMER) / 1000) * el.dx,
        newY = el.y + ((el.speed * TIMER) / 1000) * el.dy;
      el.setX(newX);
      el.setY(newY);

      this.allCircles.forEach((element, index, array) => {
        if (element.x === el.x) {
          return;
        }
        console.log(arr === array)
        if (
          !(
            el.x - el.radius <= element.x - el.radius ||
            el.x + el.radius >= element.x + element.radius
          )
        ) {
          el.setDx(el.x + ((el.speed * TIMER) / 1000) * el.dx);
        }
        if (
          !(
            el.y - el.radius <= element.y - el.radius ||
            el.y + el.radius >= element.y + element.radius
          )
        ) {
          el.setDy(el.y + ((el.speed * TIMER) / 1000) * el.dy);
        }
      });
      this.fixHorizontal(el);
      this.fixVertical(el);
    });
  };

  fixHorizontal = (el) => {
    const { x, dx, radius } = el;
    if (x - radius <= 0 || x + radius >= MAX_WIDTH) {
      el.setDx(dx * -1);
    }
  };

  fixVertical = (el) => {
    const { y, dy, radius } = el;
    if (y - radius <= 0 || y + radius >= MAX_HEIGHT) {
      el.setDy(dy * -1);
    }
  };
}
