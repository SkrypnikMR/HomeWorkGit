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
  changeSizeText = (event, node) => {
    if (!node || !value) {
      throw new Error("work only with all arguments");
    }
    node.textContent = `Brash size: ${event.target.value} px`;
  };
  changeSize = (event, context, sliderTittle) => {
    this.changeSizeText(event, sliderTittle);
    context.lineWidth = event.target.value / 10;
  };
  changeSizeText = (event, sliderTittle) => {
    sliderTittle.textContent = `Brash size: ${event.target.value} px`;
  };
}
