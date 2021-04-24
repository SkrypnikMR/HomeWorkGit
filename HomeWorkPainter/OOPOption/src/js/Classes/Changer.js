export default class Changer {
  constructor() {}
  setLineCap = (node, value) => {
    node.LineCap = value;
  };
  setStandartColor = (value, context) => {
    context.strokeStyle = value;
  };
  setStandartInterval(node, min, max) {
    node.min = min;
    node.max = max;
  }
  changeColor = (event, context) => {
    context.strokeStyle = `${event.target.value}`;
  };
  changeSizeText = (event, node) => {
    node.textContent = `Brash size: ${event.target.value} px`;
  };
  changeSize = (event, context, sliderTittle) => {
    this.changeSizeText(event, sliderTittle);
    console.log(event.target.value)
    context.lineWidth = event.target.value / 10;
  };
  changeSizeText = (event, sliderTittle) => {
    sliderTittle.textContent = `Brash size: ${event.target.value} px`;
  };
}
