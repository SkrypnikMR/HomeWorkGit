import { createSelector } from 'reselect';

const getMoviesStore = (state) => state;

export const getMoviesList = createSelector(
    getMoviesStore,
    ({ movies }) => movies,
);
export const getMovieById = createSelector(
    getMoviesList,
    (_state, { id }) => id,
    (movies, id) => movies.find((movie) => movie.id === id),
);

export const getIsLoading = createSelector(
    getMoviesStore,
    ({ isLoading }) => isLoading
);

export const getMovieField = createSelector(
    getMovieById,
    (_state, { name }) => name,
    (movie, name) => movie[name]
);
