import React from 'react';
import { icon } from './iconCreator';

describe('icon', () => {
    it('should be defined', () => {
        expect(icon).toBeDefined();
    });
    it('should be function', () => {
        expect(typeof icon).toBe('function');
    });
    it('should return &#9728;', () => {
        const mode = 'light';
        expect(icon(mode)).toEqual(<>☀</>);
    });
    it('should return &#127770;', () => {
        const mode = 'dark';
        expect(icon(mode)).toEqual(<>🌚</>);
    });
});
