import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { shallowSmart } from '../../../../__tests__/helpers/testHelper';
import App from '../App';

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
        const component = shallowSmart(<App />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render Header', () => {
        const component = shallow(<App />);
        expect(component.find('Header')).toHaveLength(1);
    });
    it('should render Converter', () => {
        const component = shallow(<App />);
        expect(component.find('Converter')).toHaveLength(1);
    });
});
