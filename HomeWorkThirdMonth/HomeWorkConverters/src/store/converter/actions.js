import * as AT from './actionTypes';

export const setConverterType = payload => ({ type: AT.SET_CONVERTER_TYPE, payload });
export const setConverterFrom = payload => ({ type: AT.SET_CONVERTER_FROM, payload });
export const setConverterTo = payload => ({ type: AT.SET_CONVERTER_TO, payload });
export const setConverterQuantity = payload => ({ type: AT.SET_CONVERTER_QUANTITY, payload });
export const setConverterTablo = payload => ({ type: AT.SET_CONVERTER_TABLO, payload });
export const loadCurrency = payload => ({ type: AT.LOAD_CURRENCY, payload });
export const setNotes = payload => ({ type: AT.SET_NOTES, payload });
