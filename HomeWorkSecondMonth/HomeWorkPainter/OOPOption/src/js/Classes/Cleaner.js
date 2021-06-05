export default class Cleaner {
    constructor(){}
    clearCanvas = (context, canvas) => {
      if(!context || !canvas){
        throw new Error('work only with all arguments')
      }
        context.clearRect(0, 0, canvas.width, canvas.height);
      };
}