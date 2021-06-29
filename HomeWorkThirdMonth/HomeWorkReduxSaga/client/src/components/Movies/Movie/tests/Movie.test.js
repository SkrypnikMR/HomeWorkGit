import React from 'react';
import { shallow, mount } from 'enzyme';
import Movie from '../Movie';
import { act } from 'react-dom/test-utils';
import { defaultImage } from '../../../../constants/uiConstants';
import { NotificationManager } from 'react-notifications';

jest.mock('react-notifications', () => ({
    NotificationManager: {
        error: jest.fn()
    }
}));

describe('Movie', () => {
    let props;
    it('Should match snapshot', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: false
        }
        const component = shallow(<Movie {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have Loader', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: true
        }
        const component = mount(<Movie {...props} />);
        expect(component.find('Loader')).toHaveLength(1);
    });
    it('Should have h5', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: false
        }
        const component = mount(<Movie {...props} />);
        expect(component.find('h5')).toHaveLength(1);
    });
    it('Should have img', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: false
        }
        const component = mount(<Movie {...props} />);
        expect(component.find('img')).toHaveLength(1);
    });
    it('Should Input and no have h5', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: false
        }
        const component = mount(<Movie {...props} />);
        component.find('h5').simulate('dblclick');
        expect(component.find('Input')).toHaveLength(1);
        expect(component.find('h5')).toHaveLength(0);
    });
    it('Should Input and no have img', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: false
        }
        const component = mount(<Movie {...props} />);
        component.find('img').simulate('dblclick');
        expect(component.find('Input')).toHaveLength(1);
        expect(component.find('img')).toHaveLength(0);
    });
    it('Should Input and no have p', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: false
        }
        const component = mount(<Movie {...props} />);
        component.find('p').simulate('dblclick');
        expect(component.find('Input')).toHaveLength(1);
        expect(component.find('p')).toHaveLength(0);
    });
    it('Should Input and no have p', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: false
        }
        const component = mount(<Movie {...props} />);
        component.find('Button').simulate('click');
        expect(props.deleteMovie).toHaveBeenCalledWith(props.movie.id)
    });
    it('Should call onError', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: false
        }
        const component = mount(<Movie {...props} />);
        act(() => {
            component.find('img').props().onError();
        })
        component.update();
        expect(component.find('img').props().src).toBe(defaultImage)
    });
    it('Should call handleOnChange', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: false
        }
        const component = mount(<Movie {...props} />);
        component.find('img').simulate('dblclick');
        act(() => {
            component.find('Input').props()
                .onChangeInput({ target: { name: 'cover', value: 'new Cover' } })
        })
        component.update();
        act(() => {
            component.find('Input').props()
                .onBlurInput({ target: { name: 'cover', value: 'new Cover' } })
        })
        expect(props.updateMovie).toHaveBeenCalledWith({
            changeParam: 'cover',
            newData: 'new Cover',
            id: props.movie.id
        })
    });
    it('Should call handleOnBlur but value ="" ', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: false
        }
        const component = mount(<Movie {...props} />);
        component.find('img').simulate('dblclick');
        act(() => {
            component.find('Input').props()
                .onChangeInput({ target: { name: 'cover', value: '' } })
        })
        component.update();
        act(() => {
            component.find('Input').props()
                .onBlurInput({ target: { name: 'cover', value: '' } })
        });
        expect(NotificationManager.error).toHaveBeenCalledWith('Please Enter newData for field', 'INPUT ERROR', 2000);
    });
    it('Should call handleOnBlur value = someValue ', () => {
        props = {
            movie: {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc',
            },
            deleteMovie: jest.fn(),
            updateMovie: jest.fn(),
            isLoading: false
        }
        const component = mount(<Movie {...props} />);
        component.find('img').simulate('dblclick');
        component.find('Input').simulate('change', { taget: { name: 'cover', value: 'new Cover' } })
        act(() => {
            component.find('Input').props().onBlurInput({ target: { value: '12321' } })
        })
        expect(props.updateMovie).toHaveBeenCalledWith({ changeParam: 'cover', id: 1, newData: "" });
    });
});
