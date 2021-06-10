import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { icon } from '../../../helper/iconCreator';

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
    it('Should have Main ', () => {
        const component = mount(<App />);
        expect(component.find('Main')).toHaveLength(1);
    });
    it('Should have Footer ', () => {
        const component = mount(<App />);
        expect(component.find('Footer')).toHaveLength(1);
    });
    it('Should have in state theme like "light" and call toggleTheme and bulb with moon icon ', () => {
        const component = mount(<App />);
        component.find('Header').find('Button').simulate('click');
        expect(component.state().theme).toBe('dark');
        expect(component.state().bulb).toEqual(icon('dark'));
    });
    it('Should have in state theme like "dark" and call toggleTheme and bulb change on sun icon ', () => {
        const component = mount(<App />);
        component.find('Header').find('Button').simulate('click');
        component.find('Header').find('Button').simulate('click');
        expect(component.state().theme).toBe('light');
        expect(component.state().bulb).toEqual(icon('light'));
    });
});
