import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowSmart, mountSmart } from '../../../../../__tests__/helpers/testHelper';
import ControlPanel from '../ControlPanel';

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
        const component = shallowSmart(<ControlPanel notes={[{
            tablo: 'kek',
            from: 'shrek',
            to: 'fiona',
        }]}
        />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render Header', () => {
        const component = mountSmart(<ControlPanel notes={[]} />, store);
        expect(component.find('Button')).toHaveLength(3);
    });
    it('should render Converter', () => {
        const component = mountSmart(<ControlPanel notes={[]} />, store);
        expect(component.find('h1')).toHaveLength(2);
    });
    it('should click on lengths button', () => {
        const setConverterType = jest.fn();
        const converterType = 'currency';
        const setConverterTo = jest.fn();
        const setConverterFrom = jest.fn();

        const component = mountSmart(
            <ControlPanel
                setConverterType={setConverterType}
                converterType={converterType}
                setConverterTo={setConverterTo}
                setConverterFrom={setConverterFrom}
                notes={[]}
            />, store);
        component.find('Button').first().simulate('click');
        expect(setConverterType).toHaveBeenCalled();
        expect(setConverterFrom).toHaveBeenCalled();
        expect(setConverterTo).toHaveBeenCalled();
    });
    it('should click on currency button', () => {
        const setConverterType = jest.fn();
        const converterType = 'lengths';
        const setConverterTo = jest.fn();
        const setConverterFrom = jest.fn();

        const component = mountSmart(
            <ControlPanel
                setConverterType={setConverterType}
                converterType={converterType}
                setConverterTo={setConverterTo}
                setConverterFrom={setConverterFrom}
                notes={[]}
            />, store);
        component.find('Button').at(1).simulate('click');
        expect(setConverterType).toHaveBeenCalled();
        expect(setConverterFrom).toHaveBeenCalled();
        expect(setConverterTo).toHaveBeenCalled();
    });
    it('should click on modal button', () => {
        const component = shallow(<ControlPanel notes={[]} />);
        component.find('Button').at(2).simulate('click');
        expect(component.state().showModal).toBe(true);
    });
    it('should click on close button', () => {
        const component = shallow(<ControlPanel notes={[]} />);
        component.find('Button').at(2).simulate('click');
        component.find('Button').at(3).simulate('click');
        expect(component.state().showModal).toBe(false);
    });
    it('should render li with notes ', () => {
        const component = shallow(<ControlPanel notes={[{
            tablo: 'kek',
            from: 'shrek',
            to: 'fiona',
        }]}
        />);
        expect(component.find('styled__StLi')).toHaveLength(1);
    });
});
