import * as AT from './actionTypes';

export const getMoviesRequest = (payload) => ({ type: AT.GET_MOVIES_REQUEST, payload });
export const getMoviesSuccess = (payload) => ({ type: AT.GET_MOVIES_SUCCESS, payload });
export const getMoviesError = (payload) => ({ type: AT.GET_MOVIES_ERROR, payload });
export const deleteMovieSuccess = (payload) => ({ type: AT.DELETE_MOVIE_SUCCESS, payload });
