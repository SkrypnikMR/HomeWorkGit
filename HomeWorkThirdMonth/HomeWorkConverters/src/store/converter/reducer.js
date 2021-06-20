import * as AT from './actionTypes';
import { support } from '../../helpers/support';

const { lsGet } = support;

export const initialState = {
    isLoading: false,
    converterType: lsGet('converterType') ? lsGet('converterType') : 'lengths',
    from: '',
    to: '',
    quantity: '',
    tablo: '',
    currency: {},
    notes: lsGet('notes') ? lsGet('notes') : [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.SET_CONVERTER_TYPE: return { ...state, converterType: action.payload };
        case AT.SET_CONVERTER_FROM: return { ...state, from: action.payload };
        case AT.SET_CONVERTER_TO: return { ...state, to: action.payload };
        case AT.SET_CONVERTER_QUANTITY: return { ...state, quantity: action.payload };
        case AT.SET_CONVERTER_TABLO: return { ...state, tablo: action.payload };
        case AT.LOAD_CURRENCY: return { ...state, currency: action.payload };
        case AT.SET_NOTES: return { ...state, notes: action.payload };
        default: return { ...state };
    }
};
