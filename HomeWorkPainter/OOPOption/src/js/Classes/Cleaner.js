export default class Cleaner {
    constructor(){}
    clearCanvas = (context, canvas) => {
        context.clearRect(0, 0, canvas.width, canvas.height);
      };
}