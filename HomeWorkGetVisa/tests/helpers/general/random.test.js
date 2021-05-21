import {
    getRndElement, getRndBalance, getRndAge, getRndDocuments, getRndNumber
} from '../../../src/js/helpers/general/random';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;


describe('getRndElement', () => {
    it('should be defined', () => {
        expect(getRndElement).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof getRndElement).toBe('function');
    })
    it('should return random array element', () => {
        const array = [1, 2, 3, 4, 5, 6];
        expect(getRndElement(array)).toBe(4);
    })
})
describe('getRndBalance', () => {
    it('should be defined', () => {
        expect(getRndBalance).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof getRndBalance).toBe('function');
    })
    it('should return balance', () => {
        expect(getRndBalance()).toBe(3750);
    })
})
describe('getRndAge', () => {
    it('should be defined', () => {
        expect(getRndAge).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof getRndAge).toBe('function');
    })
    it('should return balance', () => {
        expect(getRndAge()).toBe(53);
    })
})
describe('getRndDocuments', () => {
    it('should be defined', () => {
        expect(getRndDocuments).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof getRndDocuments).toBe('function');
    })
    it('should return balance', () => {
        expect(getRndDocuments()).toEqual([true, true, true]);
    })
})
describe('getRndNumber', () => {
    it('should be defined', () => {
        expect(getRndNumber).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof getRndNumber).toBe('function');
    })
    it('should return balance', () => {
        expect(getRndNumber(10, 20)).toBe(15);
        expect(getRndNumber(50, 100)).toBe(75);
        expect(getRndNumber(100, 200)).toBe(150);
    })
})