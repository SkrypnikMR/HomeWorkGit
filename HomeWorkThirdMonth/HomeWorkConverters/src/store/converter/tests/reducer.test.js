import * as AT from '../actionTypes';
import { reducer, initialState } from '../reducer';


describe('reducer', () => {
    it('should be defined', () => {
        expect(reducer).toBeDefined();
    });
    it('should be function', () => {
        expect(typeof reducer).toBe('function');
    });
    it('should return default state', () => {
        expect(reducer(initialState, { type: 'default' })).toEqual(initialState);
    });
    it('should return new ConverterType', () => {
        expect(reducer(initialState, {
            type: AT.SET_CONVERTER_TYPE,
            payload: 'kek',
        })).toEqual({ ...initialState, converterType: 'kek' });
    });
    it('should return new from', () => {
        expect(reducer(initialState, {
            type: AT.SET_CONVERTER_FROM,
            payload: 'kek',
        })).toEqual({ ...initialState, from: 'kek' });
    });
    it('should return new to', () => {
        expect(reducer(initialState, {
            type: AT.SET_CONVERTER_TO,
            payload: 'kek',
        })).toEqual({ ...initialState, to: 'kek' });
    });
    it('should return new quantity', () => {
        expect(reducer(initialState, {
            type: AT.SET_CONVERTER_QUANTITY,
            payload: 'kek',
        })).toEqual({ ...initialState, quantity: 'kek' });
    });
    it('should return new tablo', () => {
        expect(reducer(initialState, {
            type: AT.SET_CONVERTER_TABLO,
            payload: 'kek',
        })).toEqual({ ...initialState, tablo: 'kek' });
    });
    it('should return new currency', () => {
        expect(reducer(initialState, {
            type: AT.LOAD_CURRENCY,
            payload: 'kek',
        })).toEqual({ ...initialState, currency: 'kek' });
    });
    it('should return new notes', () => {
        expect(reducer(initialState, {
            type: AT.SET_NOTES,
            payload: 'kek',
        })).toEqual({ ...initialState, notes: 'kek' });
    });
});
