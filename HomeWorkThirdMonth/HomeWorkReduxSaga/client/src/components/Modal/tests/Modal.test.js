import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../Modal';

describe('Modal', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Modal />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have Modal ', () => {
        const component = mount(<Modal />);
        expect(component.find('Modal')).toHaveLength(1);
    });
    it('Should have divs', () => {
        const component = mount(<Modal />);
        expect(component.find('div')).toHaveLength(4);
    });
    it('Should have divs', () => {
        const component = mount(<Modal />);
        expect(component.find('div').at(0).hasClass('modal hide')).toBe(true);
    });
    it('Should have divs', () => {
        const component = mount(<Modal myClassName={true} />);
        expect(component.find('div').at(0).hasClass('modal')).toBe(true);
        expect(component.find('div').at(0).hasClass('hide')).toBe(false);
    });
    it('Should have div modal__content', () => {
        const component = mount(<Modal />);
        expect(component.find('div').at(1).hasClass('modal__content')).toBe(true);
    });
    it('Should have div content__header', () => {
        const component = mount(<Modal />);
        expect(component.find('div').at(2).hasClass('content__header')).toBe(true);
    });
    it('Should have h3', () => {
        const component = mount(<Modal />);
        expect(component.find('h3')).toHaveLength(1);
    });
    it('Should have div content__body', () => {
        const component = mount(<Modal />);
        expect(component.find('div').at(3).hasClass('content__body')).toBe(true);
    });
    it('Should have div content__body', () => {
        const component = mount(<Modal />);
        expect(component.find('div').at(3).hasClass('content__body')).toBe(true);
    });
    it('Should have Input', () => {
        const component = mount(<Modal />);
        expect(component.find('Input')).toHaveLength(3);
    });
    it('Should change Input 1 ', () => {
        const component = mount(<Modal />);
        component.find('Input').at(0).simulate('change', { target: { name: 'cover', value: 'newCover' } })
    });
    it('Should change Input 2', () => {
        const component = mount(<Modal />);
        component.find('Input').at(1).simulate('change', { target: { name: 'description', value: 'newDescription' } })
    });
    it('Should change Input 3', () => {
        const component = mount(<Modal />);
        component.find('Input').at(2).simulate('change', { target: { name: 'title', value: 'newTitle' } })
    });
    it('Should not disabled addMovie button', () => {
        const component = mount(<Modal />);
        component.find('Input').at(0).simulate('change', { target: { name: 'cover', value: 'newCover' } })
        component.find('Input').at(1).simulate('change', { target: { name: 'description', value: 'newDescription' } })
        component.find('Input').at(2).simulate('change', { target: { name: 'title', value: 'newTitle' } })
        expect(component.find('Button').at(1).props().disabled).toBe(false);
    });
    it('Should click on modal field', () => {
        const postMovies = jest.fn();
        const onButtonClick = jest.fn();
        const component = mount(<Modal postMovies={postMovies} onButtonClick={onButtonClick} />);
        component.find('div').at(0).simulate('click');
        expect(component.find('div').at(0).hasClass('hide')).toBe(true);
    });
    it('Should click addMovie button and call functions', () => {
        const postMovies = jest.fn();
        const onButtonClick = jest.fn();
        const component = mount(<Modal postMovies={postMovies} onButtonClick={onButtonClick} />);
        component.find('Input').at(0).simulate('change', { target: { name: 'cover', value: 'newCover' } })
        component.find('Input').at(1).simulate('change', { target: { name: 'description', value: 'newDescription' } })
        component.find('Input').at(2).simulate('change', { target: { name: 'title', value: 'newTitle' } })
        component.find('Button').at(1).simulate('click');
        expect(postMovies).toHaveBeenCalled();
        expect(onButtonClick).toHaveBeenCalled();
    });
});
