import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('App', () => {
    it('Should match snapshot', () => {
        const component = shallow(<App />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have App ', () => {
        const component = mount(<App />);
        expect(component.find('App')).toHaveLength(1);
    });
    it('Should have Header ', () => {
        const component = mount(<App />);
        expect(component.find('Header')).toHaveLength(1);
    });
});
