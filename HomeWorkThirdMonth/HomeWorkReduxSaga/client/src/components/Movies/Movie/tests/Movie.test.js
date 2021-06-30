import React from 'react';
import { shallowSmart, mountSmart } from '../../../../../__tests__/helper';
import Movie from '../Movie';
import { act } from 'react-dom/test-utils';
import { defaultImage } from '../../../../constants/uiConstants';
import { NotificationManager } from 'react-notifications';
import configureStore from 'redux-mock-store';


const mockStore = configureStore();
const store = mockStore({
    movies: [{ id: 1, cover: 'cover', title: 'title', description: 'desc' },
    { id: 2, cover: 'cover', title: 'title', description: 'desc' }],
    moviesIds: [],
    isLoading: false,
    newMovie: {},
});

jest.mock('react-notifications', () => ({
    NotificationManager: {
        error: jest.fn()
    }
}));

describe('Movie', () => {
    const id = 1;
    it('Should match snapshot', () => {
        const component = shallowSmart(<Movie id={id} />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render Title', () => {
        const component = mountSmart(<Movie id={id} />, store);
        expect(component.find('Title')).toHaveLength(1);
    });
    it('Should render Cover', () => {
        const component = mountSmart(<Movie id={id} />, store);
        expect(component.find('Cover')).toHaveLength(1);
    });
    it('Should render Description', () => {
        const component = mountSmart(<Movie id={id} />, store);
        expect(component.find('Description')).toHaveLength(1);
    });
});
