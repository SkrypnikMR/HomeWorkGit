import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Button onButtonClick={jest.fn()} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have Button ', () => {
        const component = mount(<Button onButtonClick={jest.fn()} />);
        expect(component.find('button')).toHaveLength(1);
    });
    it('Should call function from props on click on the button', () => {
        const btnOnClick = jest.fn();
        const title = 'testTitle';
        const component = mount(<Button onButtonClick={btnOnClick} title={title} />);

        component.simulate('click');

        expect(btnOnClick).toHaveBeenCalled();
        expect(component.html()).toBe(`<button class="custom__button">${title}</button>`);
    });
});
