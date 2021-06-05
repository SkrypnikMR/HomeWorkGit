export default class Changer {
  constructor() {}
  setLineCap = (node, value) => {
    if (!node || !value) {
      throw new Error("work only with all arguments");
    }
    node.LineCap = value;
  };
  changeColor = (value, context) => {
    if (!context || !value) {
      throw new Error("work only with all arguments");
    }
    context.strokeStyle = value;
  };
  setStandartInterval(node, min, max) {
    if (!node || !min || !max) {
      throw new Error("work only with all arguments");
    }
    node.min = min;
    node.max = max;
  }
  changeSizeText = (text, node) => {
    if (!text || !node) {
      throw new Error("work only with all arguments");
    }
    node.textContent = `Brash size: ${text} px`;
  };
  changeSize = (size, context, node) => {
    if (!size || !context || !node) {
      throw new Error("work only with all arguments");
    }
    this.changeSizeText(size, node);
    context.lineWidth = size / 10;
  };
}
