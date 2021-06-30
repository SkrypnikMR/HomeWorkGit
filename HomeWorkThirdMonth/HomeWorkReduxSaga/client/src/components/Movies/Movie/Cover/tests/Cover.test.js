import React from 'react';
import { NotificationManager } from 'react-notifications';
import { shallow, mount } from 'enzyme';
import Cover from '../Cover';
import { act } from 'react-dom/test-utils';
import { defaultImage } from '../../../../../constants/uiConstants';


jest.mock('react-notifications', () => ({
    NotificationManager: {
        error: jest.fn()
    }
}))

describe('Cover', () => {
    let props;
    it('Should match snapshot', () => {
        props = {
            name: 'cover',
            id: 1,
            cover: 'someCover',
            updateMovie: jest.fn(),
        }
        const component = shallow(<Cover {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render img', () => {
        props = {
            name: 'cover',
            id: 1,
            cover: 'someCover',
            updateMovie: jest.fn(),
        }
        const component = mount(<Cover {...props} />);
        expect(component.find('img')).toHaveLength(1);
    });
    it('Should render img with src === cover', () => {
        props = {
            name: 'cover',
            id: 1,
            cover: 'someCover',
            updateMovie: jest.fn(),
        }
        const component = mount(<Cover {...props} />);
        expect(component.find('img').props().src).toBe(props.cover);
    });
    it('Should render img with src === defaultImage', () => {
        props = {
            name: 'cover',
            id: 1,
            cover: 'someCover',
            updateMovie: jest.fn(),
        }
        const component = mount(<Cover {...props} />);
        act(() => component.find('img').props().onError());
        component.update();
        expect(component.find('img').props().src).toBe(defaultImage);
    });
    it('Should render Input ', () => {
        props = {
            name: 'cover',
            id: 1,
            cover: 'someCover',
            updateMovie: jest.fn(),
        }
        const component = mount(<Cover {...props} />);
        act(() => component.find('img').props().onDoubleClick());
        component.update();
        expect(component.find('img')).toHaveLength(0);
        expect(component.find('Input')).toHaveLength(1);
        expect(component.find('div').hasClass('movie__cover')).toBe(true);
    });
    it('Should change Input value ', () => {
        props = {
            name: 'cover',
            id: 1,
            cover: 'someCover',
            updateMovie: jest.fn(),
        }
        const testValue = 'testValue';
        const component = mount(<Cover {...props} />);
        act(() => component.find('img').props().onDoubleClick());
        component.update();
        act(() => component.find('Input').props().onChangeInput({ target: { value: testValue } }));
        component.update();
        expect(component.find('Input').props().value).toBe(testValue);
    });
    it('Should blur Input but with empty value ', async () => {
        props = {
            name: 'cover',
            id: 1,
            cover: 'someCover',
            updateMovie: jest.fn(),
        }
        const testValue = '';
        const component = mount(<Cover {...props} />);
        act(() => component.find('img').props().onDoubleClick());
        component.update();
        await act(async () => await component.find('Input').props().onBlurInput({ target: { value: testValue } }));
        component.update();
        expect(NotificationManager.error).toHaveBeenCalled();
    });
    it('Should blur Input without empty value ', async () => {
        props = {
            name: 'cover',
            id: 1,
            cover: 'someCover',
            updateMovie: jest.fn(),
        }
        const testValue = 'someValue';
        const component = mount(<Cover {...props} />);
        act(() => component.find('img').props().onDoubleClick());
        component.update();
        act(() => component.find('Input').props().onChangeInput({ target: { value: testValue } }));
        component.update();
        await act(async () => await component.find('Input').props().onBlurInput({ target: { value: testValue } }));
        component.update();
        expect(props.updateMovie).toHaveBeenCalledWith({ changeParam: props.name, id: props.id, newData: testValue })
    });
});
