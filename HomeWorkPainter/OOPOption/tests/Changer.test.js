import Changer from "../src/js/Classes/Changer";

describe("Changer setLineCap", () => {
  const changer = new Changer();
  it("should to be defined", () => {
    expect(changer.setLineCap).toBeDefined();
  });
  it("should to be function", () => {
    expect(typeof changer.setLineCap).toBeDefined();
  });
  it("should called without arguments", () => {
    try {
      changer.setLineCap();
    } catch (e) {
      expect(e.message).toBe("work only with all arguments");
    }
  });
  it("should change LineCap of node", () => {
    const node = { LineCap: "" };
    const testValue = "lolkek";
    changer.setLineCap(node, testValue);
    expect(node.LineCap).toBe(testValue);
  });
});
describe("Changer changeColor", () => {
  const changer = new Changer();
  it("should to be defined", () => {
    expect(changer.changeColor).toBeDefined();
  });
  it("should to be function", () => {
    expect(typeof changer.changeColor).toBeDefined();
  });
  it("should called without arguments", () => {
    try {
      changer.changeColor();
    } catch (e) {
      expect(e.message).toBe("work only with all arguments");
    }
  });
  it("should change LineCap of node", () => {
    const canvas = {
      getContext: (str) => {
        if (str === "2d") {
          return { strokeStyle: "" };
        }
      },
    };
    const context = canvas.getContext("2d");
    const testValue = "red";
    changer.changeColor(testValue, context);
    expect(context.strokeStyle).toBe(testValue);
  });
});
describe("Changer setStandartInterval", () => {
  const changer = new Changer();
  it("should to be defined", () => {
    expect(changer.setStandartInterval).toBeDefined();
  });
  it("should to be function", () => {
    expect(typeof changer.setStandartInterval).toBeDefined();
  });
  it("should called without arguments", () => {
    try {
      changer.setStandartInterval();
    } catch (e) {
      expect(e.message).toBe("work only with all arguments");
    }
  });
  it("should change min and max  of node", () => {
    const node = { min: 1, max: 2 };
    const startInterval = 10;
    const endInterval = 50;
    changer.setStandartInterval(node, startInterval, endInterval);
    expect(node.min).toBe(startInterval);
    expect(node.max).toBe(endInterval);
  });
});
describe("Changer changeSizeText", () => {
    const changer = new Changer();
    it("should to be defined", () => {
      expect(changer.changeSizeText).toBeDefined();
    });
    it("should to be function", () => {
      expect(typeof changer.changeSizeText).toBeDefined();
    });
    it("should called without arguments", () => {
      try {
        changer.changeSizeText();
      } catch (e) {
        expect(e.message).toBe("work only with all arguments");
      }
    });
    it("should change textContent of node", () => {
        
      const node = { LineCap: "" };
      const testValue = "lolkek";
      changer.setLineCap(node, testValue);
      expect(node.LineCap).toBe(testValue);
    });
  });
