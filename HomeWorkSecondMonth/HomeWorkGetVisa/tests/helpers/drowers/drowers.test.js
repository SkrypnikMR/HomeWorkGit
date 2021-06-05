import {
    clearRect, drowFillCircle, drowText, drowBackground, drowCircle
} from '../../../src/js/helpers/drowers/drowers.js';

jest.useFakeTimers();

describe('clearRect', () => {
    it('should be defined', () => {
        expect(clearRect).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof clearRect).toBe('function');
    })
    it('should call clearRect', () => {
        const mockClearRect = jest.fn();
        const canvas = {
            width: '100px',
            height: '100px',
            getContext: jest.fn().mockReturnValue({ clearRect: mockClearRect })
        };
        clearRect(canvas);
        expect(canvas.getContext).toHaveBeenCalledWith('2d');
        expect(mockClearRect).toHaveBeenCalledWith(0, 0, canvas.width, canvas.height);
    })
    it('should be called without canvas', () => {
        try {
            clearRect()
        } catch (e) {
            expect(e.message).toBe(`Cannot read property 'getContext' of undefined`);
        }
    })

})
describe('drowFillCircle', () => {
    it('should be defined', () => {
        expect(drowFillCircle).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof drowFillCircle).toBe('function');
    })
    it('should called all methods', () => {
        const context = {
            beginPath: jest.fn(),
            arc: jest.fn(),
            lineWidth: 2,
            lineCap: 'sqrt',
            fillStyle: 'red',
            fill: jest.fn(),
            closePath: jest.fn()
        }
        const startPoint = 100;
        const distance = 102;
        const color = 'yellow';
        drowFillCircle(context, startPoint, distance, color);
        expect(context.beginPath).toHaveBeenCalled();
        expect(context.arc).toHaveBeenCalledWith(startPoint, distance, 150, 0, 360, false);
        expect(context.fill).toHaveBeenCalled();
        expect(context.closePath).toHaveBeenCalled();
    })
    it('should change context values', () => {
        const context = {
            beginPath: jest.fn(),
            arc: jest.fn(),
            lineWidth: 2,
            lineCap: 'sqrt',
            fillStyle: 'red',
            fill: jest.fn(),
            closePath: jest.fn()
        }
        const startPoint = 100;
        const distance = 102;
        const color = 'yellow';
        drowFillCircle(context, startPoint, distance, color);
        expect(context.lineWidth).toBe(3);
        expect(context.lineCap).toBe('round');
        expect(context.fillStyle).toBe('yellow');
    })
})
describe('drowText', () => {
    it('should be defined', () => {
        expect(drowText).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof drowText).toBe('function');
    })
    it('should call all methods', () => {
        const context = {
            beginPath: jest.fn(),
            font: 'serif',
            fillStyle: 'red',
            fillText: jest.fn(),
            closePath: jest.fn(),
        }
        const item = 'Name';
        const distance = 102;
        const startPoint = 110;
        const color = 'yellow';
        const fontsize = '10px';
        drowText(context, item, distance, startPoint, color, fontsize)
        expect(context.beginPath).toHaveBeenCalled();
        expect(context.fillText).toHaveBeenCalledWith(item, startPoint - item.length * 2, distance);
        expect(context.closePath).toHaveBeenCalled();
    })
    it('should change context properties', () => {
        const context = {
            beginPath: jest.fn(),
            font: 'serif',
            fillStyle: 'red',
            fillText: jest.fn(),
            closePath: jest.fn(),
        }
        const item = 'Name';
        const distance = 102;
        const startPoint = 110;
        const color = 'yellow';
        const fontsize = '10';
        drowText(context, item, distance, startPoint, color, fontsize)
        expect(context.font).toBe(`bold ${fontsize}px  serif`);
        expect(context.fillStyle).toBe(color);
    })
})
describe('drowBackground', () => {
    it('should be defined', () => {
        expect(drowBackground).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof drowBackground).toBe('function');
    })
    it('should be call all methods in function', () => {
        const canvas = { width: 100, height: 100 };
        const context = {
            fillStyle: 'white',
            fillRect: jest.fn(),
            strokeRect: jest.fn()
        }
        drowBackground(canvas, context);
        expect(context.fillRect).toHaveBeenCalledWith(1, 1, canvas.width - 1, canvas.height - 1);
        expect(context.strokeRect).toHaveBeenCalledWith(0.5, 0.5, canvas.width - 1, canvas.height);
    })
    it('should be change context properties', () => {
        const canvas = { width: 100, height: 100 };
        const context = {
            fillStyle: 'white',
            fillRect: jest.fn(),
            strokeRect: jest.fn()
        }
        drowBackground(canvas, context);
        expect(context.fillStyle).toBe("rgba(94, 144, 252, 1)");
    })
})
describe('drowCircle', () => {
    it('should be defined', () => {
        expect(drowCircle).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof drowCircle).toBe('function');
    })
    it('should called all methods', () => {
        const context = {
            beginPath: jest.fn(),
            arc: jest.fn(),
            stroke: jest.fn(),
            closePath: jest.fn()
        }
        const startPoint = 100;
        const distance = 102;
        const color = 'yellow';
        const canvas = {};
        const x = 0;
        const k = 150;
        const percents = 100;
        const speed = 200;
        drowCircle(context, canvas, x, k, startPoint, distance, percents, speed, color);
        expect(context.beginPath).toHaveBeenCalled();
        expect(context.arc).toHaveBeenCalledWith(startPoint, distance, 50, 0, x * k, false);
        expect(context.stroke).toHaveBeenCalled();
        expect(context.closePath).toHaveBeenCalled();
    });
    it('should change context properties', () => {
        const context = {
            beginPath: jest.fn(),
            arc: jest.fn(),
            stroke: jest.fn(),
            closePath: jest.fn(),
            lineWidth: 2,
            lineCap: 'sqrt',
            strokeStyle: 'white'
        }
        const startPoint = 100;
        const distance = 102;
        const color = 'yellow';
        const canvas = {};
        const x = 0;
        const k = 150;
        const percents = 100;
        const speed = 200;
        drowCircle(context, canvas, x, k, startPoint, distance, percents, speed, color);
        expect(context.lineWidth).toBe(3);
        expect(context.lineCap).toBe('round');
        expect(context.strokeStyle).toBe(color);
    })
    it('should change context properties', () => {
        const context = {
            beginPath: jest.fn(),
            arc: jest.fn(),
            stroke: jest.fn(),
            closePath: jest.fn(),
            lineWidth: 2,
            lineCap: 'sqrt',
            strokeStyle: 'white'
        }
        const startPoint = 100;
        const distance = 102;
        const color = 'yellow';
        const canvas = {};
        const x = 0;
        const k = 150;
        const percents = 25;
        const speed = 2000;
        drowCircle(context, canvas, x, k, startPoint, distance, percents, speed, color);
        jest.advanceTimersByTime(2500);
        expect(setTimeout).toHaveBeenCalledTimes(28);
    })
    it('should call clearTimeout', () => {
        const context = {
            beginPath: jest.fn(),
            arc: jest.fn(),
            stroke: jest.fn(),
            closePath: jest.fn(),
            lineWidth: 2,
            lineCap: 'sqrt',
            strokeStyle: 'white'
        }
        const startPoint = 100;
        const distance = 102;
        const color = 'yellow';
        const canvas = {};
        const x = 51;
        const k = 150;
        const percents = 50;
        const speed = 200;
        drowCircle(context, canvas, x, k, startPoint, distance, percents, speed, color);
        expect(clearTimeout).toHaveBeenCalled();
    })
})