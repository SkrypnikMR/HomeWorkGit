import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../../__tests__/helpers/testHelper';
import Select from '../Select';

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
        const component = shallowSmart(<Select />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render Select', () => {
        const component = mountSmart(<Select />, store);
        expect(component.find('styled__StSelect')).toHaveLength(1);
    });
    it('should render Select with Option', () => {
        const component = mountSmart(<Select
            width="80%"
            option={[{ name: 'option', id: 'option' }]}
        />, store);
        expect(component.find('option')).toHaveLength(1);
    });
    it('should change option with from', () => {
        const setConvertFrom = jest.fn();
        const setConverterTo = jest.fn();
        const component = mountSmart(<Select
            width="80%"
            option={[{ name: 'option', id: 'option' }]}
            setConvertFrom={setConvertFrom}
            from='meters'
            setConverterTo={setConverterTo}
        />, store);
        component.find('select').simulate('change', { target: { value: 'da' } });
        expect(setConverterTo).toHaveBeenCalledWith('da');
    });
    it('should change option without from', () => {
        const setConvertFrom = jest.fn();
        const setConverterTo = jest.fn();
        const component = mountSmart(<Select
            width="80%"
            option={[{ name: 'option', id: 'option' }]}
            setConvertFrom={setConvertFrom}
            setConverterTo={setConverterTo}
        />, store);
        component.find('select').simulate('change', { target: { value: 'da' } });
        expect(setConverterTo).toHaveBeenCalledWith('da');
    });
});
