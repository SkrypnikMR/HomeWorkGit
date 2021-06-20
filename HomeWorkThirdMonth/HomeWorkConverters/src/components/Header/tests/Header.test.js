import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../__tests__/helpers/testHelper';
import Header from '../Header';

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

describe('Button', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<Header />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render Header', () => {
        const component = mountSmart(<Header />, store);
        expect(component.find('ControlPanel')).toHaveLength(1);
    });
    it('should render Converter', () => {
        const component = mountSmart(<Header />, store);
        expect(component.find('h1')).toHaveLength(3);
    });
});
