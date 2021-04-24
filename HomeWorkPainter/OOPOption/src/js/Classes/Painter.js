export default class Painter {
  constructor() {}
  drawIfPressed = (event, context, coordsArray) => {
    if(!event || !context || !coordsArray){
      throw new Error('work only with all arguments')
    }
    const x = event.offsetX;
    const y = event.offsetY;
    const dx = event.movementX;
    const dy = event.movementY;
    if (event.buttons > 0) {
      coordsArray.push({
        x,
        y,
        dx,
        dy,
        color: context.strokeStyle,
        brash: context.lineWidth,
      });
      let lSArray = JSON.parse(sessionStorage.getItem("canvas"));
      lSArray.push({
        x,
        y,
        dx,
        dy,
        color: context.strokeStyle,
        brash: context.lineWidth,
      });
      sessionStorage.setItem("canvas", JSON.stringify(lSArray));
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x - dx, y - dy);
      context.stroke();
      context.closePath();
    }
  };
  drawLikeUser = (drowObject, context) => {
    const { x, y, dx, dy, color, brash } = drowObject;
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = brash;
    context.moveTo(x, y);
    context.lineTo(x - dx, y - dy);
    context.stroke();
    context.closePath();
  };
}
