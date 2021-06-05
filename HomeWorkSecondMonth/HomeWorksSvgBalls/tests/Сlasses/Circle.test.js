import Circle from '../../src/js/Classes/Circle';
import { MAX_RADIUS, MIN_RADIUS, MAX_SPEED, MIN_SPEED } from '../../src/js/constants/constants';

jest.mock('../../src/js/constants/constants', () => ({
    MAX_RADIUS: 100,
    MIN_RADIUS: 100,
    MAX_SPEED: 100,
    MIN_SPEED: 100
}))

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('Circle create instance ', () => {
    beforeEach(() => {
        document.body.innerHTML = '<svg id="root"> </svg>'
    })
    afterEach(() => {
        document.body.innerHTML = '';
    })
    it('should be defined', () => {
        expect(Circle).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof Circle).toBe('function');
    })
    it('should be function constructor', () => {
        const circle = new Circle(30, 20);

        expect(circle).toBeInstanceOf(Circle);
    })
    it('should return istance with setParams method', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);

        expect(circle.setParams).toBeDefined();
        expect(typeof circle.setParams).toBe('function');
    })
    it('should return istance with init method', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);

        expect(circle.init).toBeDefined();
        expect(typeof circle.init).toBe('function');
    })
    it('should return istance with setX method', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);

        expect(circle.setX).toBeDefined();
        expect(typeof circle.setX).toBe('function');
    })
    it('should return istance with setY method', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);

        expect(circle.setY).toBeDefined();
        expect(typeof circle.setY).toBe('function');
    })
    it('should return istance with setDx method', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);

        expect(circle.setDx).toBeDefined();
        expect(typeof circle.setDx).toBe('function');
    })
    it('should return istance with setDy method', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);

        expect(circle.setDy).toBeDefined();
        expect(typeof circle.setDy).toBe('function');
    })
    it('should return istance with x property', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);
        expect(circle.x).toBeDefined();
        expect(circle.x).toBe(myX);
    })
    it('should return istance with y property', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);

        expect(circle.y).toBeDefined();
        expect(circle.y).toBe(myY);
    })
    it('should return istance with dx property', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);

        expect(circle.dx).toBeDefined();
        expect(circle.dx).toBe(Math.cos(Math.random() * 2 * Math.PI));
    })
    it('should return istance with dy property', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);
        expect(circle.dy).toBeDefined();
        expect(circle.dy).toBe(Math.sin(Math.random() * 2 * Math.PI));
    })
    it('should return istance with radius property', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);

        expect(circle.radius).toBeDefined();
        expect(circle.radius).toBe(Math.ceil(Math.random() * MAX_RADIUS + MIN_RADIUS));
    })
    it('should return istance with color property', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);
        const rnd = jest.fn().mockReturnValue(Math.floor(Math.random() * 255));
        const randomColor = rnd();
        const expectedStr = `rgb(${randomColor}, ${randomColor}, ${randomColor})`;

        expect(circle.color).toBeDefined();
        expect(circle.color).toBe(expectedStr);
    })
    it('should return istance with speed property', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);
        expect(circle.speed).toBeDefined();
        expect(circle.speed).toBe(Math.ceil(Math.random() * MAX_SPEED + MIN_SPEED));
    })
    it('should return istance with speed property', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);

        expect(circle.circle).toBeDefined();
        expect(circle.circle).toEqual(document.createElementNS(circle.svg.namespaceURI, 'circle'));
    })
    it('should return istance with setY method', () => {
        const myX = 30;
        const myY = 20;
        const circle = new Circle(myX, myY);

        expect(circle.svg).toBeDefined();
        expect(circle.svg).toBe(document.querySelector('svg'));
    })
})
describe('Circle init', () => {
    beforeEach(() => {
        document.body.innerHTML = '<svg id="root"> </svg>'
    })
    afterEach(() => {
        document.body.innerHTML = '';
    })
    it('should be defined', () => {
        expect(new Circle().init).toBeDefined();
    })
    it('should be function (method of Circle)', () => {
        expect(typeof new Circle().init).toBe('function');
    })
    it('should call all methods', () => {
        const testMethodsCircle = new Circle(30, 20);
        testMethodsCircle.circle.setAttribute = jest.fn();
        testMethodsCircle.svg.appendChild = jest.fn();

        testMethodsCircle.init();

        expect(testMethodsCircle.circle.setAttribute).toHaveBeenCalledTimes(4);
        expect(testMethodsCircle.circle.setAttribute).toHaveBeenCalledWith('cx', testMethodsCircle.x);
        expect(testMethodsCircle.circle.setAttribute).toHaveBeenCalledWith('cy', testMethodsCircle.y);
        expect(testMethodsCircle.circle.setAttribute).toHaveBeenCalledWith('r', testMethodsCircle.radius);
        expect(testMethodsCircle.circle.setAttribute).toHaveBeenCalledWith('fill', testMethodsCircle.color);
        expect(testMethodsCircle.svg.appendChild).toHaveBeenCalledWith(testMethodsCircle.circle);
    });
    it('should set circle "cx" Attribute to instance.circle', () => {
        const testCircleCX = new Circle(30, 20);
        const oldCX = testCircleCX.circle.getAttribute('cx');
        testCircleCX.init();

        expect(testCircleCX.circle.getAttribute('cx')).not.toBe(oldCX);
        expect(testCircleCX.circle.getAttribute('cx')).toBe(`${testCircleCX.x}`);
    })
    it('should set circle "cy" Attribute to instance.circle', () => {
        const testCircleCY = new Circle(310, 230);
        const oldCY = testCircleCY.circle.getAttribute('cy');

        testCircleCY.init();

        expect(testCircleCY.circle.getAttribute('cy')).not.toBe(oldCY);
        expect(testCircleCY.circle.getAttribute('cy')).toBe(`${testCircleCY.y}`);

    })
    it('should set circle "r" Attribute to instance.circle', () => {
        const testCircleR = new Circle(1230, 2130);
        const oldR = testCircleR.circle.getAttribute('r');

        testCircleR.init();

        expect(testCircleR.circle.getAttribute('r')).not.toBe(oldR);
        expect(testCircleR.circle.getAttribute('r')).toBe(`${testCircleR.radius}`);
    })
    it('should set circle "fill" Attribute to instance.circle', () => {
        const testCircleFILL = new Circle(30, 20);
        const oldFILL = testCircleFILL.circle.getAttribute('fill');

        testCircleFILL.init();

        expect(testCircleFILL.circle.getAttribute('fill')).not.toBe(oldFILL);
        expect(testCircleFILL.circle.getAttribute('fill')).toBe(testCircleFILL.color);
    });
    it('should append child to svg', () => {
        const testCircleAppend = new Circle(30, 20);
        const svgStartChields = document.querySelector('svg').childElementCount;

        testCircleAppend.init();
        expect(document.querySelector('svg').childElementCount).not.toBe(svgStartChields);
        expect(document.querySelector('svg').childElementCount).toBe(svgStartChields + 1);
        expect(document.querySelector('svg').hasChildNodes()).toBe(true);
        expect(document.querySelector('svg').children).toBe(testCircleAppend.svg.children);
    });
})
describe('Circle setParams', () => {
    beforeEach(() => {
        document.body.innerHTML = '<svg id="root"> </svg>'
    })
    afterEach(() => {
        document.body.innerHTML = '';
    })
    it('should be defined', () => {
        expect(new Circle().setParams).toBeDefined();
    })
    it('should be function (method of Circle)', () => {
        expect(typeof new Circle().setParams).toBe('function');
    })
    it('should change radius', () => {
        const radiusCircle = new Circle(30, 20);
        const oldRadius = radiusCircle.radius = 0;

        radiusCircle.setParams();

        expect(radiusCircle.radius).not.toBe(oldRadius);
        expect(radiusCircle.radius).toBe(Math.ceil(Math.random() * MAX_RADIUS + MIN_RADIUS))
    })
    it('should change speed', () => {
        const speedCircle = new Circle(30, 20);
        const oldSpeed = speedCircle.speed = 0;

        speedCircle.setParams();

        expect(speedCircle.speed).not.toBe(oldSpeed);
        expect(speedCircle.speed).toBe(Math.ceil(Math.random() * MAX_SPEED + MIN_SPEED))
    })
    it('should change color', () => {
        const colorCircle = new Circle(30, 20);
        const oldColor = colorCircle.color = 'red';
        const rnd = jest.fn().mockReturnValue(Math.floor(Math.random() * 255));
        const randomColor = rnd();
        const expectedStr = `rgb(${randomColor}, ${randomColor}, ${randomColor})`;

        colorCircle.setParams();

        expect(colorCircle.color).not.toBe(oldColor);
        expect(colorCircle.color).toBe(expectedStr);
    })
    it('should change dx', () => {
        const dXCircle = new Circle(30, 20);
        const oldDX = dXCircle.dx = 0;

        dXCircle.setParams();

        expect(dXCircle.dx).not.toBe(oldDX);
        expect(dXCircle.dx).toBe(Math.cos(Math.random() * 2 * Math.PI));
    })
    it('should change dy', () => {
        const dYCircle = new Circle(30, 20);
        const oldDY = dYCircle.dy = 0;

        dYCircle.setParams();

        expect(dYCircle.dy).not.toBe(oldDY);
        expect(dYCircle.dy).toBe(Math.sin(Math.random() * 2 * Math.PI));
    })
})
describe('Circle setX', () => {
    beforeEach(() => {
        document.body.innerHTML = '<svg id="root"> </svg>'
    })
    afterEach(() => {
        document.body.innerHTML = '';
    })
    it('should be defined', () => {
        expect(new Circle().setX).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof new Circle().setX).toBe('function');
    })
    it('should set new x from argument', () => {
        const setXCircle = new Circle(30, 20);
        const oldX = setXCircle.x;
        const expectedNumber = 150;
        setXCircle.setX(expectedNumber);
        expect(setXCircle.x).not.toBe(oldX);
        expect(setXCircle.x).toBe(expectedNumber);
    })
    it('should set new x to circle Atribute', () => {
        const setXCircle = new Circle(30, 20);
        const oldCX = setXCircle.circle.getAttribute('cx')
        const expectedNumber = 150;
        setXCircle.setX(expectedNumber);
        expect(setXCircle.circle.getAttribute('cx')).not.toBe(oldCX);
        expect(setXCircle.circle.getAttribute('cx')).toBe(`${expectedNumber}`);
    })
    it('should setAttrubute method are called', () => {
        const setXCircle = new Circle(30, 20);
        setXCircle.circle.setAttribute = jest.fn();
        setXCircle.setX(32);
        expect(setXCircle.circle.setAttribute).toHaveBeenCalledWith('cx', setXCircle.x)
    })
})
describe('Circle setY', () => {
    beforeEach(() => {
        document.body.innerHTML = '<svg id="root"> </svg>'
    })
    afterEach(() => {
        document.body.innerHTML = '';
    })
    it('should be defined', () => {
        expect(new Circle().setY).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof new Circle().setY).toBe('function');
    })
    it('should set new y from argument', () => {
        const setYCircle = new Circle(30, 20);
        const oldY = setYCircle.y;
        const expectedNumber = 150;
        setYCircle.setY(expectedNumber);
        expect(setYCircle.y).not.toBe(oldY);
        expect(setYCircle.y).toBe(expectedNumber);
    })
    it('should set new y to circle Atribute', () => {
        const setYCircle = new Circle(30, 20);
        const oldCY = setYCircle.circle.getAttribute('cy')
        const expectedNumber = 150;
        setYCircle.setY(expectedNumber);
        expect(setYCircle.circle.getAttribute('cy')).not.toBe(oldCY);
        expect(setYCircle.circle.getAttribute('cy')).toBe(`${expectedNumber}`);
    })
    it('should setAttrubute method are called', () => {
        const setYCircle = new Circle(30, 20);
        setYCircle.circle.setAttribute = jest.fn();
        setYCircle.setY(32);
        expect(setYCircle.circle.setAttribute).toHaveBeenCalledWith('cy', setYCircle.y)
    })
})
describe('Circle setDx', () => {
    beforeEach(() => {
        document.body.innerHTML = '<svg id="root"> </svg>'
    })
    afterEach(() => {
        document.body.innerHTML = '';
    })
    it('should be defined', () => {
        expect(new Circle().setDx).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof new Circle().setDx).toBe('function');
    })
    it('should set new y from argument', () => {
        const setDXCircle = new Circle(30, 20);
        const oldDX = setDXCircle.dx;
        const expectedNumber = 150;
        setDXCircle.setDx(expectedNumber);
        expect(setDXCircle.dx).not.toBe(oldDX);
        expect(setDXCircle.dx).toBe(expectedNumber);
    })
})
describe('Circle setDy', () => {
    beforeEach(() => {
        document.body.innerHTML = '<svg id="root"> </svg>'
    })
    afterEach(() => {
        document.body.innerHTML = '';
    })
    it('should be defined', () => {
        expect(new Circle().setDy).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof new Circle().setDy).toBe('function');
    })
    it('should set new y from argument', () => {
        const setDYCircle = new Circle(30, 20);
        const oldDY = setDYCircle.dy;
        const expectedNumber = 150;
        setDYCircle.setDy(expectedNumber);
        expect(setDYCircle.dy).not.toBe(oldDY);
        expect(setDYCircle.dy).toBe(expectedNumber);
    })
})