import { init } from '../src/js/app'

jest.mock('../src/js/helpers', () => ({
    bumbps: jest.fn(),
    render: {
        drawCircle: jest.fn(),
        smashWatch: jest.fn()
    }
}))

import helpers from '../src/js/helpers';

describe('init', () => {
    it('should be defined', () => {
        expect(init).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof init).toBe('function');
    })
    it('should give eventListener ', () => {
        document.body.innerHTML = `<svg id="root"></svg>`;
        const mokAEL = jest.fn()
        const mockQS = jest.fn().mockReturnValue({
            addEventListener: mokAEL
        });
        const realQuerySelector = document.querySelector;
        document.querySelector = mockQS;
        expect(init()).toBe();
        expect(mockQS).toHaveBeenCalledWith('#root');
        expect(mockQS('#root').addEventListener).toHaveBeenCalled();

        document.querySelector = realQuerySelector;
        document.body.innerHTML = '';
    })
    it('should be call import functions with needed params ', () => {
        document.body.innerHTML = `<svg id="root"></svg>`;
        init()
        const svg = document.querySelector('#root');
        const expectedEvent = new Event('click');
        svg.dispatchEvent(expectedEvent);
        expect(helpers.render.drawCircle).toHaveBeenCalledWith(expectedEvent);
        expect(helpers.render.smashWatch).toHaveBeenCalledWith(helpers.bumps);

        document.body.innerHTML = ``;
    })
})