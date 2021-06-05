import "regenerator-runtime/runtime";
import 'jest-canvas-mock';
import {
    promiseStart, promiseAllFunc
} from '../../../src/js/helpers/general/promises.js';
jest.mock('../../../src/js/helpers/drowers/drowers.js', () => ({
    drowCircle: jest.fn(),
    drowText: jest.fn()
}))
jest.mock('../../../src/js/helpers/general/random.js', () => ({
    getRndNumber: jest.fn().mockReturnValue(100)
}))
import { drowCircle, drowText } from '../../../src/js/helpers/drowers/drowers.js';
import { getRndNumber } from '../../../src/js/helpers/general/random.js';

describe('promiseStart', () => {
    beforeEach(() => {
        jest.setTimeout(5001);
    })
    it('should be defined', async () => {
        expect(promiseStart).toBeDefined();
    })
    it('should be defined', async () => {
        expect(typeof promiseStart).toBe('function');
    })
    it('return resolve and go then after then', async () => {
        document.body.innerHTML = '<canvas id="mainCanvas"></canvas>';

        const candidate = { age: 25, english: 'B1', balance: 3450 };
        const callbacks = [jest.fn().mockReturnValue(true), jest.fn(), jest.fn(), jest.fn()];
        const promiseAllFunc = jest.fn().mockResolvedValue({ candidate });
        const canvas = document.querySelector("#mainCanvas");
        const context = canvas.getContext("2d");
        const x = 0;
        const k = (2 * Math.PI) / 100;
        const distance = candidate.distance;
        const startPoint = candidate.balancePoint + 5;

        const result = await promiseStart(candidate, callbacks, promiseAllFunc);
        expect(result).toEqual({ "candidate": { "age": 25, "balance": 3450, "english": "B1" } });
        expect(drowCircle).toHaveBeenCalledWith(context, canvas, x, k, startPoint, distance, 100, 47, "green");
        expect(drowCircle).toHaveBeenCalledWith(context, canvas, x, k, startPoint, distance, 100, 0, "green");
        expect(drowText).toHaveBeenCalledWith(context, '☑', distance, startPoint + 100, 'green', 20);
    })
    it('return resolve and go then after then', async () => {
        document.body.innerHTML = '<canvas id="mainCanvas"></canvas>';

        const candidate = { age: 25, english: 'B1', balance: 3450 };
        const callbacks = [jest.fn().mockReturnValue(false), jest.fn(), jest.fn(), jest.fn()];
        const promiseAllFunc = jest.fn().mockResolvedValue({ candidate });
        const canvas = document.querySelector("#mainCanvas");
        const context = canvas.getContext("2d");
        const x = 0;
        const k = (2 * Math.PI) / 100;
        const distance = candidate.distance;
        const startPoint = candidate.balancePoint + 5;
        try {
            const result = await promiseStart(candidate, callbacks, promiseAllFunc);
        } catch (e) {
            expect(drowText).toHaveBeenCalledWith(context, 'false', distance, startPoint + 100, 'red', 12);
            expect(drowCircle).toHaveBeenCalledWith(context, canvas, x, k, startPoint, distance, 100, 0, "green");
        }
    })
    document.body.innerHTML = '';
})
describe('promiseAllFunc', () => {
    beforeEach(() => {
        jest.setTimeout(100);
    })
    it('should be defined', async () => {
        expect(promiseAllFunc).toBeDefined();
    })
    it('should be defined', async () => {
        expect(typeof promiseAllFunc).toBe('function');
    })
    it('should be resolved and item === candidate.age ', async () => {
        document.body.innerHTML = '<canvas id="mainCanvas"></canvas>';
        const candidate = { age: 25, english: 'B1', balance: 3450 };
        const item = candidate.age;
        const callback = jest.fn().mockReturnValue(true);
        const answer = await promiseAllFunc(candidate, item, callback);
        expect(answer).toEqual(candidate);
        expect(drowCircle).toHaveBeenCalled();
        expect(drowText).toHaveBeenCalled();
        expect(getRndNumber).toHaveBeenCalledWith(1000, 20 * 1000);
    })
    it('should be resolved and item === candidate.english ', async () => {
        document.body.innerHTML = '<canvas id="mainCanvas"></canvas>';
        const candidate = { age: 25, english: 'B1', balance: 3450 };
        const item = candidate.english;
        const callback = jest.fn().mockReturnValue(true);
        const answer = await promiseAllFunc(candidate, item, callback);
        expect(answer).toEqual(candidate);
        expect(drowCircle).toHaveBeenCalled();
        expect(drowText).toHaveBeenCalled();
        expect(getRndNumber).toHaveBeenCalledWith(1000, 20 * 1000);
    })
    it('should be resolved and typeof item === "object" ', async () => {
        document.body.innerHTML = '<canvas id="mainCanvas"></canvas>';
        const candidate = { age: 25, english: 'B1', balance: 3450 };
        const item = {};
        const callback = jest.fn().mockReturnValue(true);
        const answer = await promiseAllFunc(candidate, item, callback);
        expect(answer).toEqual(candidate);
        expect(drowCircle).toHaveBeenCalled();
        expect(drowText).toHaveBeenCalled();
        expect(getRndNumber).toHaveBeenCalledWith(1000, 20 * 1000);
    })
    it('should be rejected', async () => {
        document.body.innerHTML = '<canvas id="mainCanvas"></canvas>';
        const candidate = { age: 25, english: 'B1', balance: 3450 };
        const item = candidate.age;
        const callback = jest.fn().mockReturnValue(false);
        try {
            await promiseAllFunc(candidate, item, callback);
        } catch (e) {
            expect(e).toBe();
            expect(drowCircle).toHaveBeenCalled();
            expect(drowText).toHaveBeenCalled();
            expect(getRndNumber).toHaveBeenCalledWith(1000, 20 * 1000);
        }
    })

})