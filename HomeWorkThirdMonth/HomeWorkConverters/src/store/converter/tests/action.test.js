import * as AT from '../actionTypes';
import * as actions from '../actions';


describe('actions', () => {
    describe('actions setConverterType', () => {
        it('should be defined', () => {
            expect(actions.setConverterType).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof actions.setConverterType).toBe('function');
        });
        it('should return object', () => {
            const payload = { somePayloadField: 'sad' };
            expect(actions.setConverterType(payload)).toEqual({ type: AT.SET_CONVERTER_TYPE, payload });
        });
    });
    describe('actions setConverterFrom', () => {
        it('should be defined', () => {
            expect(actions.setConverterFrom).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof actions.setConverterFrom).toBe('function');
        });
        it('should return object', () => {
            const payload = { somePayloadField: 'sad' };
            expect(actions.setConverterFrom(payload)).toEqual({ type: AT.SET_CONVERTER_FROM, payload });
        });
    });
    describe('actions setConverterTo', () => {
        it('should be defined', () => {
            expect(actions.setConverterTo).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof actions.setConverterTo).toBe('function');
        });
        it('should return object', () => {
            const payload = { somePayloadField: 'sad' };
            expect(actions.setConverterTo(payload)).toEqual({ type: AT.SET_CONVERTER_TO, payload });
        });
    });
    describe('actions setConverterQuantity', () => {
        it('should be defined', () => {
            expect(actions.setConverterQuantity).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof actions.setConverterQuantity).toBe('function');
        });
        it('should return object', () => {
            const payload = { somePayloadField: 'sad' };
            expect(actions.setConverterQuantity(payload)).toEqual({ type: AT.SET_CONVERTER_QUANTITY, payload });
        });
    });
    describe('actions setConverterTablo', () => {
        it('should be defined', () => {
            expect(actions.setConverterTablo).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof actions.setConverterTablo).toBe('function');
        });
        it('should return object', () => {
            const payload = { somePayloadField: 'sad' };
            expect(actions.setConverterTablo(payload)).toEqual({ type: AT.SET_CONVERTER_TABLO, payload });
        });
    });
    describe('actions loadCurrency', () => {
        it('should be defined', () => {
            expect(actions.loadCurrency).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof actions.loadCurrency).toBe('function');
        });
        it('should return object', () => {
            const payload = { somePayloadField: 'sad' };
            expect(actions.loadCurrency(payload)).toEqual({ type: AT.LOAD_CURRENCY, payload });
        });
    });
    describe('actions setNotes', () => {
        it('should be defined', () => {
            expect(actions.setNotes).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof actions.setNotes).toBe('function');
        });
        it('should return object', () => {
            const payload = { somePayloadField: 'sad' };
            expect(actions.setNotes(payload)).toEqual({ type: AT.SET_NOTES, payload });
        });
    });
});
