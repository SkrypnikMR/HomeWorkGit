import React from 'react';
import { NotificationManager } from 'react-notifications';
import { shallow, mount } from 'enzyme';
import Title from '../title';
import { act } from 'react-dom/test-utils';


jest.mock('react-notifications', () => ({
    NotificationManager: {
        error: jest.fn()
    }
}))

describe('Title', () => {
    let props;
    it('Should match snapshot', () => {
        props = {
            name: 'title',
            id: 1,
            title: 'someTitle',
            updateMovie: jest.fn(),
            deleteMovie: jest.fn(),
        }
        const component = shallow(<Title {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render Input ', () => {
        props = {
            name: 'title',
            id: 1,
            title: 'someTitle',
            updateMovie: jest.fn(),
            deleteMovie: jest.fn(),
        }
        const component = mount(<Title {...props} />);
        act(() => component.find('h5').props().onDoubleClick());
        component.update();
        expect(component.find('h5')).toHaveLength(0);
        expect(component.find('Input')).toHaveLength(1);
    });
    it('Should call deleteMovie', () => {
        props = {
            name: 'title',
            id: 1,
            title: 'someTitle',
            updateMovie: jest.fn(),
            deleteMovie: jest.fn(),
        }
        const component = mount(<Title {...props} />);
        act(() => component.find('Button').props().onButtonClick());
        component.update();
        expect(props.deleteMovie).toHaveBeenCalledWith(props.id);
    });
    it('Should change Input value ', () => {
        props = {
            name: 'title',
            id: 1,
            title: 'someTitle',
            updateMovie: jest.fn(),
            deleteMovie: jest.fn(),
        }
        const testValue = 'testValue';
        const component = mount(<Title {...props} />);
        act(() => component.find('h5').props().onDoubleClick());
        component.update();
        act(() => component.find('Input').props().onChangeInput({ target: { value: testValue } }));
        component.update();
        expect(component.find('Input').props().value).toBe(testValue);
    });
    it('Should blur Input but with empty value ', async () => {
        props = {
            name: 'title',
            id: 1,
            title: 'someTitle',
            updateMovie: jest.fn(),
            deleteMovie: jest.fn(),
        }
        const testValue = '';
        const component = mount(<Title {...props} />);
        act(() => component.find('h5').props().onDoubleClick());
        component.update();
        await act(async () => await component.find('Input').props().onBlurInput({ target: { value: testValue } }));
        component.update();
        expect(NotificationManager.error).toHaveBeenCalled();
    });
    it('Should blur Input without empty value ', async () => {
        props = {
            name: 'title',
            id: 1,
            title: 'someTitle',
            updateMovie: jest.fn(),
            deleteMovie: jest.fn(),
        }
        const testValue = 'someValue';
        const component = mount(<Title {...props} />);
        act(() => component.find('h5').props().onDoubleClick());
        component.update();
        act(() => component.find('Input').props().onChangeInput({ target: { value: testValue } }));
        component.update();
        await act(async () => await component.find('Input').props().onBlurInput({ target: { value: testValue } }));
        component.update();
        expect(props.updateMovie).toHaveBeenCalledWith({ changeParam: props.name, id: props.id, newData: testValue })
    });
});
