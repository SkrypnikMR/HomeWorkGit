import { drawCircle, smashWatch } from '../../src/js/helpers/render'


jest.mock('../../src/js/Classes/Circle', () => {
    return jest.fn().mockImplementation(() => {
        return { init: jest.fn() };
    });
});
jest.mock('../../src/js/constants/constants', () => ({
    allCircles: [],
}));
jest.mock('../../src/js/helpers/bumps', () => ({
    bumpHorizontally: jest.fn(),
    bumpVertically: jest.fn()
}));
import { allCircles } from '../../src/js/constants/constants';
import { bumpHorizontally, bumpVertically } from '../../src/js/helpers/bumps';

describe('drawCircle', () => {
    it('should be defined', () => {
        expect(drawCircle).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof drawCircle).toBe('function');
    })
    it('should be function', () => {
        const e = { offsetX: 100, offsetY: 200 };
        const size = allCircles.length;
        expect(drawCircle(e)).toBe();
        expect(allCircles.length).toBe(size + 1);
        expect(allCircles[0].init).toHaveBeenCalled();
    })
})
describe('smashWatch', () => {
    const first = {
        x: 100,
        y: 200,
        speed: 30,
        radius: 20,
        dx: 300,
        dy: 300,
        setDx: jest.fn(),
        setDy: jest.fn(),
        setX: jest.fn(),
        setY: jest.fn(),
    };
    const second = {
        x: 100,
        y: 200,
        speed: 30,
        radius: 20,
        dx: 300,
        dy: 300,
        setDx: jest.fn(),
        setDy: jest.fn(),
        setX: jest.fn(),
        setY: jest.fn(),
    };
    beforeEach(() => {
        jest.useFakeTimers();
        let count = 0;
        jest.spyOn(window, 'requestAnimationFrame')
            .mockImplementation(cb => setTimeout(() => cb(100 * (++count)), 100))
        allCircles.push(first);
        allCircles.push(second);
    })
    afterEach(() => {
        window.requestAnimationFrame
            .mockRestore();
        jest.clearAllTimers();
        allCircles.length = 0;
    })
    it('should be defined', () => {
        expect(smashWatch).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof smashWatch).toBe('function');
    })
    it('should be call element methods and  smash', () => {
        jest.advanceTimersByTime(200);
        smashWatch();
        expect(first.setX).toHaveBeenCalledWith(second.x + (second.speed / 16) * second.dx)
        expect(first.setY).toHaveBeenCalledWith(second.y + (second.speed / 16) * second.dy)
        expect(bumpHorizontally).toHaveBeenCalledWith(first);
        expect(bumpVertically).toHaveBeenCalledWith(first);
        expect(requestAnimationFrame).toHaveBeenCalledWith(smashWatch);
        expect(first.setDx).toHaveBeenCalledWith(Math.cos(Math.acos(first.dx) * 1.57))
        expect(first.setDy).toHaveBeenCalledWith(Math.sin(Math.asin(first.dy) * 1.57))
        expect(second.setDx).toHaveBeenCalledWith(Math.cos(Math.acos(second.dx) * 1.57))
        expect(second.setDy).toHaveBeenCalledWith(Math.sin(Math.asin(second.dy) * 1.57))
    })
})
