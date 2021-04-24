import Painter from "../src/js/Classes/Painter";

const painter = new Painter();
describe("Painter drawIfPressed", () => {
  const event = {
    offsetX: 1,
    offsetY: 2,
    movementX: 3,
    movementY: 4,
    buttons: 0,
  };
  const context = {
    strokeStyle: "red",
    lineWidth: 10,
    beginPath: jest.fn(),
    moveTo: jest.fn(),
    lineTo: jest.fn(),
    stroke: jest.fn(),
    closePath: jest.fn(),
  };
  const testArray = [];
  sessionStorage.getItem = jest.fn().mockReturnValue([""]);
  JSON.parse = jest.fn().mockReturnValue([]);
  it("should to be defined", () => {
    expect(painter.drawIfPressed).toBeDefined();
  });
  it("should to be function", () => {
    expect(typeof painter.drawIfPressed).toBeDefined();
  });
  it("should called without arguments", () => {
    try {
      painter.drawIfPressed();
    } catch (e) {
      expect(e.message).toBe("work only with all arguments");
    }
  });
  it("should event.buttons < 0", () => {
    painter.drawIfPressed(event, context, testArray);
    expect(testArray).toEqual(testArray);
    expect(context.beginPath).not.toHaveBeenCalled();
    expect(context.moveTo).not.toHaveBeenCalled();
    expect(context.lineTo).not.toHaveBeenCalled();
    expect(context.stroke).not.toHaveBeenCalled();
    expect(context.closePath).not.toHaveBeenCalled();
  });
  it("should event.buttons > 0", () => {
    event.buttons = 1;
    painter.drawIfPressed(event, context, testArray);
    expect(testArray).toEqual(testArray);
    expect(context.beginPath).toHaveBeenCalled();
    expect(context.moveTo).toHaveBeenCalled();
    expect(context.lineTo).toHaveBeenCalled();
    expect(context.stroke).toHaveBeenCalled();
    expect(context.closePath).toHaveBeenCalled();
    expect(testArray).toEqual([
      {
        brash: 10,
        color: "red",
        dx: 3,
        dy: 4,
        x: 1,
        y: 2,
      },
    ]);
  });
});
