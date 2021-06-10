import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../Main';

describe('Main', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Main />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have Main ', () => {
        const component = mount(<Main />);
        expect(component.find('Main')).toHaveLength(1);
    });
    it('Should have Timer', () => {
        const component = mount(<Main />);
        expect(component.find('Timer')).toHaveLength(1);
    });
});
