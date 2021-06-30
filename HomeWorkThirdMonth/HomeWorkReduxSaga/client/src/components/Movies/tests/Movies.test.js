import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../__tests__/helper';
import Movies from '../Movies';

const mockStore = configureStore();
const store = mockStore({
    movies: [{ id: 1, cover: 'cover', title: 'title', description: 'desc' },
    { id: 2, cover: 'cover', title: 'title', description: 'desc' }],
    moviesIds: [],
    isLoading: false,
    newMovie: {},
});

describe('Movies', () => {
    const getMovies = jest.fn()
    it('Should match snapshot', () => {
        const component = shallowSmart(<Movies
            isLoading={false}
            getMovies={getMovies}
            movies={[]}
        />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have Loader', () => {
        const component = mountSmart(<Movies
            isLoading={true}
            getMovies={getMovies}
            movies={[]}
        />, store);
        expect(component.find('Loader')).toHaveLength(1);
    });
    it('Should have Movies', () => {
        const component = mountSmart(<Movies
            isLoading={false}
            getMovies={getMovies}
            movies={[{ id: 1, cover: 'cover', title: 'title', description: 'desc' }, { id: 2, cover: 'cover', title: 'title', description: 'desc' }]}
        />, store);
        expect(component.find('Memo(Movie)')).toHaveLength(2);
    });
});
