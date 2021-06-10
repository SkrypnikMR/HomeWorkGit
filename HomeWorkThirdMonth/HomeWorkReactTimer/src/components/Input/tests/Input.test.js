import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../Input';

describe('Input', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Input />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have Input ', () => {
        const component = mount(<Input />);
        expect(component.find('Input')).toHaveLength(1);
    });
    it('Should call function if changed value ', () => {
        const mockOnChangePropsFunc = jest.fn();
        const component = mount(<Input onChangeInput={mockOnChangePropsFunc} />);
        component.find('Input').simulate('change');
        expect(mockOnChangePropsFunc).toHaveBeenCalled();
    });
});
