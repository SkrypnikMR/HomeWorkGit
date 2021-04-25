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
describe("Painter drawLikeUser", () => {
  it("should to be defined", () => {
    expect(painter.drawLikeUser).toBeDefined();
  });
  it("should to be function", () => {
    expect(typeof painter.drawLikeUser).toBeDefined();
  });
  it("should called without arguments", () => {
    try{
      const testPainter = new Painter();
      testPainter.drawLikeUser();
    }catch(e){
      expect(e.message).toBe('work only with all arguments')
    }
  });
  it("should all context methods has called, all context properties has changed.", () => {
    const painter = new Painter();
    const testDrowObject = {
      x: 10,
      y: 20,
      dx: 10,
      dy: 10,
      color: "red",
      brash: 10,
    };
    const context = {
      beginPath: jest.fn(),
      strokeStyle: "black",
      lineWidth: 5,
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
      closePath: jest.fn(),
    };
    painter.drawLikeUser(testDrowObject, context);
    expect(context.beginPath).toHaveBeenCalled();
    expect(context.strokeStyle).toBe(testDrowObject.color);
    expect(context.lineWidth).toBe(testDrowObject.brash);
    expect(context.moveTo).toHaveBeenCalledWith(
      testDrowObject.x,
      testDrowObject.y
    );
    expect(context.lineTo).toHaveBeenCalledWith(
      testDrowObject.x - testDrowObject.dx,
      testDrowObject.y - testDrowObject.dy
    );
    expect(context.stroke).toHaveBeenCalled();
    expect(context.closePath).toHaveBeenCalled();
  });
});
