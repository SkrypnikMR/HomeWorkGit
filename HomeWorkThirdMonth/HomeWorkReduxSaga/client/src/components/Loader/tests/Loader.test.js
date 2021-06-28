import React from 'react';
import { shallow, mount } from 'enzyme';
import Loader from '../Loader';

describe('Loader', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Loader />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have Loader ', () => {
        const component = mount(<Loader />);
        expect(component.find('Loader')).toHaveLength(1);
    });
    it('Should have divs ', () => {
        const component = mount(<Loader />);
        expect(component.find('div')).toHaveLength(2);
    });
    it('Should have p ', () => {
        const component = mount(<Loader />);
        expect(component.find('p')).toHaveLength(1);
    });
    it('Should have span ', () => {
        const component = mount(<Loader />);
        expect(component.find('span')).toHaveLength(1);
    });
});
