import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../__tests__/helpers/testHelper';
import Converter from '../Converter';

jest.mock('react-modal');

const mockStore = configureStore();
const store = mockStore({
    isLoading: false,
    converterType: 'lengths',
    from: '',
    to: '',
    quantity: '',
    tablo: '',
    currency: {},
    notes: [],
});

describe('Converter', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<Converter />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render ConverterControlPanel', () => {
        const component = mountSmart(<Converter />, store);
        expect(component.find('ConverterControlPanel')).toHaveLength(1);
    });
    it('should render Tablo', () => {
        const component = mountSmart(<Converter />, store);
        expect(component.find('Tablo')).toHaveLength(1);
    });
    it('should render Form', () => {
        const component = mountSmart(<Converter />, store);
        expect(component.find('Form')).toHaveLength(1);
    });
});
