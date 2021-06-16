import * as AT from './actionTypes';
import { support } from '../../helpers/support';

const { lsGet, lsSet, convert } = support;

const initialState = {
    isLoading: false,
    converterType: lsGet('converterType') ? lsGet('converterType') : 'lengths',
    from: '',
    to: '',
    quantity: '',
    tablo: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.SET_CONVERTER_TYPE: {
            const { value } = action.payload;
            lsSet('converterType', value);
            return { ...state, converterType: value };
        }
        case AT.SET_CONVERTER_FROM: {
            return { ...state, from: action.payload };
        }
        case AT.SET_CONVERTER_TO: {
            return { ...state, to: action.payload };
        }
        case AT.SET_CONVERTER_QUANTITY: {
            return { ...state, quantity: action.payload };
        }
        case AT.SET_CONVERTER_TABLO: {
            const { from, to, quantity } = action.payload;
            const tablo = convert(quantity, from, to);
            return { ...state, tablo };
        }
        default: return state;
    }
};
