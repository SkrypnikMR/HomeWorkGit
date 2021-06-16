import { createSelector } from 'reselect';

const getMoviesStore = state => state.movies;

export const getMoviesStoreList = state => state.movies.movies;

export const getMoviesList = createSelector(
    getMoviesStore,
    moviesStore => moviesStore.movies,
);
export const getMovieById = createSelector(
    getMoviesList,
    (_state, { id }) => id,
    (movies, id) => movies.find(movie => movie.id === id),
);

export const getIsLoading = createSelector(
    getMoviesStore,
    moviesStore => moviesStore.isLoading,
);
