import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../../__tests__/helpers/testHelper';
import Tablo from '../Tablo';

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
        const component = shallowSmart(<Tablo />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render styled__StTablo', () => {
        const component = mountSmart(<Tablo />, store);
        expect(component.find('styled__StTablo')).toHaveLength(1);
    });
    it('should render styled__StTablo with syledP', () => {
        const mockStore = configureStore();
        const store = mockStore({
            isLoading: false,
            converterType: 'lengths',
            from: '',
            to: '',
            quantity: '',
            tablo: 'someTablo',
            currency: {},
            notes: [],
        });
        const component = mountSmart(<Tablo
            tablo='someTablo'
            from='METERS'
            to="VERSTS"
        />, store);
        expect(component.find('styled__StTablo')).toHaveLength(1);
        expect(component.find('styled__StP')).toHaveLength(1);
        expect(component.find('styled__StSpan')).toHaveLength(3);
    });
});
