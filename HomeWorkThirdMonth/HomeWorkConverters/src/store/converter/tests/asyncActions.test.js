import { getCurrency } from '../asyncActions';
import { loadCurrency } from '../actions';

jest.mock('../actions', () => ({
    loadCurrency: jest.fn().mockReturnValue('kek'),
}));

global.fetch = jest.fn().mockReturnValue({
    json: jest.fn().mockReturnValue([{ buy: '123123' },
    { buy: '123123' },
    { buy: '123123' }],
    ),
});

describe('getCurrency', () => {
    it('should be defined', () => {
        expect(getCurrency).toBeDefined();
    });
    it('should be func', () => {
        expect(typeof getCurrency).toBe('function');
    });
    it('should return func', () => {
        expect(typeof getCurrency()).toBe('function');
    });
    it('should dispatch action', async () => {
        const dispatch = jest.fn();
        await getCurrency()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(loadCurrency());
    });
});
