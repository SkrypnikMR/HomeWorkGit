import React from 'react';
import { NotificationManager } from 'react-notifications';
import { shallow, mount } from 'enzyme';
import Description from '../Description';
import { act } from 'react-dom/test-utils';


jest.mock('react-notifications', () => ({
    NotificationManager: {
        error: jest.fn()
    }
}))

describe('Description', () => {
    let props;
    it('Should match snapshot', () => {
        props = {
            name: 'description',
            id: 1,
            description: 'someDescription',
            updateMovie: jest.fn(),
        }
        const component = shallow(<Description {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render Input ', () => {
        props = {
            name: 'description',
            id: 1,
            description: 'someDescription',
            updateMovie: jest.fn(),
        }
        const component = mount(<Description {...props} />);
        act(() => component.find('p').props().onDoubleClick());
        component.update();
        expect(component.find('p')).toHaveLength(0);
        expect(component.find('Input')).toHaveLength(1);
        expect(component.find('div').hasClass('movie__description')).toBe(true);
    });
    it('Should change Input value ', () => {
        props = {
            name: 'description',
            id: 1,
            description: 'someDescription',
            updateMovie: jest.fn(),
        }
        const testValue = 'testValue';
        const component = mount(<Description {...props} />);
        act(() => component.find('p').props().onDoubleClick());
        component.update();
        act(() => component.find('Input').props().onChangeInput({ target: { value: testValue } }));
        component.update();
        expect(component.find('Input').props().value).toBe(testValue);
    });
    it('Should blur Input but with empty value ', async () => {
        props = {
            name: 'description',
            id: 1,
            description: 'someDescription',
            updateMovie: jest.fn(),
        }
        const testValue = '';
        const component = mount(<Description {...props} />);
        act(() => component.find('p').props().onDoubleClick());
        component.update();
        await act(async () => await component.find('Input').props().onBlurInput({ target: { value: testValue } }));
        component.update();
        expect(NotificationManager.error).toHaveBeenCalled();
    });
    it('Should blur Input without empty value ', async () => {
        props = {
            name: 'description',
            id: 1,
            description: 'someDescription',
            updateMovie: jest.fn(),
        }
        const testValue = 'someValue';
        const component = mount(<Description {...props} />);
        act(() => component.find('p').props().onDoubleClick());
        component.update();
        act(() => component.find('Input').props().onChangeInput({ target: { value: testValue } }));
        component.update();
        await act(async () => await component.find('Input').props().onBlurInput({ target: { value: testValue } }));
        component.update();
        expect(props.updateMovie).toHaveBeenCalledWith({ changeParam: props.name, id: props.id, newData: testValue })
    });
});
