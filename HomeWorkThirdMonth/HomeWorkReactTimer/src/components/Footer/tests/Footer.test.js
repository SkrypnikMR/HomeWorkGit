import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from '../Footer';

describe('Footer', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Footer />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have h3', () => {
        const component = mount(<Footer />);
        expect(component.find('h3')).toHaveLength(1);
    });
    it('Should have a', () => {
        const component = mount(<Footer />);
        expect(component.find('a')).toHaveLength(1);
    });
});
