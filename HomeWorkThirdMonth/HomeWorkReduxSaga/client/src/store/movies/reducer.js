import * as AT from './actionTypes';

const initialState = {
    movies: [],
    moviesIds: [],
    isLoading: false,
    newMovie: {},
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.GET_MOVIES_REQUEST: return { ...state, isLoading: true };
        case AT.GET_MOVIES_SUCCESS: return { ...state, movies: action.payload, isLoading: false };
        case AT.GET_MOVIES_ERROR: return { ...state, isLoading: false };
        case AT.DELETE_MOVIE_SUCCESS: return {
            ...state,
            movies: state.movies.filter((movie) => movie.id !== action.payload.id),
        };

        default: return state;
    }
};
