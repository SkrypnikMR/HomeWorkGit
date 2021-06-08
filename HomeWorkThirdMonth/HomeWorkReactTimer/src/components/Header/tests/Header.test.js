import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../Header'

describe('Header', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Header />)
        expect(component.html()).toMatchSnapshot()
    })
    it('Should have Header ', () => {
        const component = mount(<Header />)
        expect(component.find('Header')).toHaveLength(1)
    })
    it('Should have Header ', () => {
        const component = mount(<Header />)
        expect(component.find('h1')).toHaveLength(1)
    })
})