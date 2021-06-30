import * as AT from './actionTypes';

export const initialState = {
    movies: [],
    moviesIds: [],
    isLoading: false,
    newMovie: {},
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.START_MOVIES_REQUEST: return { ...state, isLoading: true };
        case AT.GET_MOVIES_SUCCESS: return { ...state, movies: action.payload, isLoading: false };
        case AT.GET_MOVIES_ERROR: return { ...state, isLoading: false };
        case AT.POST_MOVIE_SUCCESS: return { ...state, isLoading: false };
        case AT.POST_MOVIE_ERROR: return { ...state, isLoading: false };
        case AT.DELETE_MOVIE_SUCCESS: return {
            ...state,
            movies: state.movies.filter((movie) => movie.id !== action.payload.id),
            isLoading: false
        };
        case AT.DELETE_MOVIE_ERROR: return { ...state, isLoading: false };
        case AT.UPDATE_MOVIE_SUCCESS: {
            return {
                ...state,
                movies: state.movies.map((movie) => {
                    const { changeParam, id, newData } = action.payload;
                    if (movie.id === id) {
                        movie[changeParam] = newData;
                    }
                    return movie;
                }),
                isLoading: false
            };
        }
        case AT.UPDATE_MOVIE_ERROR: return { ...state, isLoading: false };
        default: return { ...state };
    }
};
