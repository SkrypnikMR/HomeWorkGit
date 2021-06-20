import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../../__tests__/helpers/testHelper';
import ConverterControlPanel from '../ConverterControlPanel';

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
        const component = shallowSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
        />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StDropDownsControl', () => {
        const component = mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
        />, store);
        expect(component.find('styled__StDropDownsControl')).toHaveLength(1);
    });
    it('should render MySelect', () => {
        const component = mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
        />, store);
        expect(component.find('MySelect')).toHaveLength(2);
    });
    it('should render p', () => {
        const component = mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
        />, store);
        expect(component.find('p')).toHaveLength(1);
    });
    it('should render Input', () => {
        const component = mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
        />, store);
        expect(component.find('Input')).toHaveLength(1);
    });
    it('should render Button', () => {
        const component = mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
        />, store);
        expect(component.find('Button')).toHaveLength(1);
    });
    it('should notValidInputValue Button', () => {
        const component = mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
            quantity='sad'
            setConverterTablo={jest.fn()}
            from=''
            to=''
            converterType='lengths'
            currency={[]}
            setConverterQuantity={jest.fn()}
        />);
        component.find('Button').simulate('click');
        expect(component.state().error).toBe('Only numbers');
    });
    it('should empty value Button click', () => {
        const component = mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
            quantity=''
            setConverterTablo={jest.fn()}
            from=''
            to=''
            converterType='lengths'
            currency={[]}
            setConverterQuantity={jest.fn()}
        />);
        component.find('Button').simulate('click');
        expect(component.state().error).toBe('Please enter value');
    });
    it('should valid value Button click converType === lengths', () => {
        const setConverterTablo = jest.fn();
        const setConverterQuantity = jest.fn();
        const component = mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
            quantity='123'
            setConverterTablo={setConverterTablo}
            from='meters'
            to='yards'
            converterType='lengths'
            currency={[]}
            setConverterQuantity={setConverterQuantity}
        />);
        component.find('Button').simulate('click');
        expect(setConverterTablo).toHaveBeenCalledWith('134.51403');
        expect(setConverterQuantity).toHaveBeenCalledWith('');
    });
    it('should valid value Button click convertType === curency', () => {
        const setConverterTablo = jest.fn();
        const setConverterQuantity = jest.fn();
        const getCurrency = jest.fn();
        const component = mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
            quantity='123'
            setConverterTablo={setConverterTablo}
            from='UAH'
            to='UER'
            converterType='curency'
            currency={{ UER: 3 }}
            setConverterQuantity={setConverterQuantity}
            getCurrency={getCurrency}
        />);
        component.find('Button').simulate('click');
        expect(setConverterTablo).toHaveBeenCalledWith('41');
        expect(setConverterQuantity).toHaveBeenCalledWith('');
    });
    it('should change Input Value', () => {
        const setConverterTablo = jest.fn();
        const setConverterQuantity = jest.fn();
        const component = mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
            quantity='123'
            setConverterTablo={setConverterTablo}
            from='meters'
            to='yards'
            converterType='lengths'
            currency={[]}
            setConverterQuantity={setConverterQuantity}
        />);
        const testValue = 'kek';
        component.find('input').simulate('change', { target: { value: testValue } });
        expect(setConverterQuantity).toHaveBeenCalledWith(testValue);
    });
    it('should mount Element', () => {
        const setConverterTablo = jest.fn();
        const setConverterQuantity = jest.fn();
        const getCurrency = jest.fn();
        mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
            quantity='123'
            setConverterTablo={setConverterTablo}
            from='meters'
            to='yards'
            converterType='curency'
            currency={[]}
            getCurrency={getCurrency}
            setConverterQuantity={setConverterQuantity}
        />);
        expect(getCurrency).toHaveBeenCalled();
    });
    it('should update component', () => {
        const setConverterTablo = jest.fn();
        const setConverterQuantity = jest.fn();
        const getCurrency = jest.fn();
        const component = mountSmart(<ConverterControlPanel
            setConverterFrom={jest.fn()}
            setConverterTo={jest.fn()}
            quantity='123'
            setConverterTablo={setConverterTablo}
            from='meters'
            to='yards'
            converterType='lengths'
            currency={[]}
            getCurrency={getCurrency}
            setConverterQuantity={setConverterQuantity}
        />);
        component.setProps({ converterType: 'curency' });
        expect(getCurrency).toHaveBeenCalled();
    });
});
