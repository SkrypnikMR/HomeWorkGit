import { bumpHorizontally, bumpVertically } from '../../src/js/helpers/bumps'

jest.mock('../../src/js/constants/constants', () => ({
    MAX_HEIGHT:1400,
    MAX_WIDTH: 1400,
}))

describe('bumpHorizontally', () => {
    it('should be defined', () => {
        expect(bumpHorizontally).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof bumpHorizontally).toBe('function');
    })
    it('should throw error', () => {
        try {
            bumpHorizontally();
        } catch (e) {
            expect(e.message).toBe(`Cannot read property 'x' of undefined`);
        }
    })
    it('should not call setDx', () => {
        const el = {
            x: 500,
            radius: 50,
            dx: 100,
            setDx: jest.fn()
        }
        expect(bumpHorizontally(el)).toBe();
        expect(el.setDx).not.toHaveBeenCalledWith(el.dx * -1);
    })
    it('should call setDx if x - radius <= 0', () => {
        const el = {
            x: 10,
            radius: 10,
            dx: 100,
            setDx: jest.fn()
        }
        expect(bumpHorizontally(el)).toBe();
        expect(el.setDx).toHaveBeenCalledWith(el.dx * -1);
    })
    it('should call setDx if x - radius <= 0', () => {
        const el = {
            x: 10,
            radius: 12,
            dx: 100,
            setDx: jest.fn()
        }
        expect(bumpHorizontally(el)).toBe();
        expect(el.setDx).toHaveBeenCalledWith(el.dx * -1);
    })
    it('should call setDx if x + radius >= MAX_WIDTH', () => {
        const el = {
            x: 1200,
            radius: 200,
            dx: 100,
            setDx: jest.fn()
        }
        expect(bumpHorizontally(el)).toBe();
        expect(el.setDx).toHaveBeenCalledWith(el.dx * -1);
    })
    it('should call setDx if x + radius >= MAX_WIDTH', () => {
        const el = {
            x: 1200,
            radius: 500,
            dx: 100,
            setDx: jest.fn()
        }
        expect(bumpHorizontally(el)).toBe();
        expect(el.setDx).toHaveBeenCalledWith(el.dx * -1);
    })
})
describe('bumpVertically', () => {
    it('should be defined', () => {
        expect(bumpVertically).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof bumpVertically).toBe('function');
    })
    it('should throw error', () => {
        try {
            bumpVertically();
        } catch (e) {
            expect(e.message).toBe(`Cannot read property 'y' of undefined`);
        }
    })
    it('should not call setDx', () => {
        const el = {
            y: 500,
            radius: 50,
            dy: 100,
            setDy: jest.fn()
        }
        expect(bumpVertically(el)).toBe();
        expect(el.setDy).not.toHaveBeenCalledWith(el.dy * -1);
    })
    it('should call setDx if x - radius <= 0', () => {
        const el = {
            y: 10,
            radius: 10,
            dy: 100,
            setDy: jest.fn()
        }
        expect(bumpVertically(el)).toBe();
        expect(el.setDy).toHaveBeenCalledWith(el.dy * -1);
    })
    it('should call setDx if x - radius <= 0', () => {
        const el = {
            y: 10,
            radius: 12,
            dx: 100,
            setDy: jest.fn()
        }
        expect(bumpVertically(el)).toBe();
        expect(el.setDy).toHaveBeenCalledWith(el.dy * -1);
    })
    it('should call setDx if x + radius >= MAX_WIDTH', () => {
        const el = {
            y: 1200,
            radius: 200,
            dy: 100,
            setDy: jest.fn()
        }
        expect(bumpVertically(el)).toBe();
        expect(el.setDy).toHaveBeenCalledWith(el.dy * -1);
    })
    it('should call setDx if x + radius >= MAX_WIDTH', () => {
        const el = {
            y: 1200,
            radius: 500,
            dy: 100,
            setDy: jest.fn()
        }
        expect(bumpVertically(el)).toBe();
        expect(el.setDy).toHaveBeenCalledWith(el.dy * -1);
    })
})